import { FacilityItem, ProgramModule, TimelineItem, EventCase, GalleryPhoto } from '../types';

// Updated Real Authentic Images
import facSoccerImg from '../assets/images/regenerated_image_1789561718072.jpg';
import facFutsalImg from '../assets/images/regenerated_image_1789561719780.jpg';
import facJokguImg from '../assets/images/regenerated_image_1789561721666.jpg';
import facIndoorImg from '../assets/images/regenerated_image_1789561724068.jpg';
import facSeminarImg from '../assets/images/regenerated_image_1789561725856.jpg';
import facBbqImg from '../assets/images/regenerated_image_1789561727971.jpg';

import progSportsDayImg from '../assets/images/regenerated_image_1789561732957.jpg';
import progTournamentImg from '../assets/images/regenerated_image_1789561735122.jpg';
import progWorkshopImg from '../assets/images/regenerated_image_1789561739096.jpg';
import progBbqPartyImg from '../assets/images/regenerated_image_1789561740687.jpg';

import cbtpBannerImg from '../assets/images/cbtp_banner_real_1789570004277.jpg';
import samsungLeaderBannerImg from '../assets/images/samsung_leader_real_1789570025798.jpg';
import tossCorpBannerImg from '../assets/images/toss_corp_real_1789570047364.jpg';
import jangwonSportsBannerImg from '../assets/images/jangwon_sports_real_1789570068220.jpg';

import userUploadedSportsImg from '../assets/images/regenerated_image_1789623945147.png';
import cbtpEventPhotoImg from '../assets/images/cbtp_event_photo_1789571114489.jpg';
import samsungLeaderPhotoImg from '../assets/images/samsung_leader_photo_1789571132391.jpg';
import tossBbqPhotoImg from '../assets/images/toss_bbq_photo_1789571146419.jpg';

export const PHOTO_PRESETS = [
  { id: 'user_sports', label: '명랑운동회 대형 공 머리 위로 굴리기 (실제 행사)', src: userUploadedSportsImg },
  { id: 'cbtp_banner', label: '충북테크노파크 워크숍 기념 단체사진', src: cbtpBannerImg },
  { id: 'cbtp_workshop', label: '충북테크노파크 임직원 분임 워크숍 실사', src: cbtpEventPhotoImg },
  { id: 'samsung_leader', label: '삼성화재 보상콜 리더 워크숍 단체사진', src: samsungLeaderBannerImg },
  { id: 'samsung_seminar', label: '삼성화재 보상 리더십 조별 세미나 실사', src: samsungLeaderPhotoImg },
  { id: 'toss_bbq_toast', label: '토스중앙본부 단체 바비큐 삼겹살 만찬 & 건배', src: tossBbqPhotoImg },
  { id: 'toss_corp', label: '토스중앙본부 전사 워크숍 잔디구장 단체사진', src: tossCorpBannerImg },
  { id: 'jangwon_sports', label: '장원토건 25주년 한마음 체육대회 (450명)', src: jangwonSportsBannerImg },
  { id: 'fac_soccer', label: '천연·인조잔디 축구장 (105m×68m 정규)', src: facSoccerImg },
  { id: 'fac_futsal', label: '풋살장 A/B구장 체육경기', src: facFutsalImg },
  { id: 'fac_jokgu', label: '족구장 2면 네트 실사', src: facJokguImg },
  { id: 'fac_indoor', label: '전천후 실내 풋살장 & 골대', src: facIndoorImg },
  { id: 'fac_seminar', label: '가베슈 세미나실 (대형 스크린/빔프로젝터)', src: facSeminarImg },
  { id: 'fac_bbq', label: '단체 바비큐장 (250석)', src: facBbqImg },
  { id: 'prog_sports_day', label: '명랑운동회 단체 경기 & 놋다리밟기', src: progSportsDayImg },
  { id: 'prog_tournament', label: '사내 친선 축구·풋살 토너먼트 대표주자', src: progTournamentImg },
  { id: 'prog_recreation', label: '실내 세미나실 단체 레크리에이션 & 시상식', src: progWorkshopImg },
  { id: 'prog_bbq_party', label: '단체 바비큐 만찬 & 회식 파티', src: progBbqPartyImg },
];

