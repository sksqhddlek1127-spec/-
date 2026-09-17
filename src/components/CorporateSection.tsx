import React from 'react';
import { CORPORATE_PROGRAMS } from '../data/parkData';

export const CorporateSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="corporate" className="w-full py-16 sm:py-20 bg-surface">
      <div className="max-w-[1240px] mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
            CORPORATE PROGRAM SOLUTION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-extrabold tracking-tight">
            체육행사와 워크숍을 한 장소에서,<br />
            <span className="text-secondary">회사 행사를 더욱 스마트하게</span>
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            25명 규모의 집중형 부서 워크숍부터 최대 1,200명 전사 체육대회까지 이동 없이 야외 잔디, 실내 회의실, 전용 식음 시설을 연계 운영합니다.
          </p>
        </div>

        {/* Categories Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {CORPORATE_PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group border border-outline-variant/30"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-low text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-[28px]">{prog.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">{prog.title}</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              </div>
              <div className="pt-6 text-[12px] font-bold text-secondary flex items-center gap-1">
                <span>{prog.tag}</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlight Row */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-secondary text-[11px] uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span>ONE-STOP EVENT CONVENIENCE</span>
            </div>
            <h3 className="text-xl sm:text-2xl text-primary font-bold">
              행사 담당자의 수고를 덜어주는 체계적 지원
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              전문 MC, 음향 및 방송장비, 텐트·테이블 렌탈, 행사 지원 스태프까지 원스톱으로 구성 가능합니다.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => scrollTo('estimate')}
              className="h-11 px-5 rounded-xl bg-primary text-on-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-container transition-all shadow-xs flex-1 sm:flex-initial"
            >
              <span className="material-symbols-outlined text-[18px]">receipt_long</span>
              <span>행사 견적 산출</span>
            </button>
            <button
              onClick={() => scrollTo('inquiry')}
              className="h-11 px-5 rounded-xl bg-surface-container-lowest text-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-surface-container-high transition-all shadow-xs border border-outline-variant/40 flex-1 sm:flex-initial"
            >
              <span>상담 신청하기</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
