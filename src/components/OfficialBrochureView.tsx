import React, { useState } from 'react';
import {
  HERO_IMAGE_FALLBACK,
  scoreboardImg,
  spectatorBenchImg,
  BUSINESS_INFO,
  facSoccerImg,
  facFutsalImg,
  facJokguImg,
  facIndoorImg,
  facSeminarImg,
  facBbqImg,
  progSportsDayImg,
  progTournamentImg,
  progWorkshopImg,
  progBbqPartyImg,
} from '../data/parkData';

interface OfficialBrochureViewProps {
  type: 'outer' | 'inner';
  onZoom?: () => void;
  compact?: boolean;
}

export const OfficialBrochureView: React.FC<OfficialBrochureViewProps> = ({
  type,
  onZoom,
  compact = false,
}) => {
  if (type === 'outer') {
    return (
      <div
        onClick={onZoom}
        className={`w-full bg-[#f8fafc] text-slate-900 border border-slate-300 rounded-xl overflow-hidden select-none font-sans ${
          compact ? 'p-3 text-[9px] sm:text-[10px]' : 'p-4 sm:p-6 text-xs'
        }`}
      >
        <div className="grid grid-cols-3 gap-2 sm:gap-4 divide-x divide-slate-200">
          {/* Outer Panel 1: 편의시설 */}
          <div className="space-y-2 pr-1 sm:pr-2">
            <div className="pb-1 border-b-2 border-[#1a3a6c]">
              <h4 className="font-extrabold text-[#1a3a6c] tracking-tight">편의시설</h4>
            </div>

            <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
              <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img src={facIndoorImg} alt="샤워실" className="w-full h-full object-cover" />
                </div>
                <div className="text-center font-bold text-[8px] sm:text-[10px] py-0.5 text-slate-800">샤워실</div>
              </div>

              <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img src={facSeminarImg} alt="화장실" className="w-full h-full object-cover" />
                </div>
                <div className="text-center font-bold text-[8px] sm:text-[10px] py-0.5 text-slate-800">화장실</div>
              </div>

              <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img src={facSoccerImg} alt="주차장" className="w-full h-full object-cover" />
                </div>
                <div className="text-center font-bold text-[8px] sm:text-[10px] py-0.5 text-slate-800">150대 주차장</div>
              </div>

              <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img src={facBbqImg} alt="휴게공간" className="w-full h-full object-cover" />
                </div>
                <div className="text-center font-bold text-[8px] sm:text-[10px] py-0.5 text-slate-800">휴게공간</div>
              </div>

              <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img src={spectatorBenchImg} alt="관중석" className="w-full h-full object-cover" />
                </div>
                <div className="text-center font-bold text-[8px] sm:text-[10px] py-0.5 text-slate-800">관중석</div>
              </div>

              <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img src={spectatorBenchImg} alt="팀벤치" className="w-full h-full object-cover" />
                </div>
                <div className="text-center font-bold text-[8px] sm:text-[10px] py-0.5 text-slate-800">팀벤치</div>
              </div>

              <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img src={facBbqImg} alt="흡연장" className="w-full h-full object-cover" />
                </div>
                <div className="text-center font-bold text-[8px] sm:text-[10px] py-0.5 text-slate-800">흡연장</div>
              </div>

              <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img src={scoreboardImg} alt="전광판 & 음향시설" className="w-full h-full object-cover" />
                </div>
                <div className="text-center font-bold text-[7px] sm:text-[9px] py-0.5 text-slate-800 truncate">전광판·음향</div>
              </div>
            </div>
          </div>

          {/* Outer Panel 2: Center - 개요, 약도 및 오시는 길 */}
          <div className="space-y-2 px-1 sm:px-2 flex flex-col justify-between">
            <div className="space-y-1.5 text-center">
              <div className="aspect-[16/9] rounded overflow-hidden border border-slate-300">
                <img src={facSoccerImg} alt="파크 항공 전경" className="w-full h-full object-cover" />
              </div>

              <div className="bg-slate-900 text-white py-1 px-1.5 rounded">
                <div className="text-yellow-400 font-extrabold text-[9px] sm:text-xs">청주풋볼파크는</div>
                <p className="text-[7.5px] sm:text-[9.5px] leading-tight text-slate-200 mt-0.5">
                  전국 유일의 유소년 정식규격 축구장과<br />
                  풋살 정식규격(20X40m) 5면 보유!<br />
                  실내구장 & 단체 바베큐장 완비
                </p>
              </div>
            </div>

            {/* 오시는 길 약도 박스 */}
            <div className="p-1.5 sm:p-2 bg-white rounded border border-slate-300 space-y-1 text-center">
              <div className="font-bold text-[8px] sm:text-[10px] text-slate-800">오시는 길 약도</div>
              <div className="py-1 px-2 bg-slate-50 border border-dashed border-slate-300 rounded text-[7px] sm:text-[9px] text-slate-600">
                덕일한마음Apt ⇄ <b>청주풋볼파크</b> ⇄ 도원주유소<br />
                <span className="text-blue-700 font-bold">충청대로 733</span> (보건과학대 인근)
              </div>
              <div className="text-[7.5px] sm:text-[9.5px] font-bold text-slate-900">
                충북 청주시 청원구 내수읍 충청대로 733
              </div>
              <div className="text-[7.5px] sm:text-[9.5px] text-red-600 font-extrabold">
                문의: 0507-1321-5362 / 010-7900-8219
              </div>
            </div>
          </div>

          {/* Outer Panel 3: Right - 메인 표지 */}
          <div className="bg-[#0b1d3a] text-white p-2 sm:p-3 rounded-lg flex flex-col justify-between text-center space-y-2">
            <div className="space-y-1">
              <div className="inline-block px-1.5 py-0.5 rounded bg-blue-900/80 border border-blue-400 text-blue-200 font-bold text-[7px] sm:text-[9px]">
                충청권 최대규모 풋살장
              </div>
              <div className="text-slate-300 text-[8px] sm:text-[10px] tracking-wider uppercase">premium</div>
              <h3 className="text-yellow-400 font-black text-xs sm:text-base tracking-tight leading-none">
                청주풋볼파크
              </h3>
            </div>

            <div className="aspect-[16/10] rounded overflow-hidden border border-blue-900/50">
              <img src={facSoccerImg} alt="파크 전경" className="w-full h-full object-cover" />
            </div>

            <div className="space-y-0.5 text-[7.5px] sm:text-[9.5px] text-slate-200 font-medium leading-tight">
              <div>축구 & 풋살장 대관</div>
              <div>단체 바베큐장</div>
              <div>각종 체육대회 & 단합대회</div>
            </div>

            <div className="pt-1 border-t border-blue-900/60 text-[7px] sm:text-[8.5px] text-yellow-300 font-bold">
              2022년 완공 청주 최대규모
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Inner View: 소개 & 이용료 안내 | 행사 & 대회 이용안내 | 이용시설
  return (
    <div
      onClick={onZoom}
      className={`w-full bg-[#f8fafc] text-slate-900 border border-slate-300 rounded-xl overflow-hidden select-none font-sans ${
        compact ? 'p-3 text-[9px] sm:text-[10px]' : 'p-4 sm:p-6 text-xs'
      }`}
    >
      <div className="grid grid-cols-3 gap-2 sm:gap-4 divide-x divide-slate-200">
        {/* Inner Panel 1: 소개 & 이용료 안내 */}
        <div className="space-y-2 pr-1 sm:pr-2 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="pb-1 border-b-2 border-[#1a3a6c]">
              <h4 className="font-extrabold text-[#1a3a6c] tracking-tight">소개 & 이용료 안내</h4>
            </div>

            <div className="aspect-[16/9] rounded overflow-hidden border border-slate-200">
              <img src={facSoccerImg} alt="풋볼파크 전경" className="w-full h-full object-cover" />
            </div>

            <ul className="text-[7px] sm:text-[8.5px] space-y-0.5 text-slate-700 leading-tight">
              <li className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                <span>충청권 최대규모시설 <b>5,000평</b></span>
              </li>
              <li className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                <span>넓은 주차시설 <b>150대 무료</b></span>
              </li>
              <li className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                <span><b>단체 바베큐장</b> 대여</span>
              </li>
              <li className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                <span>기업, 교회, 유소년 축구대회 유치</span>
              </li>
            </ul>
          </div>

          {/* 2시간 기준 요금표 */}
          <div className="space-y-1">
            <div className="text-[7.5px] sm:text-[9px] font-bold text-slate-900">
              이용료 안내 <span className="text-slate-500 font-normal">(2시간 기준)</span>
            </div>
            <table className="w-full text-center border-collapse border border-slate-300 text-[6.5px] sm:text-[8px]">
              <thead>
                <tr className="bg-[#1a3a6c] text-white">
                  <th className="p-0.5 border border-slate-300">구장</th>
                  <th className="p-0.5 border border-slate-300">시간</th>
                  <th className="p-0.5 border border-slate-300">이용료</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 font-bold bg-slate-50">축구장</td>
                  <td className="border border-slate-300 p-0.5">축구장대여 (2시간)</td>
                  <td className="border border-slate-300 p-0.5 font-bold text-blue-700">240,000</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 font-bold bg-slate-50">실내구장</td>
                  <td className="border border-slate-300 p-0.5">실내구장대여 (2시간)</td>
                  <td className="border border-slate-300 p-0.5 font-bold">100,000</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 font-bold bg-slate-50">풋살장</td>
                  <td className="border border-slate-300 p-0.5">풋살장대여 (2시간)</td>
                  <td className="border border-slate-300 p-0.5 font-bold">120,000</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 font-bold bg-slate-50">족구장</td>
                  <td className="border border-slate-300 p-0.5">족구장대여 (2시간)</td>
                  <td className="border border-slate-300 p-0.5 font-bold">120,000</td>
                </tr>
              </tbody>
            </table>
            <div className="text-[6px] sm:text-[7.5px] text-slate-500 text-right">*풋살화 유상 대여 가능</div>
          </div>
        </div>

        {/* Inner Panel 2: 행사 & 대회 이용안내 */}
        <div className="space-y-2 px-1 sm:px-2 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="pb-1 border-b-2 border-[#1a3a6c]">
              <h4 className="font-extrabold text-[#1a3a6c] tracking-tight">행사 & 대회 이용안내</h4>
            </div>

            <div className="p-1.5 rounded bg-blue-50/80 border border-blue-200 text-center space-y-0.5">
              <div className="text-[#1a3a6c] font-black text-[8px] sm:text-[10px]">
                천막, 테이블, 의자 대여 가능
              </div>
              <div className="text-blue-700 font-black text-[8px] sm:text-[10px]">
                음향장비와 무선마이크 대여 가능
              </div>
              <p className="text-[7px] sm:text-[8px] text-slate-600">
                착한 가격으로 원스톱 렌탈해 드립니다.
              </p>
            </div>
          </div>

          {/* 행사 사진 4종 */}
          <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
            <div className="aspect-[4/3] rounded overflow-hidden border border-slate-300">
              <img src={progSportsDayImg} alt="체육대회 운영" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] rounded overflow-hidden border border-slate-300">
              <img src={progTournamentImg} alt="대회 진행" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] rounded overflow-hidden border border-slate-300">
              <img src={progWorkshopImg} alt="포토존" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] rounded overflow-hidden border border-slate-300">
              <img src={progBbqPartyImg} alt="명랑운동회" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="aspect-[16/7] rounded overflow-hidden border border-slate-300">
            <img src={facFutsalImg} alt="파크 야외 드론" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Inner Panel 3: 이용시설 8종 */}
        <div className="space-y-2 pl-1 sm:pl-2">
          <div className="pb-1 border-b-2 border-[#1a3a6c]">
            <h4 className="font-extrabold text-[#1a3a6c] tracking-tight">이용시설</h4>
          </div>

          <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
            <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src={facSoccerImg} alt="축구장" className="w-full h-full object-cover" />
              </div>
              <div className="text-center font-bold text-[7.5px] sm:text-[9.5px] py-0.5 text-slate-800">축구장</div>
            </div>

            <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src={facFutsalImg} alt="풋살장" className="w-full h-full object-cover" />
              </div>
              <div className="text-center font-bold text-[7.5px] sm:text-[9.5px] py-0.5 text-slate-800">풋살장</div>
            </div>

            <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src={facIndoorImg} alt="실내풋살장" className="w-full h-full object-cover" />
              </div>
              <div className="text-center font-bold text-[7.5px] sm:text-[9.5px] py-0.5 text-slate-800">실내풋살장</div>
            </div>

            <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src={facJokguImg} alt="족구장" className="w-full h-full object-cover" />
              </div>
              <div className="text-center font-bold text-[7.5px] sm:text-[9.5px] py-0.5 text-slate-800">족구장</div>
            </div>

            <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src={facBbqImg} alt="단체바베큐장" className="w-full h-full object-cover" />
              </div>
              <div className="text-center font-bold text-[7.5px] sm:text-[9.5px] py-0.5 text-slate-800">단체바베큐장</div>
            </div>

            <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src={facSeminarImg} alt="휘트니스센터" className="w-full h-full object-cover" />
              </div>
              <div className="text-center font-bold text-[7.5px] sm:text-[9.5px] py-0.5 text-slate-800">휘트니스센터</div>
            </div>

            <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src={facIndoorImg} alt="숙소" className="w-full h-full object-cover" />
              </div>
              <div className="text-center font-bold text-[7.5px] sm:text-[9.5px] py-0.5 text-slate-800">숙소</div>
            </div>

            <div className="rounded overflow-hidden bg-white border border-slate-200 p-0.5">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src={facSeminarImg} alt="카페 및 매점" className="w-full h-full object-cover" />
              </div>
              <div className="text-center font-bold text-[7.5px] sm:text-[9.5px] py-0.5 text-slate-800 truncate">카페 및 매점</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
