import { en } from './en';
import { uk } from './uk';
import type { Lang, LocaleDefinition, SiteContent } from './types';

export const locales = {
  uk: { htmlLang: 'uk', path: '/', label: 'UA' },
  en: { htmlLang: 'en', path: '/en/', label: 'EN' }
} satisfies Record<Lang, LocaleDefinition>;

export const localeOptions = Object.entries(locales).map(([lang, locale]) => ({
  lang: lang as Lang,
  ...locale
}));

export const site = { uk, en } satisfies Record<Lang, SiteContent>;

export type * from './types';
