import type { MediaSlotId, MediaSource } from './types';
import ph01Hero from '@/assets/site/ph-01-hero-v1.png';

export const siteAssets: Record<MediaSlotId, MediaSource> = {
  'PH-01': { kind: 'image', src: ph01Hero },
  'PH-03': { kind: 'placeholder', tone: 'dark' },
  'PH-04': { kind: 'placeholder', tone: 'dark' },
  'PH-05': { kind: 'placeholder', tone: 'light' },
  'PH-06': { kind: 'placeholder', tone: 'light' },
  'PH-07': { kind: 'placeholder', tone: 'dark' },
  'PH-08': { kind: 'placeholder', tone: 'warm' },
  'PH-09': { kind: 'placeholder', tone: 'dark' },
  'PH-11': { kind: 'placeholder', tone: 'light' }
};