export {
  cbtpBannerImg,
  samsungLeaderBannerImg,
  tossCorpBannerImg,
  jangwonSportsBannerImg,
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
  userUploadedSportsImg,
  cbtpEventPhotoImg,
  samsungLeaderPhotoImg,
  tossBbqPhotoImg,
};

export { default as scoreboardImg } from '../assets/images/regenerated_image_1789561729723.jpg';
export { default as spectatorBenchImg } from '../assets/images/regenerated_image_1789561731182.jpg';

export const DEFAULT_GRADIENT_IMAGE = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='750' viewBox='0 0 1200 750'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23132e22'/%3E%3Cstop offset='100%25' stop-color='%2324543d'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23bg)'/%3E%3Ccircle cx='600' cy='330' r='55' fill='%23ffffff' fill-opacity='0.12'/%3E%3Cpath d='M585 310 L615 310 L625 338 L600 356 L575 338 Z' fill='%2352b788' fill-opacity='0.9'/%3E%3Ctext x='600' y='430' font-family='sans-serif' font-weight='bold' font-size='28' fill='%23ffffff' text-anchor='middle'%3E청주풋볼파크 &amp; 가베슈%3C/text%3E%3Ctext x='600' y='470' font-family='sans-serif' font-size='17' fill='%23a7c957' text-anchor='middle'%3E기업 체육대회 · 워크숍 · 단합대회 복합 문화공간%3C/text%3E%3C/svg%3E";

export const HERO_IMAGE_DEFAULT = '/images/hero-aerial.jpg';
export const HERO_IMAGE_FALLBACK = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2qEydiCPuCBgoRZ0dNwC2uVkDFgF4i_BJANSctfrPRcjtPlgUQ1_jYekyVy2nS2UdlLUxnEYK7n5_mVNPWnZd60eR_ucHV7VvwuDxdKMTbLgu_Rpq8j-QuF7RhYhehA5Zh8-sdlP0pkcr-kzQshQ7el-g9WoXtDPSr3PIyr9kS0U0n7JQ24HAhaI56Aa0JHEAuiupTGmeKFbitNCkor_SVrgpAygDgDXc8KDWZIJb77QoAgpem5p7ieVZA13UrHC6bg';

export const PARK_METRICS = [
  {
    label: '기업 행사 수용',
    value: '최대 1,200',
    unit: '명',
    subtext: '최소 25명부터 대규모 전사 대회까지',
    icon: 'groups',
  },
  {
    label: '전용 무료 주차',
    value: '150',
    unit: '대',
    subtext: '대형 관광버스 동시 진입 및 무료 주차',
    icon: 'local_parking',
  },
  {
    label: '단체 바비큐장',
    value: '최대 250',
    unit: '석',
    subtext: '체육행사 후 바로 이어지는 만찬 시설',
    icon: 'outdoor_grill',
  },
  {
    label: '총 부지 면적',
    value: '약 5,000',
    unit: '평',
    subtext: '충북 최대 규모 복합 스포츠 파크',
    icon: 'aspect_ratio',
  },
];

