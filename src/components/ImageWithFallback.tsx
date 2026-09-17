import React, { useState } from 'react';
import { DEFAULT_GRADIENT_IMAGE } from '../data/parkData';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  label?: string;
  badge?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc = DEFAULT_GRADIENT_IMAGE,
  label,
  badge,
  className = '',
  containerClassName = '',
  ...rest
}) => {
  const [errorCount, setErrorCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Normalize path if starts with images/ to /images/
  const normalizedSrc = typeof src === 'string' && src.startsWith('images/') ? `/${src}` : src;

  const currentSrc = errorCount === 0 ? (normalizedSrc || fallbackSrc) : errorCount === 1 ? fallbackSrc : null;

  const handleError = () => {
    if (errorCount === 0 && fallbackSrc && fallbackSrc !== normalizedSrc) {
      setErrorCount(1);
    } else {
      setErrorCount(2);
    }
  };

  if (!currentSrc || errorCount >= 2) {
    return (
      <div
        className={`relative w-full h-full min-h-[160px] bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white flex flex-col items-center justify-center p-4 text-center select-none overflow-hidden ${containerClassName}`}
      >
        <div className="w-12 h-12 rounded-full bg-white/10 text-emerald-300 flex items-center justify-center mb-2 shadow-sm backdrop-blur-xs border border-white/10">
          <span className="material-symbols-outlined text-[24px]">sports_soccer</span>
        </div>
        <span className="text-body-sm font-bold text-white max-w-[90%] truncate">{label || alt || '청주풋볼파크 & 가베슈'}</span>
        <span className="text-[11px] text-emerald-200/70 font-sans mt-1">현장 시설 및 행사 안내</span>
        {badge && (
          <span className="mt-2 text-[10px] font-semibold text-emerald-300 bg-emerald-800/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <img
        src={currentSrc}
        alt={alt || label || '청주풋볼파크'}
        onError={handleError}
        onLoad={() => setLoaded(true)}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-90'} transition-opacity duration-300`}
        referrerPolicy="no-referrer"
        {...rest}
      />
    </div>
  );
};
