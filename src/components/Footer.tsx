import React from 'react';
import { BUSINESS_INFO } from '../data/parkData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary text-on-primary py-12 sm:py-16 border-t border-outline-variant/20">
      <div className="max-w-[1240px] mx-auto px-6 space-y-10">
        {/* Top Info Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-outline-variant/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary-fixed text-[22px]">sports_soccer</span>
            </div>
            <div>
              <div className="text-xl font-extrabold text-on-primary tracking-tight">청주풋볼파크</div>
              <div className="text-[10px] text-surface-variant uppercase tracking-wider font-semibold">
                CHEONGJU FOOTBALL PARK COMPLEX
              </div>
            </div>
          </div>

          {/* Quick External Links */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
            <a
              href={BUSINESS_INFO.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">event_available</span>
              <span>네이버 공식 예약</span>
            </a>
            <a
              href={BUSINESS_INFO.links.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">rss_feed</span>
              <span>네이버 공식 블로그</span>
            </a>
            <a
              href={BUSINESS_INFO.cfp.telLink}
              className="px-4 py-2 rounded-xl bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>대관 문의 010-7900-8219</span>
            </a>
          </div>
        </div>

        {/* Dual Business Statutory Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-surface-variant">
          {/* CFP Information */}
          <div className="space-y-2 p-5 rounded-2xl bg-surface-container-lowest/5 border border-outline-variant/10">
            <div className="flex items-center gap-2 text-secondary-fixed font-bold text-sm">
              <span className="material-symbols-outlined text-[18px]">stadium</span>
              <span>청주풋볼파크 (체육시설 대관 & 종합 행사운영 총괄)</span>
            </div>
            <div className="space-y-1 leading-relaxed">
              <div>상호명: 청주풋볼파크 | 대표자: {BUSINESS_INFO.cfp.ceo}</div>
              <div>사업자등록번호: {BUSINESS_INFO.cfp.bizNum}</div>
              <div>소재지: {BUSINESS_INFO.links.address}</div>
              <div>직통 전화: <a href={BUSINESS_INFO.cfp.telLink} className="text-on-primary underline">{BUSINESS_INFO.cfp.phone}</a></div>
              <div>문의 이메일: <a href={BUSINESS_INFO.cfp.emailLink} className="text-on-primary underline">{BUSINESS_INFO.cfp.email}</a></div>
              <div className="text-[11px] text-on-primary-container pt-1">
                * {BUSINESS_INFO.cfp.taxNote}
              </div>
            </div>
          </div>

          {/* Gabeshu Information */}
          <div className="space-y-2 p-5 rounded-2xl bg-surface-container-lowest/5 border border-outline-variant/10">
            <div className="flex items-center gap-2 text-tertiary-fixed font-bold text-sm">
              <span className="material-symbols-outlined text-[18px]">restaurant</span>
              <span>가베슈 (카페, 세미나실, 단체 바비큐 F&B 전문)</span>
            </div>
            <div className="space-y-1 leading-relaxed">
              <div>상호명: 가베슈 | 대표자: {BUSINESS_INFO.gabeshu.ceo}</div>
              <div>사업자등록번호: {BUSINESS_INFO.gabeshu.bizNum}</div>
              <div>소재지: {BUSINESS_INFO.links.address} (파크 내 F&B 복합동)</div>
              <div>직통 전화: <a href={BUSINESS_INFO.gabeshu.telLink} className="text-on-primary underline">{BUSINESS_INFO.gabeshu.phone}</a></div>
              <div>문의 이메일: <a href={BUSINESS_INFO.gabeshu.emailLink} className="text-on-primary underline">{BUSINESS_INFO.gabeshu.email}</a></div>
              <div className="text-[11px] text-on-primary-container pt-1">
                * {BUSINESS_INFO.gabeshu.taxNote}
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-on-primary-container">
          <p>
            법적 고지: 청주풋볼파크와 가베슈는 독립된 개별 사업자입니다. 시설 대관 및 행사 운영과 식음료(F&B)는 각각 별도의 계약 및 세금계산서로 분리 발행됩니다.
          </p>
          <div className="shrink-0 text-surface-variant">
            © {new Date().getFullYear()} CHEONGJU FOOTBALL PARK & GABESHU. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