export const CORPORATE_PROGRAMS = [
  {
    id: 'sports-day',
    title: '기업 체육대회',
    tag: '추천 100~1,200인',
    description: '정규 축구장과 풋살장을 활용한 명랑운동회, 리그전, 단체 줄다리기, 릴레이 계주 진행.',
    icon: 'sports_martial_arts',
  },
  {
    id: 'workshop',
    title: '기업 워크숍',
    tag: '추천 25~100인',
    description: '오전 세미나실 비전 선포 및 교육, 오후 체육을 결합한 몰입형 프로그램.',
    icon: 'co_present',
  },
  {
    id: 'unity',
    title: '임직원 단합대회',
    tag: '추천 30~150인',
    description: '부서 간 벽을 허무는 족구 토너먼트, 풋살 페스티벌 및 캐주얼 팀빌딩 게임 운영.',
    icon: 'handshake',
  },
  {
    id: 'bbq',
    title: '단체 식사와 바비큐',
    tag: '최대 250석',
    description: '가베슈 F&B 전담으로 고품질 삼겹/목살 바비큐, 출장 케이터링, 한식 뷔페 제공.',
    icon: 'outdoor_grill',
  },
  {
    id: 'institution',
    title: '학교·교회·기관',
    tag: '대형 단체 맞춤',
    description: '동문회, 청소년 수련회, 공공기관 친선대회, 종교단체 전교인 야외예배 및 운동회.',
    icon: 'church',
  },
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'soccer',
    name: '축구장',
    tag: '정규 구장',
    tagColor: 'bg-secondary-container text-on-secondary-container',
    description: '기업행사 70명부터 1,200명까지 대규모 수용이 가능한 최고급 정규 인조잔디 구장입니다. 유소년 9대9 축구의 성지이며 전광판, 팀 벤치, 응원석 캐노피까지 완비되어 각종 축구·풋살대회에 최적화되어 있습니다.',
    specs: [
      '대형 전자 전광판 · 팀 벤치 · 응원석 캐노피 완비',
      '유소년 9대9 정규 규격 구장 (축구·풋살대회 최적)',
      '기업행사 70명~최대 1,200명 대규모 수용 가능',
    ],
    rate: '축구장대여 240,000원 (2시간)',
    rateValue: 240000,
    image: facSoccerImg,
    fallbackImage: HERO_IMAGE_FALLBACK,
    basePax: 20,
  },
  {
    id: 'futsal',
    name: '풋살장',
    tag: '인기 시설',
    tagColor: 'bg-surface-container text-on-surface-variant',
    description: '최고급 인조잔디가 완비된 풋살 정식규격(20m×40m) 구장입니다. 기업 명랑운동회 및 유치원 운동회 등 성인 70명까지 단체 행사가 가능하며, 풋살과 족구 및 피구·배구 등 다양한 구기종목에 적합합니다.',
    specs: [
      '풋살 정식 규격(20m×40m) & 최고급 인조잔디',
      '기업 명랑운동회 및 단체 행사 (성인 70명 수용)',
      '풋살 · 족구 · 피구 · 배구 등 다목적 구기종목 지원',
    ],
    rate: '풋살장대여 120,000원 (2시간)',
    rateValue: 120000,
    image: facFutsalImg,
    fallbackImage: HERO_IMAGE_FALLBACK,
    basePax: 12,
  },
  {
    id: 'jokgu',
    name: '족구장',
    tag: '전용 구장',
    tagColor: 'bg-surface-container text-on-surface-variant',
    description: '풋살장 내 정밀 족구 라인을 마킹하여 쾌적한 경기가 가능합니다. 전용 족구대 2세트 완비로 2팀 동시 경기 및 사내 토너먼트가 가능하며, 공인 점수판과 경기용 족구공을 무료로 대여해 드립니다.',
    specs: [
      '족구대 2세트 완비 (2개 팀 동시 경기 및 토너먼트)',
      '풋살장 내 정식 규격 족구 라인 마킹 구장',
      '경기용 족구공 및 전용 점수판 무료 대여',
    ],
    rate: '족구장대여 120,000원 (2시간)',
    rateValue: 120000,
    image: facJokguImg,
    basePax: 12,
  },
  {
    id: 'indoor-futsal',
    name: '실내 풋살장',
    tag: '실내 구장',
    tagColor: 'bg-primary-fixed text-on-primary-fixed',
    description: '4대4 풋살 경기와 유소년 훈련 및 개인 레슨, 기업 명랑운동회까지 최대 50명 수용 가능한 실내 구장입니다. 락커룸과 편의 벤치·테이블이 완비되어 아이들 생일파티 대여로도 인기가 높으며, 냉난방기 사용 시 쾌적하게 이용하실 수 있습니다.',
    specs: [
      '4대4 풋살 경기 및 유소년 레슨 훈련 공간',
      '기업 명랑운동회 및 생일파티 (최대 50명 수용)',
      '락커룸 · 편의 벤치 · 테이블 완비 (냉난방기 사용 시 2만원)',
    ],
    rate: '실내구장대여 100,000원 (2시간)',
    rateValue: 100000,
    image: facIndoorImg,
    basePax: 12,
  },
  {
    id: 'seminar',
    name: '세미나실',
    tag: '최대 120석',
    tagColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    description: '최대 120석 규모로 기업 워크숍, 비즈니스 세미나, 단체 회의는 물론 다채로운 실내 레크리에이션까지 완벽 지원합니다. 고화질 빔프로젝터와 무선 마이크 시스템을 기본 지원하며, 행사의 흥을 돋우는 최신 노래방 기기도 필요 시 유상 대여하여 이용하실 수 있습니다.',
    specs: [
      '최대 120석 규모 (기업 워크숍 · 세미나 · 실내 레크리에이션)',
      '고화질 빔프로젝터 & 무선 마이크 음향 시스템 완비',
      '이용객 웰컴티 제공 · 최신 노래방 기기 유상 대여 가능',
    ],
    rate: '1인 10,000원 (최소 20인)',
    rateValue: 10000,
    image: facSeminarImg,
    basePax: 20,
  },
  {
    id: 'bbq',
    name: '단체 바비큐장',
    tag: '기본 240석 (최대 350석)',
    tagColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    description: '기본 240석의 쾌적한 전용 좌석이 완비되어 있으며, 대규모 단체 행사 시에는 맞춤형 천막과 테이블을 추가 구성하여 최대 350석까지 넉넉하게 수용 가능합니다. 체육대회와 워크숍 후 이동 없이 바로 이어지는 낭만적인 만찬 공간입니다.',
    specs: [
      '기본 240석 완비 · 천막 테이블 구성 시 최대 350석 확장',
      '숯그릴 제공',
      '가베슈 직영 국내산 삼겹살·목살 프리미엄 만찬 연계',
    ],
    rate: '1인 35,000원 (1인 기준)',
    rateValue: 35000,
    image: facBbqImg,
    basePax: 20,
  },
];

