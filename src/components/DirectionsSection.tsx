import React, { useState } from 'react';
import { BUSINESS_INFO, HERO_IMAGE_FALLBACK } from '../data/parkData';
import { ImageWithFallback } from './ImageWithFallback';

export const DirectionsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.links.address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="directions" className="w-full py-16 sm:py-24 bg-surface">
      <div className="max-w-[1240px] mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
            LOCATION & PARKING
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-extrabold tracking-tight">
            오시는 길 & 전용 주차장 안내
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            청주, 세종, 대전, 천안 어디서나 30분 내 쾌속 연결되는 탁월한 교통망과 150대 무료 전용 주차장을 갖추고 있습니다.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Address & Navigation Links */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 space-y-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-low text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">pin_drop</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">도로명 주소</h3>
                <p className="text-sm text-primary font-semibold mt-1">
                  {BUSINESS_INFO.links.address}
                </p>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  (충청대로 733 청주풋볼파크 전용 단지)
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="w-full h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-outline-variant/50"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                <span>{copied ? '주소가 복사되었습니다!' : '주소 클립보드 복사'}</span>
              </button>
            </div>

            {/* Map Shortcut Buttons */}
            <div className="space-y-2 pt-4 border-t border-surface-variant/80">
              <div className="text-[11px] font-bold text-on-surface-variant uppercase">
                내비게이션 바로가기
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://map.naver.com/p/search/${encodeURIComponent(BUSINESS_INFO.links.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 rounded-xl bg-[#03C75A] text-white font-bold text-xs flex items-center justify-center gap-1 hover:opacity-95 transition-opacity"
                >
                  <span>네이버 지도</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
                <a
                  href={`https://map.kakao.com/link/search/${encodeURIComponent(BUSINESS_INFO.links.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 rounded-xl bg-[#FEE500] text-black font-bold text-xs flex items-center justify-center gap-1 hover:opacity-95 transition-opacity"
                >
                  <span>카카오맵</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Highway & Regional Accessibility */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 space-y-6 shadow-xs">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">directions_car</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">지역별 접근 시간</h3>
                <p className="text-xs text-on-surface-variant mt-1">
                  고속도로 IC와 3순환로 진입이 인접하여 전국 어디서나 쉽게 방문하실 수 있습니다.
                </p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-on-surface-variant">
              <div className="p-2.5 rounded-xl bg-surface-container-low flex justify-between items-center">
                <span className="font-bold text-primary">청주 도심권 (성안길, 오창, 오송)</span>
                <span className="text-secondary font-bold">15 ~ 20분</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-container-low flex justify-between items-center">
                <span className="font-bold text-primary">세종특별자치시 정부청사</span>
                <span className="text-secondary font-bold">약 20분</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-container-low flex justify-between items-center">
                <span className="font-bold text-primary">대전광역시 (유성, 둔산)</span>
                <span className="text-secondary font-bold">약 30분</span>
              </div>
              <div className="p-2.5 rounded-xl bg-surface-container-low flex justify-between items-center">
                <span className="font-bold text-primary">천안·아산 권역</span>
                <span className="text-secondary font-bold">약 35분</span>
              </div>
            </div>

            <div className="text-[11px] text-on-surface-variant pt-2 border-t border-surface-variant/60">
              * 남청주IC, 서청주IC, 청주IC에서 10~15분 거리
            </div>
          </div>

          {/* Card 3: 150-Car Parking & Bus Access */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 space-y-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed/30 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">local_parking</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">150대 무료 전용 주차장</h3>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  행사 참가자 전원 무료 주차가 가능하며, 45인승 대형 전세버스도 동시에 진입 및 회차할 수 있는 광폭 주차면을 보유하고 있습니다.
                </p>
              </div>
            </div>

            {/* Parking Area Visual Reference */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-surface-container border border-outline-variant/30">
              <ImageWithFallback
                src="images/parking-area.jpg"
                fallbackSrc={HERO_IMAGE_FALLBACK}
                alt="청주풋볼파크 150대 전용 주차장 전경"
                className="w-full h-full object-cover"
                label="150대 전용 주차장"
                containerClassName="w-full h-full"
              />
            </div>

            <div className="p-3 rounded-xl bg-secondary-fixed/20 border border-secondary-fixed/30 text-[11px] text-on-secondary-fixed-variant font-semibold">
              ✓ 주차 관리 요원 배치 가능 (100인 이상 대형 행사 시 사전 신청)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
