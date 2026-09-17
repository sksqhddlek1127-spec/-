import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/parkData';
import { InquiryFormData } from '../types';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    company: '',
    name: '',
    phone: '',
    email: '',
    date: '',
    pax: '',
    eventType: '기업 체육대회',
    targetBusiness: 'both',
    facilities: ['축구장', '풋살장', '단체 바비큐장'],
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFacilityToggle = (fac: string) => {
    setFormData((prev) => ({
      ...prev,
      facilities: prev.facilities.includes(fac)
        ? prev.facilities.filter((f) => f !== fac)
        : [...prev.facilities, fac],
    }));
  };

  const generateMailto = (target: 'cfp' | 'gabeshu') => {
    const isCFP = target === 'cfp';
    const recipient = isCFP ? BUSINESS_INFO.cfp.email : BUSINESS_INFO.gabeshu.email;
    const subject = encodeURIComponent(
      `[기업행사 대관/F&B 문의] ${formData.company || '기업'} - ${formData.name || '담당자'}`
    );

    const bodyText = `[청주풋볼파크 & 가베슈 행사 문의]

1. 회사/단체명: ${formData.company || '미입력'}
2. 담당자 성함/직급: ${formData.name || '미입력'}
3. 연락처: ${formData.phone || '미입력'}
4. 이메일: ${formData.email || '미입력'}
5. 희망 행사 일자: ${formData.date || '미입력'}
6. 예상 참가 인원: ${formData.pax ? `${formData.pax}명` : '미입력'}
7. 행사 성격: ${formData.eventType}
8. 희망 이용 시설: ${formData.facilities.join(', ') || '미선택'}

[세부 문의 및 요청사항]
${formData.message || '별도 요청사항 없음'}`;

    return `mailto:${recipient}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  const handleCopySummary = () => {
    const text = `[청주풋볼파크 & 가베슈 행사 문의]
- 단체명: ${formData.company || '미입력'}
- 담당자: ${formData.name || '미입력'} (${formData.phone || '연락처 미입력'})
- 희망일자: ${formData.date || '미정'} / 예상인원: ${formData.pax || '미정'}명
- 행사성격: ${formData.eventType}
- 희망시설: ${formData.facilities.join(', ')}
- 요청사항: ${formData.message || '없음'}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="process" className="w-full py-16 sm:py-24 bg-surface-container-low">
      <div className="max-w-[1240px] mx-auto px-6 space-y-16">
        {/* 5-Step Process */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
              HOW TO RESERVE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-extrabold tracking-tight">
              간편한 5단계 예약 절차
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              체계적인 사전 조율과 전담 매니저 매칭으로 행사 당일 차질 없는 원활한 진행을 보장합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-xs border border-outline-variant/30 space-y-2">
              <span className="text-[11px] font-bold text-secondary">STEP 01</span>
              <div className="text-base font-bold text-primary">일정 & 인원 상담</div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                견적 계산기 확인 또는 전화/온라인 폼으로 희망 일정 및 규모 문의
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-xs border border-outline-variant/30 space-y-2">
              <span className="text-[11px] font-bold text-secondary">STEP 02</span>
              <div className="text-base font-bold text-primary">현장 답사 & 기획</div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                구장, 세미나실, 바비큐 시설 현장 투어 및 타임테이블 사전 확정
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-xs border border-outline-variant/30 space-y-2">
              <span className="text-[11px] font-bold text-secondary">STEP 03</span>
              <div className="text-base font-bold text-primary">정식 견적서 발송</div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                청주풋볼파크 & 가베슈 각각 독립 정식 견적서 발행 및 예약금 계약
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-xs border border-outline-variant/30 space-y-2">
              <span className="text-[11px] font-bold text-secondary">STEP 04</span>
              <div className="text-base font-bold text-primary">행사 준비 & 세팅</div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                음향, 텐트, 테이블, 조끼 사전 셋업 및 식음료(F&B) 재료 신선 입고
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-primary-container text-on-primary shadow-xs space-y-2">
              <span className="text-[11px] font-bold text-secondary-fixed">STEP 05</span>
              <div className="text-base font-bold text-on-primary">행사 진행 & 정산</div>
              <p className="text-xs text-surface-variant leading-relaxed">
                전담 매니저 현장 상주 운영 지원 및 각 사업자별 세금계산서 정산 발행
              </p>
            </div>
          </div>
        </div>

        {/* Unified Inquiry Form */}
        <div id="inquiry" className="max-w-3xl mx-auto p-6 sm:p-10 rounded-3xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 space-y-6 scroll-mt-24">
          <div className="space-y-2 border-b border-surface-variant pb-4">
            <div className="inline-flex items-center gap-2 text-secondary text-[11px] font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">edit_calendar</span>
              <span>ONLINE INQUIRY & RESERVATION</span>
            </div>
            <h3 className="text-xl sm:text-2xl text-primary font-bold">기업행사 및 대관 온라인 문의서</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              아래 양식을 작성하신 후 희망하시는 사업자 문의 버튼을 클릭하시면, 작성하신 내용이 기본 메일 앱으로 자동 연동되어 바로 발송할 수 있습니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-primary mb-1">
                  회사명 / 단체명 <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: (주)한국테크놀로지"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-primary border border-outline-variant/50 focus:bg-surface-container-lowest transition-all"
                />
              </div>
              <div>
                <label className="block font-bold text-primary mb-1">
                  담당자 성함 및 직급 <span className="text-error">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 홍길동 팀장"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-primary border border-outline-variant/50 focus:bg-surface-container-lowest transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-primary mb-1">
                  연락처 <span className="text-error">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-primary border border-outline-variant/50 focus:bg-surface-container-lowest transition-all"
                />
              </div>
              <div>
                <label className="block font-bold text-primary mb-1">이메일 주소</label>
                <input
                  type="email"
                  placeholder="contact@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-primary border border-outline-variant/50 focus:bg-surface-container-lowest transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-primary mb-1">
                  희망 행사 일자 <span className="text-error">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-primary border border-outline-variant/50 focus:bg-surface-container-lowest transition-all"
                />
              </div>
              <div>
                <label className="block font-bold text-primary mb-1">예상 참가 인원</label>
                <input
                  type="number"
                  placeholder="예: 70"
                  value={formData.pax}
                  onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-primary border border-outline-variant/50 focus:bg-surface-container-lowest transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-primary mb-1">행사 성격</label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full h-11 px-3.5 rounded-xl bg-surface-container-low text-primary border border-outline-variant/50 focus:bg-surface-container-lowest transition-all font-medium"
              >
                <option value="기업 체육대회">기업 체육대회 (100인 이상 대규모)</option>
                <option value="기업 워크숍 & 교육">기업 워크숍 & 세미나 교육</option>
                <option value="임직원 단합 야유회">임직원 단합 야유회 (30~100인)</option>
                <option value="학교/교회/기관 친선대회">학교 / 종교단체 / 공공기관 친선 행사</option>
                <option value="단체 바비큐 & 친목 모임">단체 바비큐 & 친목 식사 모임</option>
                <option value="단순 체육시설 대관">단순 축구장/풋살장 단독 대관</option>
              </select>
            </div>

            {/* 이용 희망 시설 다중 선택 */}
            <div className="space-y-1.5">
              <label className="block font-bold text-primary">이용 희망 시설 (다중 선택 가능)</label>
              <div className="flex flex-wrap gap-2">
                {[
                  '축구장',
                  '풋살장',
                  '족구장',
                  '실내 풋살장',
                  '세미나실(가베슈)',
                  '단체 바비큐장(250석)',
                  '전문 MC/음향',
                  '연계 숙박',
                ].map((fac) => {
                  const isChecked = formData.facilities.includes(fac);
                  return (
                    <button
                      key={fac}
                      type="button"
                      onClick={() => handleFacilityToggle(fac)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        isChecked
                          ? 'bg-primary text-on-primary shadow-xs'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      {isChecked && '✓ '}
                      {fac}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block font-bold text-primary mb-1">문의 및 추가 요청사항</label>
              <textarea
                rows={3}
                placeholder="희망 시작 시간, 진행 프로그램, 식사 옵션 선호도 등을 자유롭게 적어주세요."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-surface-container-low text-primary border border-outline-variant/50 focus:bg-surface-container-lowest transition-all"
              />
            </div>

            {/* Submission & Action Buttons */}
            <div className="pt-2 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={generateMailto('cfp')}
                  className="h-12 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all text-center"
                >
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span>청주풋볼파크(대관) 문의 메일</span>
                </a>

                <a
                  href={generateMailto('gabeshu')}
                  className="h-12 rounded-xl bg-tertiary-container hover:bg-primary text-on-tertiary font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all text-center"
                >
                  <span className="material-symbols-outlined text-[18px]">restaurant</span>
                  <span>가베슈(식음료) 문의 메일</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-surface-variant/80 text-xs">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="px-3.5 py-2 rounded-lg bg-surface-container text-primary font-bold hover:bg-surface-container-high flex items-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                  <span>{copied ? '문의 내용이 복사되었습니다!' : '작성 내용 텍스트 복사'}</span>
                </button>

                <div className="flex items-center gap-3 font-semibold text-on-surface-variant">
                  <span>빠른 전화:</span>
                  <a href={BUSINESS_INFO.cfp.telLink} className="text-primary hover:underline font-bold">
                    010-7900-8219
                  </a>
                  <span>/</span>
                  <a href={BUSINESS_INFO.gabeshu.telLink} className="text-on-tertiary-container hover:underline font-bold">
                    010-4830-8500
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
