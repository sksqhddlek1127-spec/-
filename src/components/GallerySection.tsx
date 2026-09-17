import React, { useState, useEffect, useRef } from 'react';
import {
  EVENT_CASES,
  GALLERY_PHOTOS,
  BUSINESS_INFO,
  HERO_IMAGE_FALLBACK,
} from '../data/parkData';
import { ImageWithFallback } from './ImageWithFallback';
import {
  getAllCustomEventPhotos,
  saveCustomEventPhoto,
  fileToDataUrl,
} from '../utils/photoStorage';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'group' | 'sports' | 'bbq' | 'tournament'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; desc?: string } | null>(null);

  // Persistent Custom Authentic Event Photos Map (Loaded from IndexedDB)
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadTargetId, setUploadTargetId] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Load custom stored photos on mount
  useEffect(() => {
    getAllCustomEventPhotos().then((storedMap) => {
      if (storedMap && Object.keys(storedMap).length > 0) {
        setCustomPhotos(storedMap);
      }
    });
  }, []);

  const handleOpenUpload = (targetId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadTargetId(targetId);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !uploadTargetId) return;

    try {
      setIsProcessing(true);
      const dataUrl = await fileToDataUrl(file);
      await saveCustomEventPhoto(uploadTargetId, dataUrl);
      setCustomPhotos((prev) => ({
        ...prev,
        [uploadTargetId]: dataUrl,
      }));
    } catch (err) {
      console.error('Failed to process image:', err);
    } finally {
      setIsProcessing(false);
      setUploadTargetId(null);
    }
  };

  const filteredPhotos = activeFilter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="w-full py-16 sm:py-20 bg-surface-container-low">
      {/* Hidden File Input for Direct Local Image Attachment */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/jpg, image/webp"
        className="hidden"
      />

      <div className="max-w-[1240px] mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
              ACTUAL EVENT ARCHIVE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-extrabold tracking-tight">
              생생한 실제 행사 현장 둘러보기
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              공식 네이버 블로그를 통해 청주풋볼파크에서 개최된 대기업, 공공기관, 중소기업의 실제 행사 사진과 후기를 지속적으로 업데이트하고 있습니다.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.links.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-6 rounded-xl bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-xs transition-all duration-200 self-start md:self-auto"
          >
            <span className="material-symbols-outlined text-[20px]">rss_feed</span>
            <span>네이버 블로그에서 실제 행사 더 보기</span>
          </a>
        </div>

        {/* 4 Distinct Event Case Cards */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">verified</span>
              <span>주요 행사 개최 실적</span>
            </h3>
            <span className="text-xs text-secondary font-medium flex items-center gap-1 bg-surface-container px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-[14px]">photo_camera</span>
              <span>100% 청주풋볼파크 실제 행사 개최 현장 실사</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EVENT_CASES.map((ev, idx) => {
              const caseId = ev.id || `case_${idx}`;
              const displayImage = customPhotos[caseId] || ev.image;
              const hasCustomPhoto = Boolean(customPhotos[caseId]);

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col justify-between hover:border-primary/50 transition-all group"
                >
                  <div
                    onClick={() => {
                      setSelectedPhoto({
                        src: displayImage || '',
                        title: ev.company,
                        desc: `${ev.category} · ${ev.title}`,
                      });
                    }}
                    className="relative w-full aspect-[16/10] bg-surface-container overflow-hidden cursor-pointer"
                    title={`${ev.company} 사진 크게보기`}
                  >
                    <ImageWithFallback
                      src={displayImage}
                      alt={ev.company}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      label={ev.company}
                      containerClassName="w-full h-full"
                    />

                    {/* Official Banner Overlay Badge */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 pt-6 pointer-events-none">
                      <span className="text-white text-[12px] sm:text-[13px] font-extrabold tracking-tight drop-shadow-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-secondary">flag</span>
                        <span>{ev.company}</span>
                      </span>
                    </div>

                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-primary/90 text-on-primary text-[10px] font-bold backdrop-blur-xs shadow-xs pointer-events-none">
                      {ev.category}
                    </div>

                    {/* Right-Top Actions: Direct Photo Register Button + Zoom */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={(e) => handleOpenUpload(caseId, e)}
                        disabled={isProcessing}
                        title="실제 행사 사진 등록/변경 (브라우저 영구 고정)"
                        className={`h-7 px-2.5 rounded-full text-[11px] font-bold flex items-center gap-1 shadow-md transition-all ${
                          hasCustomPhoto
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-black/60 text-white hover:bg-primary hover:text-on-primary backdrop-blur-xs'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          {hasCustomPhoto ? 'check_circle' : 'add_photo_alternate'}
                        </span>
                        <span>{hasCustomPhoto ? '실사 고정완료' : '사진등록'}</span>
                      </button>

                      <div className="w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-xs">
                        <span className="material-symbols-outlined text-[16px]">zoom_in</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-secondary">
                          <span className="material-symbols-outlined text-[16px]">corporate_fare</span>
                          <span className="text-[11px] font-bold tracking-wide">{ev.company}</span>
                        </div>
                        {hasCustomPhoto && (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                            실사 등록됨
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-primary line-clamp-1">{ev.title}</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                        {ev.description}
                      </p>
                    </div>

                    <div className="pt-2.5 flex items-center justify-between text-[11px] font-semibold text-on-surface-variant border-t border-surface-variant/80">
                      <span className="text-secondary font-bold">인원: {ev.pax}</span>
                      <span className="truncate max-w-[130px] text-right">{ev.facilities}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Photo Gallery with Category Filters */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-variant/80 pb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[22px]">photo_library</span>
                <span>현장 사진 갤러리</span>
                <span className="text-xs font-normal text-on-surface-variant hidden sm:inline">
                  (클릭 시 고화질 확대 지원)
                </span>
              </h3>
              <p className="text-xs font-bold text-secondary mt-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">groups</span>
                <span>각 사진 우측 상단 [사진등록] 버튼으로 보유하신 실제 현장 사진을 영구 고정하실 수 있습니다.</span>
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: '전체보기' },
                { id: 'group', label: '단체기념' },
                { id: 'sports', label: '체육대회 & 경기' },
                { id: 'bbq', label: '단체바비큐' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeFilter === tab.id
                      ? 'bg-primary text-on-primary shadow-xs'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry / Grid Display */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo) => {
              const galleryKey = `gallery_${photo.id}`;
              const displayImage = customPhotos[galleryKey] || photo.image;
              const hasCustomPhoto = Boolean(customPhotos[galleryKey]);

              return (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto({ src: displayImage, title: photo.title })}
                  className="group relative rounded-xl overflow-hidden bg-surface-container shadow-xs border border-outline-variant/30 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className={`w-full ${photo.ratio || 'aspect-[16/10]'} overflow-hidden relative`}>
                    <ImageWithFallback
                      src={displayImage}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                      label={photo.title}
                      containerClassName="w-full h-full"
                    />

                    {/* Dark gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 pointer-events-none">
                      <span className="text-white text-xs font-bold line-clamp-2 leading-snug drop-shadow-sm">
                        {photo.title}
                      </span>
                    </div>

                    {/* Photo Registration Button on Gallery Photo Item */}
                    <div className="absolute top-2 right-2 flex items-center gap-1 z-10">
                      <button
                        type="button"
                        onClick={(e) => handleOpenUpload(galleryKey, e)}
                        disabled={isProcessing}
                        title="실제 행사 사진 등록/변경 (브라우저 영구 고정)"
                        className={`h-6 px-2 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm transition-all ${
                          hasCustomPhoto
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-black/50 text-white hover:bg-primary hover:text-on-primary backdrop-blur-xs'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[13px]">
                          {hasCustomPhoto ? 'check' : 'add_photo_alternate'}
                        </span>
                        <span>{hasCustomPhoto ? '고정됨' : '사진등록'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-surface-container-lowest flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-primary truncate">{photo.title}</span>
                    <div className="flex items-center gap-1 text-outline group-hover:text-primary shrink-0">
                      <span className="material-symbols-outlined text-[16px]">
                        zoom_in
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enlarged Photo Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-surface-container-lowest border-b border-surface-variant flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-primary">{selectedPhoto.title}</h4>
                {selectedPhoto.desc && (
                  <p className="text-xs text-on-surface-variant mt-0.5">{selectedPhoto.desc}</p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="p-4 overflow-auto max-h-[calc(90vh-80px)] flex flex-col items-center justify-center bg-surface-container gap-3">
              <ImageWithFallback
                src={selectedPhoto.src}
                fallbackSrc={HERO_IMAGE_FALLBACK}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-sm"
                label={selectedPhoto.title}
                containerClassName="w-full flex items-center justify-center"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
