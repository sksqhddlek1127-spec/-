import React from 'react';
import { PROGRAM_MODULES, SAMPLE_TIMELINE, HERO_IMAGE_FALLBACK } from '../data/parkData';
import { ImageWithFallback } from './ImageWithFallback';

export const ProgramsSection: React.FC = () => {
  return (
    <section id="programs" className="w-full py-16 sm:py-24 bg-surface">
      <div className="max-w-[1240px] mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
            DYNAMIC ACTIVITIES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-extrabold tracking-tight">
            함께 뛰고, 즐기고, 가까워지는 시간
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            단합과 소통을 극대화하는 맞춤형 체육대회 프로그램과 전문 운영 매뉴얼을 지원합니다.
          </p>
        </div>

        {/* 4 Core Activity Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAM_MODULES.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col border border-outline-variant/30 group"
            >
              {/* Activity Photo Attachment */}
              <div className="relative w-full aspect-[16/10] bg-surface-container overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  fallbackSrc={HERO_IMAGE_FALLBACK}
                  alt={`${item.title} 현장 사진`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  label={item.title}
                  badge={item.badge}
                  containerClassName="w-full h-full"
                />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-primary text-on-primary font-bold text-sm flex items-center justify-center shadow-md">
                  {item.step}
                </div>
              </div>

              <div className="p-6 space-y-3 grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-primary tracking-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 text-[11px] font-bold text-secondary border-t border-surface-variant/60">
                  {item.badge}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Timeline Card */}
        <div className="rounded-3xl bg-surface-container-lowest p-6 sm:p-8 shadow-sm border border-outline-variant/30 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-surface-variant/80">
            <div>
              <h3 className="text-xl sm:text-2xl text-primary font-bold">
                기업 체육행사 추천 타임라인 예시
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                일정은 고객사의 행사 규모, 목적, 예산에 맞추어 유연하게 맞춤 구성해 드립니다.
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary text-[11px] font-bold self-start sm:self-auto">
              1DAY STANDARD COURSE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {SAMPLE_TIMELINE.map((timeItem, tIdx) => {
              const isLast = tIdx === SAMPLE_TIMELINE.length - 1;
              return (
                <div
                  key={tIdx}
                  className={`p-4 rounded-xl space-y-2 flex flex-col justify-between ${
                    isLast
                      ? 'bg-primary-container text-on-primary'
                      : 'bg-surface-container-low text-on-surface border border-outline-variant/20'
                  }`}
                >
                  <div className="space-y-1">
                    <div
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        isLast ? 'text-tertiary-fixed' : 'text-secondary'
                      }`}
                    >
                      {timeItem.time}
                    </div>
                    <div
                      className={`text-base font-bold tracking-tight ${
                        isLast ? 'text-on-primary' : 'text-primary'
                      }`}
                    >
                      {timeItem.title}
                    </div>
                  </div>
                  <p
                    className={`text-xs leading-relaxed pt-2 ${
                      isLast ? 'text-surface-variant' : 'text-on-surface-variant'
                    }`}
                  >
                    {timeItem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
