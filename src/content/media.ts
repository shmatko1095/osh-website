import type { MediaSource, SiteAssetId } from './types';
import ph01Hero from '@/assets/site/ph-01-hero-v1.png';

export const siteAssets: Partial<Record<SiteAssetId, MediaSource>> = {
  'PH-01': {
    kind: 'image',
    src: ph01Hero
  }
};