export const AMENITIES = [
  { icon: 'shower', name: '샤워실', desc: '온수 완비' },
  { icon: 'wc', name: '남녀 화장실', desc: '청결 관리' },
  { icon: 'directions_car', name: '대형 주차장', desc: '150대 무료', highlight: true },
  { icon: 'chair', name: '휴게 라운지', desc: '실내 쉼터' },
  { icon: 'storefront', name: '파크 매점', desc: '음료·간식' },
  { icon: 'stadium', name: '관중석', desc: '계단식 좌석' },
  { icon: 'event_seat', name: '팀 벤치', desc: '캐노피 완비' },
  { icon: 'volume_up', name: '음향 시설', desc: '무선 마이크' },
];

export const PROGRAM_MODULES: ProgramModule[] = [
  {
    step: '01',
    title: '체육대회',
    badge: '전사 단합 & 페스티벌 에너지',
    description: '파이팅 넘치는 개회식, 다이내믹 워밍업, 열정 가득한 단체 줄다리기, 에어봉 릴레이, 단체 줄넘기 등 임직원 모두가 함께 웃으며 몰입하는 명랑운동회!',
    image: progSportsDayImg,
  },
  {
    step: '02',
    title: '축구·풋살·족구 토너먼트',
    badge: '본격적인 스포츠 열기',
    description: '인원과 연령대에 맞춘 팀별 대항전. 조별 리그 후 본선 토너먼트 운영, 전문 심판진 및 경기 공식 기록 지원 가능.',
    image: progTournamentImg,
  },
  {
    step: '03',
    title: '팀빌딩 워크숍',
    badge: '소통과 전략적 협업',
    description: '세미나실에서의 비전 공유 및 팀별 토론 후, 실내외에서 진행되는 문제 해결형 미션 챌린지 프로그램 연계.',
    image: progWorkshopImg,
  },
  {
    step: '04',
    title: '단체 바비큐 & 파티',
    badge: '풍성한 식사와 마무리',
    description: '운동 후 감성 조명 아래 펼쳐지는 250석 단체 바비큐 파티. 시상식, 장기자랑, 건배사로 이어지는 화합의 시간.',
    image: progBbqPartyImg,
  },
];

