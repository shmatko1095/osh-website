import { en } from './en';
import { uk } from './uk';
import type { Lang, SiteContent } from './types';

export { alternateLang, locales, routePath, siteConfig } from './site-config';
export { productFacts } from './product-facts';
export { siteAssets } from './media';

export const site = { uk, en } satisfies Record<Lang, SiteContent>;

export type * from './types';
