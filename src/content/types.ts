export const LANGS = ['uk', 'en'] as const;

export type Lang = (typeof LANGS)[number];

export const MEDIA_SLOT_IDS = [
  'PH-01',
  'PH-02',
  'PH-03',
  'PH-04',
  'PH-05',
  'PH-06',
  'PH-07',
  'PH-08',
  'PH-09',
  'PH-10',
  'PH-11'
] as const;

export type MediaSlotId = (typeof MEDIA_SLOT_IDS)[number];
export type SiteAssetId = 'LOGO-01' | MediaSlotId;
export type MediaAspect = 'video' | 'square' | 'portrait' | 'wide';

export type IconName =
  | 'activity'
  | 'check'
  | 'cloudOff'
  | 'fileText'
  | 'gauge'
  | 'home'
  | 'layers'
  | 'package'
  | 'radio'
  | 'shield'
  | 'smartphone'
  | 'thermometer'
  | 'wifiOff'
  | 'wrench'
  | 'zap';

export interface LocaleDefinition {
  htmlLang: string;
  path: string;
  label: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface HeadingContent {
  eyebrow: string;
  title: string;
  lead: string;
}

export interface MediaCopy {
  id: MediaSlotId;
  title: string;
  description: string;
  alt: string;
  aspect: MediaAspect;
}

export interface FeatureItem {
  icon: IconName;
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HeaderContent {
  navLabel: string;
  languageLabel: string;
  logoAlt: string;
  nav: NavItem[];
}

export interface HeroContent {
  eyebrow: string;
  status: string;
  title: string;
  lead: string;
  cta: string;
  facts: Array<{ label: string; value: string }>;
  media: MediaCopy;
}

export interface ScenarioContent extends HeadingContent {
  points: FeatureItem[];
  media: MediaCopy;
}

export interface SolutionContent extends HeadingContent {
  steps: Array<{ title: string; text: string }>;
  media: MediaCopy;
}

export interface ProductContent extends HeadingContent {
  status: string;
  kitTitle: string;
  kit: string[];
  features: FeatureItem[];
  kitMedia: MediaCopy;
  closeupMedia: MediaCopy;
}

export interface AppContent extends HeadingContent {
  cards: MediaCopy[];
}

export interface OfflineContent extends HeadingContent {
  localTitle: string;
  onlineTitle: string;
  local: string[];
  online: string[];
  media: MediaCopy;
}

export interface CompatibilityContent extends HeadingContent {
  levelsTitle: string;
  levels: string[];
  note: string;
}

export interface TrustContent extends HeadingContent {
  features: FeatureItem[];
  testingMedia: MediaCopy;
  installationMedia: MediaCopy;
}

export interface FaqContent extends HeadingContent {
  items: FaqItem[];
}

export interface FooterContent {
  logoAlt: string;
  text: string;
  marketplaceId: 'PH-12';
  marketplace: string;
}

export interface SiteContent {
  seo: {
    title: string;
    description: string;
  };
  header: HeaderContent;
  hero: HeroContent;
  scenario: ScenarioContent;
  solution: SolutionContent;
  product: ProductContent;
  app: AppContent;
  offline: OfflineContent;
  compatibility: CompatibilityContent;
  trust: TrustContent;
  faq: FaqContent;
  footer: FooterContent;
}

export interface ImageMediaSource {
  kind: 'image';
  src: ImageMetadata;
}

export interface VideoMediaSource {
  kind: 'video';
  src: string;
  mimeType?: string;
  poster?: ImageMetadata;
}

export type MediaSource = ImageMediaSource | VideoMediaSource;
