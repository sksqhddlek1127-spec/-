// IndexedDB storage for persisting user-uploaded authentic event photos
// This ensures images remain permanently saved on the user's browser across reloads,
// without being overridden by any AI generation or resets.

const DB_NAME = 'CFP_Authentic_Photos_DB';
const STORE_NAME = 'event_photos';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveCustomEventPhoto(id: string, dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put({ id, dataUrl, updatedAt: Date.now() });
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to save photo to IndexedDB, fallback to localStorage', err);
    try {
      localStorage.setItem(`cfp_photo_${id}`, dataUrl);
    } catch (e) {
      console.error('localStorage quota exceeded', e);
    }
  }
}

export async function getCustomEventPhoto(id: string): Promise<string | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(id);
      req.onsuccess = () => {
        if (req.result && req.result.dataUrl) {
          resolve(req.result.dataUrl);
        } else {
          // Check localStorage fallback
          const local = localStorage.getItem(`cfp_photo_${id}`);
          resolve(local || null);
        }
      };
      req.onerror = () => {
        const local = localStorage.getItem(`cfp_photo_${id}`);
        resolve(local || null);
      };
    });
  } catch (err) {
    const local = localStorage.getItem(`cfp_photo_${id}`);
    return local || null;
  }
}

export async function getAllCustomEventPhotos(): Promise<Record<string, string>> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();
      req.onsuccess = () => {
        const map: Record<string, string> = {};
        if (Array.isArray(req.result)) {
          for (const item of req.result) {
            if (item && item.id && item.dataUrl) {
              map[item.id] = item.dataUrl;
            }
          }
        }
        resolve(map);
      };
      req.onerror = () => resolve({});
    });
  } catch {
    return {};
  }
}

// Compress and resize image file to prevent heavy memory usage
export function fileToDataUrl(file: File, maxWidth = 1920, maxHeight = 1200, quality = 0.9): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };
      img.onerror = () => reject(new Error('Failed to load image for compression'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}
