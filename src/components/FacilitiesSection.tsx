import React from 'react';
import { FACILITIES, AMENITIES, HERO_IMAGE_FALLBACK, scoreboardImg, spectatorBenchImg } from '../data/parkData';
import { ImageWithFallback } from './ImageWithFallback';

export const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="w-full py-16 sm:py-24 bg-surface-container-low">
      <div className="max-w-[1240px] mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
              ALL FACILITIES & INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-extrabold tracking-tight">
              충북 최대 5,000평 규모 체육 시설 안내
            </h2>
            <p className="text-sm sm:text-base text-on-surface leading-relaxed font-medium">
              <span className="text-secondary font-extrabold">체육대회·단합대회·기업 워크숍</span>부터 <span className="text-primary font-extrabold">전국 풋살 & 유소년 축구대회</span>까지!
              <br />
              대형 버스 완비 주차장 · 카페형 매점 · 250석 단체 바베큐장 · 실내풋살장까지,
              <br />
              <strong className="text-primary underline decoration-secondary decoration-2 underline-offset-4">원스톱으로 완성되는 압도적 인프라</strong>를 경험하세요.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest shadow-xs text-xs sm:text-sm text-on-surface-variant border border-outline-variant/30">
            <span className="material-symbols-outlined text-secondary text-[20px]">photo_camera</span>
            <span>상단 대표 항공사진에서 전체 레이아웃을 확인하실 수 있습니다</span>
          </div>
        </div>

        {/* Facility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((fac) => (
            <div
              key={fac.id}
              className="rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between border border-outline-variant/30 group"
            >
              {/* Facility Photo Attachment */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                <ImageWithFallback
                  src={fac.image}
                  fallbackSrc={fac.fallbackImage || HERO_IMAGE_FALLBACK}
                  alt={`${fac.name} 현장 사진`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  label={fac.name}
                  badge={fac.tag}
                  containerClassName="w-full h-full"
                />
                <div className="absolute top-3 right-3 z-10">
                  <span className={`px-3 py-1 rounded-full font-bold text-[11px] shadow-xs ${fac.tagColor}`}>
                    {fac.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-primary">{fac.name}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed break-keep">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-2 space-y-2 text-xs sm:text-sm text-on-surface-variant border-t border-surface-variant/60">
                  {fac.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[17px] text-secondary shrink-0">
                        check_circle
                      </span>
                      <span className="truncate sm:whitespace-normal break-keep">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-end text-xs sm:text-sm font-semibold text-primary border-t border-surface-variant/60">
                  <span className="text-secondary font-bold text-base">{fac.rate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 전광판 & 관중석 & 주차장 Infrastructure Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 전광판 */}
          <div className="rounded-3xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[16/10] bg-surface-container overflow-hidden">
              <ImageWithFallback
                src={scoreboardImg}
                fallbackSrc={HERO_IMAGE_FALLBACK}
                alt="공식 대형 전광판"
                className="w-full h-full object-cover"
                label="공식 대형 전광판"
                badge="실시간 스코어"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="p-6 space-y-2">
              <div className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                MATCH SYSTEM
              </div>
              <h3 className="text-lg font-bold text-primary">공식 대형 전광판</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                경기 실시간 스코어 및 행사 타이틀 송출이 가능한 정식 전광판으로 공식 대회의 현장감을 극대화합니다.
              </p>
            </div>
          </div>

          {/* 관중석 & 캐노피 팀 벤치 */}
          <div className="rounded-3xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[16/10] bg-surface-container overflow-hidden">
              <ImageWithFallback
                src={spectatorBenchImg}
                fallbackSrc={HERO_IMAGE_FALLBACK}
                alt="관중석 및 캐노피 팀 벤치"
                className="w-full h-full object-cover"
                label="관중석 및 캐노피 팀 벤치"
                badge="캐노피 완비"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="p-6 space-y-2">
              <div className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                COMFORT & SPECTATING
              </div>
              <h3 className="text-lg font-bold text-primary">관중석 & 캐노피 팀 벤치</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                햇빛과 비를 막아주는 대형 캐노피 팀 벤치와 넓은 계단식 관중석으로 쾌적한 응원과 휴식을 지원합니다.
              </p>
            </div>
          </div>

          {/* 150대 전용 무료 주차장 */}
          <div className="rounded-3xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col">
            <div className="relative w-full aspect-[16/10] bg-surface-container overflow-hidden">
              <ImageWithFallback
                src="images/parking-area.jpg"
                fallbackSrc={HERO_IMAGE_FALLBACK}
                alt="150대 동시 무료 주차장"
                className="w-full h-full object-cover"
                label="150대 전용 주차장"
                badge="150대 무료"
                containerClassName="w-full h-full"
              />
            </div>
            <div className="p-6 space-y-2">
              <div className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                PARKING CAPACITY
              </div>
              <h3 className="text-lg font-bold text-primary">150대 무료 전용 주차장</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                승용차 150대 동시 주차는 물론 대형 관광버스 진입이 편리한 전용 광폭 주차 공간을 전액 무료 제공합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 부대 편의시설 8개 그리드 */}
        <div className="space-y-4">
          <h4 className="text-base sm:text-lg font-bold text-primary">임직원을 배려한 부대 편의시설</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {AMENITIES.map((amenity, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl bg-surface-container-lowest text-center space-y-2 shadow-xs border ${
                  amenity.highlight ? 'border-secondary-fixed/80 bg-secondary-fixed/10' : 'border-outline-variant/30'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[24px] ${
                    amenity.highlight ? 'text-secondary' : 'text-primary'
                  }`}
                >
                  {amenity.icon}
                </span>
                <div className="text-xs sm:text-sm font-bold text-primary">{amenity.name}</div>
                <div
                  className={`text-[11px] ${
                    amenity.highlight ? 'text-secondary font-bold' : 'text-on-surface-variant'
                  }`}
                >
                  {amenity.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
