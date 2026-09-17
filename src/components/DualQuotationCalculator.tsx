import React, { useState, useMemo } from 'react';
import { CFPQuoteState, GabeshuQuoteState } from '../types';
import { BUSINESS_INFO } from '../data/parkData';

export const DualQuotationCalculator: React.FC = () => {
  // Business 1: CFP State
  const [cfp, setCfp] = useState<CFPQuoteState>({
    soccerField: false,
    soccerHours: 2,
    futsalField: false,
    futsalHours: 2,
    jokguField: false,
    jokguHours: 2,
    indoorFutsal: false,
    indoorHours: 2,
    nightLights: false,
    participants: 0,
    mcSelected: false,
    mcHours: 2,
    staffCount: 0,
    basicEquipment: false,
    vestCount: 0,
    audioTier: 0,
    tentCount: 0,
    tableCount: 0,
    stayCount: 0,
  });

  // Business 2: Gabeshu State
  const [gbs, setGbs] = useState<GabeshuQuoteState>({
    seminarSelected: false,
    seminarPax: 0,
    extraCoffee: 0,
    bbqSelected: false,
    bbqPax: 0,
    cateringSelected: false,
    cateringPax: 0,
    buffetSelected: false,
    buffetPax: 0,
    sandwichCount: 0,
    ricecakeCount: 0,
    fruitCupCount: 0,
    sojuCount: 0,
    beerCount: 0,
    sodaCount: 0,
    waterCount: 0,
    driedSnackCount: 0,
    chickenCount: 0,
  });

  // Print Preview Modal State
  const [printModal, setPrintModal] = useState<{
    open: boolean;
    business: 'cfp' | 'gabeshu';
  }>({ open: false, business: 'cfp' });

  // -------------------------------------------------------------
  // CFP Calculations
  // -------------------------------------------------------------
  const cfpCalc = useMemo(() => {
    let facilityTotal = 0;
    let basePaxSum = 0;
    let activeFacilityCount = 0;

    if (cfp.soccerField) {
      facilityTotal += (cfp.soccerHours / 2) * 240000;
      basePaxSum += 20;
      activeFacilityCount++;
      if (cfp.nightLights) facilityTotal += (cfp.soccerHours / 2) * 40000;
    }
    if (cfp.futsalField) {
      facilityTotal += (cfp.futsalHours / 2) * 120000;
      basePaxSum += 12;
      activeFacilityCount++;
      if (cfp.nightLights) facilityTotal += (cfp.futsalHours / 2) * 40000;
    }
    if (cfp.jokguField) {
      facilityTotal += (cfp.jokguHours / 2) * 120000;
      basePaxSum += 12;
      activeFacilityCount++;
      if (cfp.nightLights) facilityTotal += (cfp.jokguHours / 2) * 40000;
    }
    if (cfp.indoorFutsal) {
      facilityTotal += (cfp.indoorHours / 2) * 120000;
      basePaxSum += 12;
      activeFacilityCount++;
      if (cfp.nightLights) facilityTotal += (cfp.indoorHours / 2) * 40000;
    }

    // Bundle Promotion: If soccer & futsal both checked, excess fee is waived!
    const isBundlePromotion = cfp.soccerField && cfp.futsalField;
    const excessPax = activeFacilityCount > 0 ? Math.max(0, cfp.participants - basePaxSum) : 0;
    const excessFee = isBundlePromotion ? 0 : excessPax * 5000;

    // Options Total
    let optionsTotal = 0;
    if (cfp.mcSelected) {
      optionsTotal += 800000 + Math.max(0, cfp.mcHours - 2) * 400000;
    }
    optionsTotal += cfp.staffCount * 150000;
    if (cfp.basicEquipment) optionsTotal += 150000;
    optionsTotal += cfp.vestCount * 700;
    if (cfp.audioTier > 0) optionsTotal += cfp.audioTier;
    optionsTotal += cfp.tentCount * 35000;
    optionsTotal += cfp.tableCount * 10000;
    optionsTotal += cfp.stayCount * 20000;

    const subtotal = facilityTotal + excessFee + optionsTotal;
    const vat = Math.round(subtotal * 0.1);
    const grandTotal = subtotal + vat;

    return {
      facilityTotal,
      basePaxSum,
      excessPax,
      excessFee,
      isBundlePromotion,
      optionsTotal,
      subtotal,
      vat,
      grandTotal,
      activeFacilityCount,
    };
  }, [cfp]);

  // -------------------------------------------------------------
  // Gabeshu Calculations
  // -------------------------------------------------------------
  const gbsCalc = useMemo(() => {
    let seminarTotal = 0;
    if (gbs.seminarSelected && gbs.seminarPax > 0) {
      seminarTotal += Math.max(20, gbs.seminarPax) * 10000;
    }
    seminarTotal += gbs.extraCoffee * 4000;

    let mealTotal = 0;
    if (gbs.bbqSelected && gbs.bbqPax > 0) mealTotal += Math.max(20, gbs.bbqPax) * 35000;
    if (gbs.cateringSelected && gbs.cateringPax > 0) mealTotal += Math.max(20, gbs.cateringPax) * 35000;
    if (gbs.buffetSelected && gbs.buffetPax > 0) mealTotal += Math.max(20, gbs.buffetPax) * 15000;

    mealTotal += gbs.sandwichCount * 5500;
    mealTotal += gbs.ricecakeCount * 5500;
    mealTotal += gbs.fruitCupCount * 5500;

    let beverageTotal = 0;
    beverageTotal += gbs.sojuCount * 4000;
    beverageTotal += gbs.beerCount * 4000;
    beverageTotal += gbs.sodaCount * 2000;
    beverageTotal += gbs.waterCount * 1000;
    beverageTotal += gbs.driedSnackCount * 15000;
    beverageTotal += gbs.chickenCount * 19000;

    const subtotal = seminarTotal + mealTotal + beverageTotal;
    const vat = Math.round(subtotal * 0.1);
    const grandTotal = subtotal + vat;

    return {
      seminarTotal,
      mealTotal,
      beverageTotal,
      subtotal,
      vat,
      grandTotal,
    };
  }, [gbs]);

  const handlePrint = (business: 'cfp' | 'gabeshu') => {
    setPrintModal({ open: true, business });
  };

  const triggerBrowserPrint = () => {
    window.print();
  };

  return (
    <section id="estimate" className="w-full py-16 sm:py-24 bg-surface scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-6 space-y-8">
        {/* Top Crucial Business Separation Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-tertiary-container text-on-tertiary shadow-md flex items-start gap-4 border border-tertiary-fixed/30">
          <span className="material-symbols-outlined text-tertiary-fixed text-[36px] shrink-0 mt-0.5">
            warning
          </span>
          <div className="space-y-1.5">
            <div className="text-base sm:text-lg text-tertiary-fixed font-bold">
              [필독] 청주풋볼파크와 가베슈는 별도의 독립 사업자입니다
            </div>
            <p className="text-xs sm:text-sm text-surface-variant leading-relaxed">
              체육시설 대관 및 행사 운영 비용(<strong className="text-white">청주풋볼파크</strong>)과 세미나실 및 식음료·바비큐 비용(<strong className="text-white">가베슈</strong>)은 각각 별도의 사업자 등록 및 별도 견적서로 독립 산출·발행되며, <span className="text-tertiary-fixed font-bold underline">두 사업자의 견적은 절대 합산되지 않습니다.</span> 세금계산서 또한 각 사업자 명의로 분리 발행됩니다.
            </p>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
            REAL-TIME QUOTATION GENERATOR
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-extrabold tracking-tight">
            사업자별 실시간 자동 견적기
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-on-surface-variant">
            필요한 시설과 옵션을 선택하시면 실시간으로 공급가액과 부가세(10%)가 계산되며, 각 사업자 전용 견적서만 바로 출력하거나 PDF로 저장하실 수 있습니다.
          </p>
        </div>

        {/* Dual Calculator Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* ======================================================== */}
          {/* BUSINESS 1: 청주풋볼파크 (Deep Navy & Turf Green Theme) */}
          {/* ======================================================== */}
          <div
            id="print-area-cfp"
            className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest shadow-sm border-2 border-primary/20 hover:border-primary/40 transition-all space-y-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b-2 border-primary">
              <div className="space-y-1">
                <span className="px-2.5 py-1 rounded bg-primary text-on-primary text-[10px] font-bold uppercase tracking-wide">
                  사업자 1 : 시설 및 종합 행사운영
                </span>
                <h3 className="text-xl font-extrabold text-primary mt-1">청주풋볼파크</h3>
                <p className="text-xs text-on-surface-variant">
                  대표자: {BUSINESS_INFO.cfp.ceo} | 사업자등록번호: {BUSINESS_INFO.cfp.bizNum}
                </p>
                <p className="text-xs text-secondary font-semibold">
                  직통 문의: {BUSINESS_INFO.cfp.phone} (체육시설 대관 전용 계좌 분리 운영)
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px]">sports_soccer</span>
              </div>
            </div>

            {/* CFP 1. 시설 선택 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-primary">1. 대관 시설 및 이용 시간</label>
                <span className="text-[11px] font-bold text-secondary">2시간 단위 선택</span>
              </div>

              {/* 축구장 */}
              <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-outline-variant/30">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={cfp.soccerField}
                    onChange={(e) => setCfp({ ...cfp, soccerField: e.target.checked })}
                    className="w-5 h-5 rounded accent-primary text-primary"
                  />
                  <div>
                    <div className="text-sm font-bold text-primary">축구장 (기준 20명)</div>
                    <div className="text-xs text-on-surface-variant">240,000원 / 2시간</div>
                  </div>
                </label>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="text-xs text-on-surface-variant">이용:</span>
                  <select
                    value={cfp.soccerHours}
                    disabled={!cfp.soccerField}
                    onChange={(e) => setCfp({ ...cfp, soccerHours: Number(e.target.value) })}
                    className="h-8 px-2.5 rounded bg-surface-container-lowest text-primary text-xs font-semibold border border-outline-variant/50"
                  >
                    <option value={2}>2시간</option>
                    <option value={3}>3시간</option>
                    <option value={6}>6시간</option>
                  </select>
                </div>
              </div>

              {/* 풋살장 */}
              <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-outline-variant/30">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={cfp.futsalField}
                    onChange={(e) => setCfp({ ...cfp, futsalField: e.target.checked })}
                    className="w-5 h-5 rounded accent-primary text-primary"
                  />
                  <div>
                    <div className="text-sm font-bold text-primary">풋살장 (기준 12명)</div>
                    <div className="text-xs text-on-surface-variant">120,000원 / 2시간</div>
                  </div>
                </label>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="text-xs text-on-surface-variant">이용:</span>
                  <select
                    value={cfp.futsalHours}
                    disabled={!cfp.futsalField}
                    onChange={(e) => setCfp({ ...cfp, futsalHours: Number(e.target.value) })}
                    className="h-8 px-2.5 rounded bg-surface-container-lowest text-primary text-xs font-semibold border border-outline-variant/50"
                  >
                    <option value={2}>2시간</option>
                    <option value={3}>3시간</option>
                    <option value={6}>6시간</option>
                  </select>
                </div>
              </div>

              {/* 족구장 */}
              <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-outline-variant/30">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={cfp.jokguField}
                    onChange={(e) => setCfp({ ...cfp, jokguField: e.target.checked })}
                    className="w-5 h-5 rounded accent-primary text-primary"
                  />
                  <div>
                    <div className="text-sm font-bold text-primary">족구장 (기준 12명)</div>
                    <div className="text-xs text-on-surface-variant">120,000원 / 2시간</div>
                  </div>
                </label>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="text-xs text-on-surface-variant">이용:</span>
                  <select
                    value={cfp.jokguHours}
                    disabled={!cfp.jokguField}
                    onChange={(e) => setCfp({ ...cfp, jokguHours: Number(e.target.value) })}
                    className="h-8 px-2.5 rounded bg-surface-container-lowest text-primary text-xs font-semibold border border-outline-variant/50"
                  >
                    <option value={2}>2시간</option>
                    <option value={4}>4시간</option>
                    <option value={6}>6시간</option>
                    <option value={8}>8시간</option>
                  </select>
                </div>
              </div>

              {/* 실내 풋살장 */}
              <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-outline-variant/30">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={cfp.indoorFutsal}
                    onChange={(e) => setCfp({ ...cfp, indoorFutsal: e.target.checked })}
                    className="w-5 h-5 rounded accent-primary text-primary"
                  />
                  <div>
                    <div className="text-sm font-bold text-primary">실내 풋살장 (냉난방 / 기준 12명)</div>
                    <div className="text-xs text-on-surface-variant">120,000원 / 2시간</div>
                  </div>
                </label>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="text-xs text-on-surface-variant">이용:</span>
                  <select
                    value={cfp.indoorHours}
                    disabled={!cfp.indoorFutsal}
                    onChange={(e) => setCfp({ ...cfp, indoorHours: Number(e.target.value) })}
                    className="h-8 px-2.5 rounded bg-surface-container-lowest text-primary text-xs font-semibold border border-outline-variant/50"
                  >
                    <option value={2}>2시간</option>
                    <option value={4}>4시간</option>
                    <option value={6}>6시간</option>
                    <option value={8}>8시간</option>
                  </select>
                </div>
              </div>

              {/* 야간 조명탑 옵션 */}
              <div className="p-3.5 rounded-xl bg-surface-container-high/60 flex items-center justify-between border border-outline-variant/30">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={cfp.nightLights}
                    onChange={(e) => setCfp({ ...cfp, nightLights: e.target.checked })}
                    className="w-5 h-5 rounded accent-secondary text-secondary"
                  />
                  <div>
                    <div className="text-sm font-bold text-primary">야간 조명탑 가동</div>
                    <div className="text-xs text-on-surface-variant">시설 1개당 40,000원 / 2시간</div>
                  </div>
                </label>
                <span className="text-[11px] font-bold text-secondary">야간 옵션</span>
              </div>
            </div>

            {/* CFP 2. 참가 인원 & 번들 프로모션 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-primary" htmlFor="cfp_participants">
                  2. 행사 참가 예정 인원
                </label>
                <span className="text-xs font-semibold text-on-surface-variant">
                  기준 합계: {cfpCalc.basePaxSum}명
                </span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  id="cfp_participants"
                  type="number"
                  min="0"
                  max="1200"
                  value={cfp.participants === 0 ? '' : cfp.participants}
                  placeholder="0"
                  onChange={(e) => setCfp({ ...cfp, participants: Math.max(0, Number(e.target.value)) })}
                  className="w-32 h-10 px-3 rounded-lg bg-surface-container-low text-primary font-bold text-right border border-outline-variant/50"
                />
                <span className="text-sm font-bold text-primary">명</span>
                <span className="text-xs text-on-surface-variant">(기준인원 초과 1인당 5,000원)</span>
              </div>

              {/* Bundle Promotion Alert */}
              {cfpCalc.isBundlePromotion ? (
                <div className="p-3.5 rounded-xl bg-secondary-fixed/40 border border-secondary-fixed text-on-secondary-fixed-variant text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-secondary shrink-0">
                    verified
                  </span>
                  <span>
                    [프로모션 적용] 축구장과 풋살장 동시 대관으로 인원 초과 요금이 <strong>전액 면제</strong>되었습니다!
                  </span>
                </div>
              ) : (
                cfpCalc.excessPax > 0 && (
                  <div className="text-xs text-on-surface-variant">
                    기준인원 {cfpCalc.basePaxSum}명 초과 ({cfpCalc.excessPax}명 × 5,000원 = {cfpCalc.excessFee.toLocaleString()}원)
                  </div>
                )
              )}
            </div>

            {/* CFP 3. 행사 지원 & 렌탈 옵션 */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-primary">3. 행사 지원 및 렌탈 옵션</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* 전문 MC */}
                <div className="p-3 rounded-xl bg-surface-container-low space-y-2 border border-outline-variant/30">
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-primary select-none">
                    <input
                      type="checkbox"
                      checked={cfp.mcSelected}
                      onChange={(e) => setCfp({ ...cfp, mcSelected: e.target.checked })}
                      className="w-4 h-4 rounded accent-primary"
                    />
                    <span>전문 MC 섭외</span>
                  </label>
                  <div className="text-[11px] text-on-surface-variant">
                    기본 2시간 80만원 / 추가시간당 40만원
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span>진행:</span>
                    <select
                      value={cfp.mcHours}
                      disabled={!cfp.mcSelected}
                      onChange={(e) => setCfp({ ...cfp, mcHours: Number(e.target.value) })}
                      className="h-7 px-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-xs"
                    >
                      <option value={2}>2시간 (800,000원)</option>
                      <option value={3}>3시간 (1,200,000원)</option>
                      <option value={4}>4시간 (1,600,000원)</option>
                      <option value={5}>5시간 (2,000,000원)</option>
                    </select>
                  </div>
                </div>

                {/* 지원 스태프 */}
                <div className="p-3 rounded-xl bg-surface-container-low space-y-2 border border-outline-variant/30">
                  <div className="flex items-center justify-between font-bold text-primary">
                    <span>행사지원 스태프</span>
                    <span className="text-secondary">인당 150,000원</span>
                  </div>
                  <div className="text-[11px] text-on-surface-variant">심판, 음향, 안전 (권장: 100명당 2명)</div>
                  <div className="flex items-center gap-2 pt-1">
                    <span>인원:</span>
                    <input
                      type="number"
                      min="0"
                      max="20"
                      value={cfp.staffCount}
                      onChange={(e) => setCfp({ ...cfp, staffCount: Math.max(0, Number(e.target.value)) })}
                      className="w-20 h-7 px-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-right text-xs"
                    />
                    <span>명</span>
                  </div>
                </div>

                {/* 기본용품 셋트 */}
                <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between border border-outline-variant/30">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={cfp.basicEquipment}
                      onChange={(e) => setCfp({ ...cfp, basicEquipment: e.target.checked })}
                      className="w-4 h-4 rounded accent-primary"
                    />
                    <div>
                      <div className="font-bold text-primary">체육대회 기본용품 셋트</div>
                      <div className="text-[10px] text-on-surface-variant">줄다리기 밧줄, 릴레이봉, 꼬깔 등</div>
                    </div>
                  </label>
                  <span className="font-bold text-primary">150,000원</span>
                </div>

                {/* 팀 구분 조끼 */}
                <div className="p-3 rounded-xl bg-surface-container-low space-y-2 border border-outline-variant/30">
                  <div className="flex items-center justify-between font-bold text-primary">
                    <span>팀 구분 조끼 대여</span>
                    <span>벌당 700원</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span>수량:</span>
                    <input
                      type="number"
                      min="0"
                      max="1200"
                      value={cfp.vestCount}
                      onChange={(e) => setCfp({ ...cfp, vestCount: Math.max(0, Number(e.target.value)) })}
                      className="w-20 h-7 px-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-right text-xs"
                    />
                    <span>벌</span>
                  </div>
                </div>

                {/* 음향 장비 */}
                <div className="p-3 rounded-xl bg-surface-container-low space-y-2 border border-outline-variant/30 sm:col-span-2">
                  <div className="flex items-center justify-between font-bold text-primary">
                    <span>전문 음향 장비 셋팅</span>
                    <span className="text-secondary font-semibold">인원 규모별 선택</span>
                  </div>
                  <select
                    value={cfp.audioTier}
                    onChange={(e) => setCfp({ ...cfp, audioTier: Number(e.target.value) })}
                    className="w-full h-8 px-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-xs font-semibold"
                  >
                    <option value={0}>음향 장비 미선택 (0원)</option>
                    <option value={300000}>50명 이하 (기본 음향 스피커 + 무선 마이크 2개) - 300,000원</option>
                    <option value={500000}>51명 이상 (대형 방송 스피커 + 무선 마이크 4개) - 500,000원</option>
                  </select>
                </div>

                {/* 캐노피 천막 */}
                <div className="p-3 rounded-xl bg-surface-container-low space-y-2 border border-outline-variant/30">
                  <div className="flex items-center justify-between font-bold text-primary">
                    <span>캐노피 천막 (3m×6m)</span>
                    <span>동당 35,000원</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span>수량:</span>
                    <input
                      type="number"
                      min="0"
                      max="30"
                      value={cfp.tentCount}
                      onChange={(e) => setCfp({ ...cfp, tentCount: Math.max(0, Number(e.target.value)) })}
                      className="w-20 h-7 px-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-right text-xs"
                    />
                    <span>동</span>
                  </div>
                </div>

                {/* 듀라테이블 */}
                <div className="p-3 rounded-xl bg-surface-container-low space-y-2 border border-outline-variant/30">
                  <div className="flex items-center justify-between font-bold text-primary">
                    <span>듀라테이블 (1800)</span>
                    <span>개당 10,000원</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span>수량:</span>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={cfp.tableCount}
                      onChange={(e) => setCfp({ ...cfp, tableCount: Math.max(0, Number(e.target.value)) })}
                      className="w-20 h-7 px-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-right text-xs"
                    />
                    <span>개</span>
                  </div>
                </div>

                {/* 연계 숙박 */}
                <div className="p-3 rounded-xl bg-surface-container-low space-y-2 border border-outline-variant/30 sm:col-span-2">
                  <div className="flex items-center justify-between font-bold text-primary">
                    <span>연계 숙박 (1박)</span>
                    <span className="text-secondary font-semibold">1인 20,000원</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span>이용 인원:</span>
                    <input
                      type="number"
                      min="0"
                      max="300"
                      value={cfp.stayCount}
                      onChange={(e) => setCfp({ ...cfp, stayCount: Math.max(0, Number(e.target.value)) })}
                      className="w-20 h-7 px-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-right text-xs"
                    />
                    <span>명</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CFP 실시간 견적 산출 명세표 */}
            <div className="p-5 rounded-2xl bg-surface-container-low space-y-3 border border-outline-variant/40">
              <div className="text-[11px] font-bold text-primary uppercase tracking-wider">
                청주풋볼파크 견적 산출 내역
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between text-on-surface-variant">
                  <span>체육시설 대관료 소계</span>
                  <span className="font-bold text-primary">{cfpCalc.facilityTotal.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>인원 초과 요금</span>
                  <span className="font-bold text-primary">
                    {cfpCalc.isBundlePromotion ? '0원 (면제)' : `${cfpCalc.excessFee.toLocaleString()}원`}
                  </span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>행사 지원 및 렌탈 소계</span>
                  <span className="font-bold text-primary">{cfpCalc.optionsTotal.toLocaleString()}원</span>
                </div>
                <div className="pt-2 flex justify-between font-bold text-primary border-t border-surface-variant">
                  <span>공급가액</span>
                  <span>{cfpCalc.subtotal.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-xs text-on-surface-variant">
                  <span>부가가치세 (VAT 10%)</span>
                  <span>{cfpCalc.vat.toLocaleString()}원</span>
                </div>
              </div>

              <div className="pt-3 flex items-baseline justify-between border-t border-primary/20">
                <div>
                  <span className="text-[11px] font-bold text-secondary uppercase">청주풋볼파크 최종 합계</span>
                  <div className="text-2xl font-extrabold text-primary">
                    {cfpCalc.grandTotal.toLocaleString()}원
                  </div>
                </div>
                <div className="text-right text-[11px] text-on-surface-variant">
                  시설/운영 세금계산서 발행
                </div>
              </div>
            </div>

            {/* CFP Action Buttons */}
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handlePrint('cfp')}
                  className="h-11 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">print</span>
                  <span>청주풋볼파크 견적서 출력</span>
                </button>
                <a
                  href={BUSINESS_INFO.cfp.telLink}
                  className="h-11 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all border border-outline-variant/50"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>대관 문의 010-7900-8219</span>
                </a>
              </div>
              <div className="text-center text-xs text-on-surface-variant">
                담당 이메일: <a href={BUSINESS_INFO.cfp.emailLink} className="font-bold text-primary hover:underline">{BUSINESS_INFO.cfp.email}</a>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* BUSINESS 2: 가베슈 (Warm Amber & Coffee Brown Theme) */}
          {/* ======================================================== */}
          <div
            id="print-area-gabeshu"
            className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest shadow-sm border-2 border-on-tertiary-container/30 hover:border-on-tertiary-container/60 transition-all space-y-8"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b-2 border-on-tertiary-container">
              <div className="space-y-1">
                <span className="px-2.5 py-1 rounded bg-tertiary-container text-tertiary-fixed text-[10px] font-bold uppercase tracking-wide">
                  사업자 2 : F&B 및 세미나실
                </span>
                <h3 className="text-xl font-extrabold text-primary mt-1">가베슈</h3>
                <p className="text-xs text-on-surface-variant">
                  대표자: {BUSINESS_INFO.gabeshu.ceo} | 사업자등록번호: {BUSINESS_INFO.gabeshu.bizNum}
                </p>
                <p className="text-xs text-on-tertiary-container font-semibold">
                  직통 문의: {BUSINESS_INFO.gabeshu.phone} (식음료 세금계산서 별도 분리 발행)
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/50 text-on-tertiary-fixed-variant flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px]">coffee</span>
              </div>
            </div>

            {/* Warning Banner for Gabeshu */}
            <div className="p-3.5 rounded-xl bg-tertiary-fixed/30 text-on-tertiary-fixed text-xs sm:text-sm flex items-center gap-2 border border-tertiary-fixed">
              <span className="material-symbols-outlined text-[20px] text-on-tertiary-container shrink-0">
                info
              </span>
              <span>가베슈의 세미나실 및 단체 식음료(바비큐)는 <strong>최소 주문인원 20명</strong>부터 접수 가능합니다.</span>
            </div>

            {/* Gabeshu 1. 세미나실 & 커피 */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-primary">1. 세미나실 이용 및 웰컴티</label>
                <span className="text-[11px] font-bold text-on-tertiary-container">1인 10,000원 (20인 이상)</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low space-y-3 border border-outline-variant/30 text-xs sm:text-sm">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={gbs.seminarSelected}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setGbs({
                        ...gbs,
                        seminarSelected: checked,
                        seminarPax: checked && gbs.seminarPax === 0 ? 20 : gbs.seminarPax,
                      });
                    }}
                    className="w-5 h-5 rounded accent-on-tertiary-container"
                  />
                  <div>
                    <div className="font-bold text-primary">세미나실 대관 + 웰컴티 아메리카노 1잔 무료 제공</div>
                    <div className="text-xs text-on-surface-variant">빔프로젝터, 대형 스크린, 무선 마이크 일체 구비</div>
                  </div>
                </label>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-on-surface-variant">세미나 참가 인원 (최소 20인):</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="20"
                      max="250"
                      value={gbs.seminarPax === 0 ? '' : gbs.seminarPax}
                      placeholder="20"
                      disabled={!gbs.seminarSelected}
                      onChange={(e) => setGbs({ ...gbs, seminarPax: Math.max(0, Number(e.target.value)) })}
                      className="w-20 h-8 px-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-right font-bold text-xs"
                    />
                    <span className="text-xs font-bold text-primary">명</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-surface-variant/60">
                  <div>
                    <span className="font-bold text-primary text-xs">추가 아메리카노 주문</span>
                    <div className="text-[10px] text-on-surface-variant">잔당 4,000원</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      max="500"
                      value={gbs.extraCoffee}
                      onChange={(e) => setGbs({ ...gbs, extraCoffee: Math.max(0, Number(e.target.value)) })}
                      className="w-20 h-8 px-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-right text-xs"
                    />
                    <span className="text-xs">잔</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gabeshu 2. 단체 식사 패키지 */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-primary">2. 단체 식사 패키지 선택</label>
              <div className="space-y-2.5 text-xs sm:text-sm">
                {/* 바비큐 식사 */}
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-outline-variant/30">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={gbs.bbqSelected}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setGbs({
                          ...gbs,
                          bbqSelected: checked,
                          bbqPax: checked && gbs.bbqPax === 0 ? 20 : gbs.bbqPax,
                        });
                      }}
                      className="w-5 h-5 rounded accent-on-tertiary-container"
                    />
                    <div>
                      <div className="font-bold text-primary">단체 삼겹/목살 바비큐 식사 (250석)</div>
                      <div className="text-xs text-on-surface-variant">1인 35,000원 (국내산 고기, 쌈채소, 밥, 된장찌개 일체)</div>
                    </div>
                  </label>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <span className="text-xs text-on-surface-variant">인원:</span>
                    <input
                      type="number"
                      min="20"
                      max="250"
                      disabled={!gbs.bbqSelected}
                      value={gbs.bbqPax === 0 ? '' : gbs.bbqPax}
                      placeholder="20"
                      onChange={(e) => setGbs({ ...gbs, bbqPax: Math.max(0, Number(e.target.value)) })}
                      className="w-20 h-8 px-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-right text-xs"
                    />
                    <span className="text-xs">명</span>
                  </div>
                </div>

                {/* 출장 케이터링 */}
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-outline-variant/30">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={gbs.cateringSelected}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setGbs({
                          ...gbs,
                          cateringSelected: checked,
                          cateringPax: checked && gbs.cateringPax === 0 ? 20 : gbs.cateringPax,
                        });
                      }}
                      className="w-5 h-5 rounded accent-on-tertiary-container"
                    />
                    <div>
                      <div className="font-bold text-primary">프리미엄 출장 케이터링</div>
                      <div className="text-xs text-on-surface-variant">1인 35,000원 (핫디쉬, 샐러드, 핑거푸드 뷔페식)</div>
                    </div>
                  </label>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <span className="text-xs text-on-surface-variant">인원:</span>
                    <input
                      type="number"
                      min="20"
                      max="300"
                      disabled={!gbs.cateringSelected}
                      value={gbs.cateringPax === 0 ? '' : gbs.cateringPax}
                      placeholder="20"
                      onChange={(e) => setGbs({ ...gbs, cateringPax: Math.max(0, Number(e.target.value)) })}
                      className="w-20 h-8 px-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-right text-xs"
                    />
                    <span className="text-xs">명</span>
                  </div>
                </div>

                {/* 점심 한식 뷔페 */}
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-outline-variant/30">
                  <label className="flex items-center gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={gbs.buffetSelected}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setGbs({
                          ...gbs,
                          buffetSelected: checked,
                          buffetPax: checked && gbs.buffetPax === 0 ? 20 : gbs.buffetPax,
                        });
                      }}
                      className="w-5 h-5 rounded accent-on-tertiary-container"
                    />
                    <div>
                      <div className="font-bold text-primary">점심 한식 뷔페</div>
                      <div className="text-xs text-on-surface-variant">1인 15,000원 (국, 제육/불고기, 6종 찬류)</div>
                    </div>
                  </label>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <span className="text-xs text-on-surface-variant">인원:</span>
                    <input
                      type="number"
                      min="20"
                      max="300"
                      disabled={!gbs.buffetSelected}
                      value={gbs.buffetPax === 0 ? '' : gbs.buffetPax}
                      placeholder="20"
                      onChange={(e) => setGbs({ ...gbs, buffetPax: Math.max(0, Number(e.target.value)) })}
                      className="w-20 h-8 px-2 rounded bg-surface-container-lowest border border-outline-variant/50 text-right text-xs"
                    />
                    <span className="text-xs">명</span>
                  </div>
                </div>

                {/* 웰컴 간식 / 조식 */}
                <div className="p-3.5 rounded-xl bg-surface-container-low space-y-2 border border-outline-variant/30">
                  <div className="font-bold text-primary text-xs">오전 웰컴 간식 / 조식 (각 1인 5,500원)</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded bg-surface-container-lowest border border-outline-variant/40">
                      <span>샌드위치</span>
                      <input
                        type="number"
                        min="0"
                        max="300"
                        value={gbs.sandwichCount}
                        onChange={(e) => setGbs({ ...gbs, sandwichCount: Math.max(0, Number(e.target.value)) })}
                        className="w-16 h-7 px-1.5 rounded bg-surface-container text-right text-xs border border-outline-variant/40"
                      />
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-surface-container-lowest border border-outline-variant/40">
                      <span>떡 3종 세트</span>
                      <input
                        type="number"
                        min="0"
                        max="300"
                        value={gbs.ricecakeCount}
                        onChange={(e) => setGbs({ ...gbs, ricecakeCount: Math.max(0, Number(e.target.value)) })}
                        className="w-16 h-7 px-1.5 rounded bg-surface-container text-right text-xs border border-outline-variant/40"
                      />
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-surface-container-lowest border border-outline-variant/40">
                      <span>신선 컵과일</span>
                      <input
                        type="number"
                        min="0"
                        max="300"
                        value={gbs.fruitCupCount}
                        onChange={(e) => setGbs({ ...gbs, fruitCupCount: Math.max(0, Number(e.target.value)) })}
                        className="w-16 h-7 px-1.5 rounded bg-surface-container text-right text-xs border border-outline-variant/40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gabeshu 3. 주류, 음료 및 안주 */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-primary">3. 주류, 음료 및 안주</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-surface-container-low space-y-1 border border-outline-variant/30">
                  <div className="font-bold text-primary">소주</div>
                  <div className="text-[10px] text-on-surface-variant">병당 4,000원</div>
                  <input
                    type="number"
                    min="0"
                    max="500"
                    value={gbs.sojuCount}
                    onChange={(e) => setGbs({ ...gbs, sojuCount: Math.max(0, Number(e.target.value)) })}
                    className="w-full h-7 px-2 rounded bg-surface-container-lowest text-right border border-outline-variant/40"
                  />
                </div>
                <div className="p-2.5 rounded-xl bg-surface-container-low space-y-1 border border-outline-variant/30">
                  <div className="font-bold text-primary">맥주</div>
                  <div className="text-[10px] text-on-surface-variant">병당 4,000원</div>
                  <input
                    type="number"
                    min="0"
                    max="500"
                    value={gbs.beerCount}
                    onChange={(e) => setGbs({ ...gbs, beerCount: Math.max(0, Number(e.target.value)) })}
                    className="w-full h-7 px-2 rounded bg-surface-container-lowest text-right border border-outline-variant/40"
                  />
                </div>
                <div className="p-2.5 rounded-xl bg-surface-container-low space-y-1 border border-outline-variant/30">
                  <div className="font-bold text-primary">캔 음료</div>
                  <div className="text-[10px] text-on-surface-variant">캔당 2,000원</div>
                  <input
                    type="number"
                    min="0"
                    max="500"
                    value={gbs.sodaCount}
                    onChange={(e) => setGbs({ ...gbs, sodaCount: Math.max(0, Number(e.target.value)) })}
                    className="w-full h-7 px-2 rounded bg-surface-container-lowest text-right border border-outline-variant/40"
                  />
                </div>
                <div className="p-2.5 rounded-xl bg-surface-container-low space-y-1 border border-outline-variant/30">
                  <div className="font-bold text-primary">생수 (500ml)</div>
                  <div className="text-[10px] text-on-surface-variant">병당 1,000원</div>
                  <input
                    type="number"
                    min="0"
                    max="800"
                    value={gbs.waterCount}
                    onChange={(e) => setGbs({ ...gbs, waterCount: Math.max(0, Number(e.target.value)) })}
                    className="w-full h-7 px-2 rounded bg-surface-container-lowest text-right border border-outline-variant/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between border border-outline-variant/30">
                  <div>
                    <div className="font-bold text-primary">모듬 마른안주</div>
                    <div className="text-[10px] text-on-surface-variant">15,000원 / 플레이트</div>
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={gbs.driedSnackCount}
                    onChange={(e) => setGbs({ ...gbs, driedSnackCount: Math.max(0, Number(e.target.value)) })}
                    className="w-16 h-7 px-2 rounded bg-surface-container-lowest text-right border border-outline-variant/40"
                  />
                </div>

                <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between border border-outline-variant/30">
                  <div>
                    <div className="font-bold text-primary">순살치킨 & 감자튀김</div>
                    <div className="text-[10px] text-on-surface-variant">19,000원 / 플레이트</div>
                  </div>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={gbs.chickenCount}
                    onChange={(e) => setGbs({ ...gbs, chickenCount: Math.max(0, Number(e.target.value)) })}
                    className="w-16 h-7 px-2 rounded bg-surface-container-lowest text-right border border-outline-variant/40"
                  />
                </div>
              </div>
            </div>

            {/* Gabeshu 실시간 견적 산출 명세표 */}
            <div className="p-5 rounded-2xl bg-surface-container-low space-y-3 border border-outline-variant/40">
              <div className="text-[11px] font-bold text-on-tertiary-container uppercase tracking-wider">
                가베슈(F&B) 견적 산출 내역
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between text-on-surface-variant">
                  <span>세미나실 및 커피음료 소계</span>
                  <span className="font-bold text-primary">{gbsCalc.seminarTotal.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>단체 식사 / 바비큐 소계</span>
                  <span className="font-bold text-primary">{gbsCalc.mealTotal.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>주류, 음료 및 안주 소계</span>
                  <span className="font-bold text-primary">{gbsCalc.beverageTotal.toLocaleString()}원</span>
                </div>
                <div className="pt-2 flex justify-between font-bold text-primary border-t border-surface-variant">
                  <span>공급가액</span>
                  <span>{gbsCalc.subtotal.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between text-xs text-on-surface-variant">
                  <span>부가가치세 (VAT 10%)</span>
                  <span>{gbsCalc.vat.toLocaleString()}원</span>
                </div>
              </div>

              <div className="pt-3 flex items-baseline justify-between border-t border-on-tertiary-container/20">
                <div>
                  <span className="text-[11px] font-bold text-on-tertiary-container uppercase">가베슈 최종 합계</span>
                  <div className="text-2xl font-extrabold text-primary">
                    {gbsCalc.grandTotal.toLocaleString()}원
                  </div>
                </div>
                <div className="text-right text-[11px] text-on-surface-variant">
                  식음료 세금계산서 별도 발행
                </div>
              </div>
            </div>

            {/* Gabeshu Action Buttons */}
            <div className="space-y-3 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handlePrint('gabeshu')}
                  className="h-11 rounded-xl bg-tertiary-container hover:bg-primary text-on-tertiary font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">print</span>
                  <span>가베슈 견적서 출력</span>
                </button>
                <a
                  href={BUSINESS_INFO.gabeshu.telLink}
                  className="h-11 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all border border-outline-variant/50"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>가베슈 직통 010-4830-8500</span>
                </a>
              </div>
              <div className="text-center text-xs text-on-surface-variant">
                담당 이메일: <a href={BUSINESS_INFO.gabeshu.emailLink} className="font-bold text-primary hover:underline">{BUSINESS_INFO.gabeshu.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Formatted Quotation Print Preview Modal */}
      {printModal.open && (
        <div
          className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setPrintModal({ open: false, business: 'cfp' })}
        >
          <div
            className="relative max-w-2xl w-full bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Actions */}
            <div className="flex items-center justify-between no-print pb-4 border-b border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                정식 견적서 미리보기 및 출력
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={triggerBrowserPrint}
                  className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold flex items-center gap-1.5 hover:bg-primary-container"
                >
                  <span className="material-symbols-outlined text-[16px]">print</span>
                  <span>인쇄 / PDF 저장</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPrintModal({ open: false, business: 'cfp' })}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            </div>

            {/* Printable Document Body */}
            <div className="space-y-6 text-sm">
              <div className="text-center space-y-1">
                <h2 className="text-2xl font-black tracking-tight text-slate-900">
                  {printModal.business === 'cfp' ? '견 적 서 (체육시설 및 행사운영)' : '견 적 서 (식음료 F&B 및 세미나실)'}
                </h2>
                <p className="text-xs text-slate-500">
                  발행일자: {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              {/* Business Identification Table */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <div className="font-bold text-slate-500 mb-1">공급자 (정산 사업자)</div>
                  <div className="font-bold text-sm text-slate-900">
                    {printModal.business === 'cfp' ? BUSINESS_INFO.cfp.name : BUSINESS_INFO.gabeshu.name}
                  </div>
                  <div>대표자: {printModal.business === 'cfp' ? BUSINESS_INFO.cfp.ceo : BUSINESS_INFO.gabeshu.ceo}</div>
                  <div>사업자등록번호: {printModal.business === 'cfp' ? BUSINESS_INFO.cfp.bizNum : BUSINESS_INFO.gabeshu.bizNum}</div>
                  <div>연락처: {printModal.business === 'cfp' ? BUSINESS_INFO.cfp.phone : BUSINESS_INFO.gabeshu.phone}</div>
                </div>
                <div>
                  <div className="font-bold text-slate-500 mb-1">견적 요청 정보</div>
                  <div>참가 예정 인원: {printModal.business === 'cfp' ? `${cfp.participants}명` : `${gbs.seminarPax || gbs.bbqPax}명`}</div>
                  <div>행사 장소: 충북 청주시 서원구 남이면 남석리 464-1 청주풋볼파크</div>
                  <div className="text-red-600 font-semibold mt-1">
                    * {printModal.business === 'cfp' ? BUSINESS_INFO.cfp.taxNote : BUSINESS_INFO.gabeshu.taxNote}
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <table className="w-full text-xs text-left border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="border border-slate-300 p-2">품목 구분</th>
                    <th className="border border-slate-300 p-2">상세 내역</th>
                    <th className="border border-slate-300 p-2 text-right">금액(원)</th>
                  </tr>
                </thead>
                <tbody>
                  {printModal.business === 'cfp' ? (
                    <>
                      <tr>
                        <td className="border border-slate-300 p-2 font-bold">시설 대관</td>
                        <td className="border border-slate-300 p-2">
                          {[
                            cfp.soccerField && `축구장 (${cfp.soccerHours}시간)`,
                            cfp.futsalField && `풋살장 (${cfp.futsalHours}시간)`,
                            cfp.jokguField && `족구장 (${cfp.jokguHours}시간)`,
                            cfp.indoorFutsal && `실내 풋살장 (${cfp.indoorHours}시간)`,
                            cfp.nightLights && '야간 조명탑 가동',
                          ].filter(Boolean).join(', ') || '시설 미선택'}
                        </td>
                        <td className="border border-slate-300 p-2 text-right font-bold">
                          {cfpCalc.facilityTotal.toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-bold">인원 초과금</td>
                        <td className="border border-slate-300 p-2">
                          {cfpCalc.isBundlePromotion
                            ? '축구장+풋살장 동시 대관 프로모션 (전액 면제)'
                            : `초과 ${cfpCalc.excessPax}명 × 5,000원`}
                        </td>
                        <td className="border border-slate-300 p-2 text-right font-bold">
                          {cfpCalc.excessFee.toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-bold">행사 지원 & 렌탈</td>
                        <td className="border border-slate-300 p-2">
                          {[
                            cfp.mcSelected && `전문 MC (${cfp.mcHours}시간)`,
                            cfp.staffCount > 0 && `스태프 ${cfp.staffCount}명`,
                            cfp.basicEquipment && '체육대회 기본용품',
                            cfp.vestCount > 0 && `조끼 ${cfp.vestCount}벌`,
                            cfp.audioTier > 0 && '전문 음향장비',
                            cfp.tentCount > 0 && `천막 ${cfp.tentCount}동`,
                            cfp.tableCount > 0 && `테이블 ${cfp.tableCount}개`,
                            cfp.stayCount > 0 && `연계숙박 ${cfp.stayCount}명`,
                          ].filter(Boolean).join(', ') || '옵션 미선택'}
                        </td>
                        <td className="border border-slate-300 p-2 text-right font-bold">
                          {cfpCalc.optionsTotal.toLocaleString()}
                        </td>
                      </tr>
                    </>
                  ) : (
                    <>
                      <tr>
                        <td className="border border-slate-300 p-2 font-bold">세미나실 & 커피</td>
                        <td className="border border-slate-300 p-2">
                          {[
                            gbs.seminarSelected && `세미나실 대관 + 웰컴티 (${gbs.seminarPax}명)`,
                            gbs.extraCoffee > 0 && `추가 아메리카노 ${gbs.extraCoffee}잔`,
                          ].filter(Boolean).join(', ') || '미선택'}
                        </td>
                        <td className="border border-slate-300 p-2 text-right font-bold">
                          {gbsCalc.seminarTotal.toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-bold">식사 / 바비큐</td>
                        <td className="border border-slate-300 p-2">
                          {[
                            gbs.bbqSelected && `단체 바비큐 (${gbs.bbqPax}명)`,
                            gbs.cateringSelected && `출장 케이터링 (${gbs.cateringPax}명)`,
                            gbs.buffetSelected && `한식 뷔페 (${gbs.buffetPax}명)`,
                            gbs.sandwichCount > 0 && `샌드위치 ${gbs.sandwichCount}개`,
                            gbs.ricecakeCount > 0 && `떡 ${gbs.ricecakeCount}개`,
                            gbs.fruitCupCount > 0 && `컵과일 ${gbs.fruitCupCount}개`,
                          ].filter(Boolean).join(', ') || '식사 미선택'}
                        </td>
                        <td className="border border-slate-300 p-2 text-right font-bold">
                          {gbsCalc.mealTotal.toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-bold">주류 & 음료 & 안주</td>
                        <td className="border border-slate-300 p-2">
                          {[
                            gbs.sojuCount > 0 && `소주 ${gbs.sojuCount}병`,
                            gbs.beerCount > 0 && `맥주 ${gbs.beerCount}병`,
                            gbs.sodaCount > 0 && `캔음료 ${gbs.sodaCount}캔`,
                            gbs.waterCount > 0 && `생수 ${gbs.waterCount}병`,
                            gbs.driedSnackCount > 0 && `마른안주 ${gbs.driedSnackCount}개`,
                            gbs.chickenCount > 0 && `치킨 ${gbs.chickenCount}개`,
                          ].filter(Boolean).join(', ') || '미선택'}
                        </td>
                        <td className="border border-slate-300 p-2 text-right font-bold">
                          {gbsCalc.beverageTotal.toLocaleString()}
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>

              {/* Total Calculation */}
              <div className="p-4 rounded-xl bg-slate-100 space-y-1 text-right text-xs">
                <div>
                  공급가액: <strong>{printModal.business === 'cfp' ? cfpCalc.subtotal.toLocaleString() : gbsCalc.subtotal.toLocaleString()}원</strong>
                </div>
                <div>
                  부가가치세 (10%): <strong>{printModal.business === 'cfp' ? cfpCalc.vat.toLocaleString() : gbsCalc.vat.toLocaleString()}원</strong>
                </div>
                <div className="text-base font-extrabold text-slate-900 pt-1 border-t border-slate-300">
                  최종 합계: {printModal.business === 'cfp' ? cfpCalc.grandTotal.toLocaleString() : gbsCalc.grandTotal.toLocaleString()}원 (VAT 포함)
                </div>
              </div>

              <div className="text-center text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                위와 같이 견적합니다. 청주풋볼파크 & 가베슈 컴플렉스
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
