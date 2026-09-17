import React from 'react';
import { HERO_IMAGE_DEFAULT, HERO_IMAGE_FALLBACK, PARK_METRICS, BUSINESS_INFO } from '../data/parkData';
import { ImageWithFallback } from './ImageWithFallback';

export const HeroSection: React.FC = () => {
  const scrollToEstimate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('estimate');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-primary text-on-primary pt-20">
      {/* Hero Image Container: Preserves both pitch and 150-car parking area visibility */}
      <div className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[660px] aspect-[16/11] sm:aspect-[16/9] md:aspect-[21/10] overflow-hidden">
        <ImageWithFallback
          src={HERO_IMAGE_DEFAULT}
          fallbackSrc={HERO_IMAGE_FALLBACK}
          alt="청주풋볼파크 전경 항공사진 (정규 축구장, 풋살장, 150대 전용 주차장)"
          className="w-full h-full object-cover object-[50%_35%] transform scale-[1.01] hover:scale-[1.02] transition-transform duration-1000 ease-out"
          containerClassName="w-full h-full"
          label="청주풋볼파크 전경 항공사진"
        />

        {/* Cinematic Gradient Overlays to keep pitch & parking visible while text remains high-contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/30 to-transparent pointer-events-none" />

        {/* Top Badges inside Hero */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-12 flex flex-wrap items-center gap-2 z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-secondary text-on-secondary text-[12px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5 backdrop-blur-xs">
            <span className="material-symbols-outlined text-[15px]">verified</span>
            <span>충북 최대 규모 복합 스포츠 파크</span>
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-surface-container-lowest/85 text-primary backdrop-blur-md text-[12px] font-bold tracking-wider shadow-sm">
            청주 · 세종 · 대전 · 천안권 30분
          </span>
        </div>

        {/* Hero Content Anchor Block */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-14 max-w-[1240px] mx-auto w-full flex flex-col justify-end z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed/20 border border-secondary-fixed/30 text-secondary-fixed text-xs sm:text-sm font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
              <span>기업 체육대회 · 임직원 워크숍 · 명랑운동회 원스톱 솔루션</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-on-primary font-extrabold tracking-tight leading-[1.18]">
              기업 체육대회부터 워크숍까지<br className="hidden sm:inline" />
              <span className="text-secondary-fixed"> 한곳에서 즐기는 </span>
              청주풋볼파크
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-surface-variant font-normal max-w-2xl pt-1 leading-relaxed">
              25명 부서 워크숍부터 최대 1,200명 전사 체육대회까지.<br className="sm:hidden" />
              정규 축구장, 풋살장, 세미나실, 250석 단체 바비큐장을 완비한 프리미엄 스포츠 컴플렉스입니다.
            </p>
          </div>

          {/* 3 Major CTAs */}
          <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-3">
            <a
              href="#estimate"
              onClick={scrollToEstimate}
              className="h-12 px-6 rounded-xl bg-secondary hover:bg-on-secondary-fixed-variant text-on-secondary font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px]">calculate</span>
              <span>예상 견적 계산하기</span>
            </a>

            <a
              href={BUSINESS_INFO.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 rounded-xl bg-surface-container-lowest text-primary hover:bg-surface-container-low font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px] text-secondary">event_available</span>
              <span>네이버에서 예약하기</span>
            </a>

            <a
              href={BUSINESS_INFO.cfp.telLink}
              className="h-12 px-6 rounded-xl bg-primary-container/90 backdrop-blur-md text-on-primary hover:bg-primary-container border border-outline-variant/30 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[20px] text-tertiary-fixed-dim">call</span>
              <span>전화 상담 010-7900-8219</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Core Key Metrics Stat Bar */}
      <div className="w-full bg-primary-container border-t border-outline-variant/20">
        <div className="max-w-[1240px] mx-auto px-6 py-6 sm:py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PARK_METRICS.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest/10 flex items-center justify-center text-secondary-fixed shrink-0">
                <span className="material-symbols-outlined text-[26px]">{metric.icon}</span>
              </div>
              <div>
                <div className="text-[11px] font-bold text-surface-variant uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-on-primary">
                  {metric.value}
                  <span className="text-sm font-normal text-surface-variant ml-1">{metric.unit}</span>
                </div>
                <div className="text-[11px] text-on-primary-container hidden sm:block truncate">
                  {metric.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
