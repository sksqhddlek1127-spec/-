export interface FacilityItem {
  id: string;
  name: string;
  tag: string;
  tagColor: string;
  description: string;
  specs: string[];
  rate: string;
  rateValue: number;
  image: string;
  fallbackImage?: string;
  basePax: number;
}

export interface ProgramModule {
  step: string;
  title: string;
  description: string;
  badge: string;
  image?: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
  tagColor?: string;
}

export interface EventCase {
  id?: string;
  company: string;
  category: string;
  title: string;
  description: string;
  pax: string;
  facilities: string;
  image?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'sports' | 'bbq' | 'group' | 'tournament';
  image: string;
  ratio?: string;
}

export interface CFPQuoteState {
  soccerField: boolean;
  soccerHours: number;
  futsalField: boolean;
  futsalHours: number;
  jokguField: boolean;
  jokguHours: number;
  indoorFutsal: boolean;
  indoorHours: number;
  nightLights: boolean;
  participants: number;
  mcSelected: boolean;
  mcHours: number;
  staffCount: number;
  basicEquipment: boolean;
  vestCount: number;
  audioTier: number; // 0, 300000, 500000
  tentCount: number;
  tableCount: number;
  stayCount: number;
}

export interface GabeshuQuoteState {
  seminarSelected: boolean;
  seminarPax: number;
  extraCoffee: number;
  bbqSelected: boolean;
  bbqPax: number;
  cateringSelected: boolean;
  cateringPax: number;
  buffetSelected: boolean;
  buffetPax: number;
  sandwichCount: number;
  ricecakeCount: number;
  fruitCupCount: number;
  sojuCount: number;
  beerCount: number;
  sodaCount: number;
  waterCount: number;
  driedSnackCount: number;
  chickenCount: number;
}

export interface InquiryFormData {
  company: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  pax: string;
  eventType: string;
  targetBusiness: 'both' | 'cfp' | 'gabeshu';
  facilities: string[];
  message: string;
}