export const SAMPLE_TIMELINE: TimelineItem[] = [
  {
    time: '09:30 - 10:00',
    title: '집결 및 오리엔테이션',
    description: '150대 전용 주차장 도착, 팀별 단체 조끼 배부, 개회 오리엔테이션 및 안전 수칙 안내',
  },
  {
    time: '10:00 - 12:00',
    title: '오전 체육대회',
    description: '전문 MC 진행 개회식, 파이팅 준비체조, 단체 줄다리기, 에어봉 릴레이, 전략 단체전',
  },
  {
    time: '12:00 - 13:30',
    title: '점심 식사 & 휴식',
    description: '가베슈 한식 뷔페 식사 및 세미나실 웰컴 커피 티타임, 자유 휴식',
  },
  {
    time: '13:30 - 16:00',
    title: '구기 토너먼트 & 릴레이',
    description: '축구/풋살/족구 리그전, 결승전 및 전사 단체 계주 릴레이, 공식 시상식',
  },
  {
    time: '16:00 - 18:30',
    title: '단체 바비큐 파티',
    description: '250석 단체 바비큐장에서 삼겹/목살 식사, 레크리에이션 경품 추첨 및 환송',
  },
];

export const EVENT_CASES: EventCase[] = [
  {
    id: 'case_cbtp',
    company: '충북테크노파크',
    category: '기관 워크숍 & 세미나',
    title: '비전 공유 워크숍 및 풋살 팀빌딩',
    description: '오전 가베슈 세미나실에서 성과 워크숍을 진행한 뒤, 오후 인조잔디 풋살장에서 부서 간 결속을 다지는 친선 풋살 경기와 웰컴 커피 타임을 가졌습니다.',
    pax: '120명',
    facilities: '세미나실 + 인조잔디 풋살장',
    image: cbtpBannerImg,
  },
  {
    id: 'case_samsung',
    company: '삼성화재 보상콜',
    category: '기업 리더십 워크숍',
    title: '보상콜 관리자 리더 역량 워크숍',
    description: '전국 보상콜 센터 관리자 및 파트 리더가 참석하여 전문 세미나 세션과 소통 라운드테이블을 가졌으며, 풋볼파크 라운지와 바비큐 시설을 연계해 화합의 시간을 진행했습니다.',
    pax: '80명',
    facilities: '가베슈 세미나실 + 바비큐장',
    image: samsungLeaderBannerImg,
  },
  {
    id: 'case_toss',
    company: '토스중앙본부',
    category: '스타트업 & 핀테크 워크숍',
    title: '전사 단합 워크숍 & 바비큐 페스티벌',
    description: '자유로운 분위기 속에서 본부 비전 발표 및 명랑 레크리에이션 미션을 수행하고, 저녁에는 250석 단체 바비큐장에서 고품질 생삼겹살 파티로 결속력을 다졌습니다.',
    pax: '230명',
    facilities: '축구장 + 단체 바비큐장',
    image: tossCorpBannerImg,
  },
  {
    id: 'case_jangwon',
    company: '장원토건 (창립 25주년)',
    category: '전사 한마음 체육대회',
    title: '창립 25주년 기념 한마음 체육대회',
    description: '약 5,000평 규모의 정규 축구장과 풋살 5면을 풀 패키지로 대관하여 450명 전 임직원이 참여하는 대규모 명랑운동회와 족구 토너먼트, 기념 시상식을 성황리에 마쳤습니다.',
    pax: '450명',
    facilities: '축구장 + 풋살장 + 단체 바비큐장',
    image: jangwonSportsBannerImg,
  },
];

