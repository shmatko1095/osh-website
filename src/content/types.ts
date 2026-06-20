export const LANGS = ['uk', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const PAGE_KEYS = ['home', 'compatibility', 'docs', 'support', 'contact'] as const;
export type PageKey = (typeof PAGE_KEYS)[number];

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
  'PH-11'
] as const;

export type MediaSlotId = (typeof MEDIA_SLOT_IDS)[number];
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
  label: string;
  prefix: '' | '/en';
}

export interface PageSeo {
  title: string;
  description: string;
}

export interface NavItem {
  page: PageKey;
  label: string;
}

export interface HeadingContent {
  eyebrow: string;
  title: string;
  lead: string;
  leadItems?: Array<{
    label: string;
    text: string;
  }>;
}

export interface MediaCopy {
  id: MediaSlotId;
  title: string;
  description: string;
  alt: string;
  aspect: MediaAspect;
  fit?: 'cover' | 'contain';
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

export interface CertificationFact {
  id: 'lowVoltage' | 'emc' | 'radio';
  status: 'preparing' | 'confirmed';
}

export interface SensorCompatibilityFact {
  model: string;
  status: 'supported' | 'testing';
}

export interface ProductFacts {
  starterKitPriceUah: number;
  maxCurrentAmp: number;
  warrantyMonths: number;
  certifications: CertificationFact[];
  supportedSensors: SensorCompatibilityFact[];
  isDraft: boolean;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  highlights: string[];
  media: MediaCopy;
}

export interface CapabilityItem {
  title: string;
  text: string;
  media: MediaCopy;
}

export interface HomeContent {
  hero: HeroContent;
  benefits: HeadingContent & { items: FeatureItem[] };
  differentiator: HeadingContent & { points: string[]; media: MediaCopy };
  capabilities: HeadingContent & { items: CapabilityItem[] };
  setup: HeadingContent & { steps: Array<{ title: string; text: string }> ; media: MediaCopy };
  kit: HeadingContent & {
    itemsTitle: string;
    items: string[];
    priceLabel: string;
    currentLabel: string;
    warrantyLabel: string;
    draftNote: string;
    media: MediaCopy;
  };
  installation: HeadingContent & { points: FeatureItem[]; media: MediaCopy };
  trust: HeadingContent & {
    localTitle: string;
    onlineTitle: string;
    local: string[];
    online: string[];
    localMedia: MediaCopy;
  };
  faq: HeadingContent & { items: FaqItem[] };
  finalCta: { title: string; text: string; docs: string; contact: string };
}

export interface CompatibilityContent extends HeadingContent {
  frameTitle: string;
  frameText: string;
  sensorTitle: string;
  sensorText: string;
  modelLabel: string;
  statusLabel: string;
  statuses: Record<SensorCompatibilityFact['status'], string>;
  policyTitle: string;
  policyItems: string[];
  contactCta: string;
}

export interface DocsContent extends HeadingContent {
  workflowTitle: string;
  workflowSteps: string[];
  modesTitle: string;
  modes: Array<{ title: string; text: string }>;
  boundariesTitle: string;
  localTitle: string;
  onlineTitle: string;
  local: string[];
  online: string[];
  downloadsTitle: string;
  downloadsText: string;
}

export interface SupportContent extends HeadingContent {
  warrantyTitle: string;
  warrantyText: string;
  cloudTitle: string;
  cloudText: string;
  channelsTitle: string;
  emailLabel: string;
  telegramLabel: string;
  faqTitle: string;
  faq: FaqItem[];
}

export interface ContactContent extends HeadingContent {
  emailTitle: string;
  emailText: string;
  telegramTitle: string;
  telegramText: string;
  audiencesTitle: string;
  audiences: Array<{ title: string; text: string }>;
}

export interface FooterContent {
  text: string;
  navigationLabel: string;
  contactLabel: string;
  rights: string;
}

export interface SiteContent {
  seo: Record<PageKey, PageSeo>;
  navigationLabel: string;
  languageLabel: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
  nav: NavItem[];
  home: HomeContent;
  compatibility: CompatibilityContent;
  docs: DocsContent;
  support: SupportContent;
  contact: ContactContent;
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

export interface PlaceholderMediaSource {
  kind: 'placeholder';
  tone: 'light' | 'dark' | 'warm';
}

export type MediaSource = ImageMediaSource | VideoMediaSource | PlaceholderMediaSource;
