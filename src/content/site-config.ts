import type { Lang, LocaleDefinition, PageKey } from './types';

export const siteConfig = {
  name: 'OSH',
  productName: 'OSH Floor',
  url: 'https://oshhome.com',
  email: 'shmatko1095@gmail.com',
  telegramUrl: 'https://t.me/shmatko1095'
} as const;

export const locales = {
  uk: { htmlLang: 'uk', label: 'UA', prefix: '' },
  en: { htmlLang: 'en', label: 'EN', prefix: '/en' }
} satisfies Record<Lang, LocaleDefinition>;

const pageSegments: Record<PageKey, string> = {
  home: '',
  compatibility: 'compatibility',
  docs: 'docs',
  support: 'support'
};

export function routePath(lang: Lang, page: PageKey): string {
  const prefix = locales[lang].prefix;
  const segment = pageSegments[page];
  return `${prefix}${segment ? `/${segment}` : ''}/`;
}

export function alternateLang(lang: Lang): Lang {
  return lang === 'uk' ? 'en' : 'uk';
}