// Reference photos strictly authentic & real
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: '1', title: '행사에서 가장 중요한 것은 바로 단체사진!!', category: 'group', image: cbtpBannerImg, ratio: 'aspect-[16/10]' },
  { id: '2', title: '부상 NO!! 1년만에 국민체조!!', category: 'sports', image: samsungLeaderBannerImg, ratio: 'aspect-[16/10]' },
  { id: '3', title: '몸따로 마음따로 공은 제마음대로~~~', category: 'sports', image: facFutsalImg, ratio: 'aspect-[16/10]' },
  { id: '4', title: '다 뒤짚어 버릴테다~~뒤짚자 뒤짚어', category: 'sports', image: jangwonSportsBannerImg, ratio: 'aspect-[16/10]' },
  { id: '5', title: '젊다젊어 이래서 운동해야하는겨~~', category: 'sports', image: progSportsDayImg, ratio: 'aspect-[16/10]' },
  { id: '6', title: '대표주자 선발, 아무나 다 빨리 나와~~!!', category: 'sports', image: progTournamentImg, ratio: 'aspect-[16/10]' },
  { id: '7', title: '설레는 경품행사 휴대폰은 나에게로~~', category: 'sports', image: cbtpEventPhotoImg, ratio: 'aspect-[16/10]' },
  { id: '8', title: '우리는 하나, 손잡고 손 머리 위로~~', category: 'sports', image: userUploadedSportsImg, ratio: 'aspect-[16/10]' },
  { id: '9', title: '분위기 좋고 음악좋고 고기 맛 쥑이네~', category: 'bbq', image: facBbqImg, ratio: 'aspect-[16/10]' },
  { id: '10', title: '우리의 건강과 회사을 위하여~~!!', category: 'bbq', image: tossBbqPhotoImg, ratio: 'aspect-[16/10]' },
  { id: '11', title: '머리머리~~아~~머리를 써야지~~~', category: 'sports', image: facJokguImg, ratio: 'aspect-[16/10]' },
  { id: '12', title: '골대는 나 스파이더맨이 지킨다!! 드루와~~', category: 'sports', image: facIndoorImg, ratio: 'aspect-[16/10]' },
];

export const BROCHURE_LEAFLETS = [
  {
    title: '청주풋볼파크 공식 리플렛 (외면)',
    image: 'images/leaflet-outer.jpg',
    desc: '편의시설 8종, 파크 전경 안내, 오시는 길 약도 및 대표 문의처',
    type: 'outer' as const,
  },
  {
    title: '청주풋볼파크 공식 리플렛 (내면)',
    image: 'images/leaflet-inner.jpg',
    desc: '5,000평 시설 소개, 2시간 기준 공식 요금표, 행사 지원 장비, 이용시설 8종 안내',
    type: 'inner' as const,
  },
];

export const BUSINESS_INFO = {
  cfp: {
    name: '청주풋볼파크 (종합 행사 총괄 및 체육시설 대관)',
    ceo: '배건율',
    bizNum: '641-10-01717',
    phone: '0507-1321-5362 / 010-7900-8219',
    telLink: 'tel:01079008219',
    email: 'cfpark2021@naver.com',
    emailLink: 'mailto:cfpark2021@naver.com',
    role: '정규 축구장, 풋살장, 족구장, 실내풋살장 대관 및 전문 MC, 행사 지원 스태프, 장비 렌탈 총괄',
    taxNote: '시설 대관 및 행사 운영 부문 세금계산서 독립 발행',
  },
  gabeshu: {
    name: '가베슈 (세미나실 및 단체 식음료 F&B 전문)',
    ceo: '조익렬',
    bizNum: '856-07-03296',
    phone: '010-4830-8500',
    telLink: 'tel:01048308500',
    email: 'jir5858@naver.com',
    emailLink: 'mailto:jir5858@naver.com',
    role: '세미나실 대관, 웰컴티, 단체 바비큐, 출장 케이터링, 한식 뷔페, 주류 및 음료 F&B',
    taxNote: '세미나실 및 식음료(F&B) 부문 세금계산서 별도 분리 발행',
  },
  links: {
    booking: 'https://naver.me/GbE5G855',
    blog: 'https://m.blog.naver.com/cfpark2021',
    address: '충북 청주시 청원구 내수읍 충청대로 733 청주풋볼파크',
    mapQuery: '청주풋볼파크',
  },
};
