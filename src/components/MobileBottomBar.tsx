import React from 'react';
import { BUSINESS_INFO } from '../data/parkData';

export const MobileBottomBar: React.FC = () => {
  const scrollToEstimate = () => {
    const el = document.getElementById('estimate');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md border-t border-surface-variant px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] flex items-center justify-between gap-2">
      <button
        type="button"
        onClick={scrollToEstimate}
        className="flex-1 h-11 rounded-xl bg-surface-container text-primary font-bold text-xs flex items-center justify-center gap-1.5 border border-outline-variant/40"
      >
        <span className="material-symbols-outlined text-[18px]">calculate</span>
        <span>예상 견적</span>
      </button>

      <a
        href={BUSINESS_INFO.cfp.telLink}
        className="flex-1 h-11 rounded-xl bg-primary text-on-primary font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
      >
        <span className="material-symbols-outlined text-[18px]">call</span>
        <span>전화 상담</span>
      </a>

      <a
        href={BUSINESS_INFO.links.booking}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-11 rounded-xl bg-secondary text-on-secondary font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
      >
        <span className="material-symbols-outlined text-[18px]">event_available</span>
        <span>네이버 예약</span>
      </a>
    </div>
  );
};
