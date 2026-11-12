export const LANGS = ['en', 'hr'] as const;
export type Lang = (typeof LANGS)[number];
export type Language = 'auto' | Lang;

// Each language's name in that language, for the picker.
export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  hr: 'Hrvatski',
};

export function detectLang(): Lang {
  const preferred = navigator.languages ?? [navigator.language];
  return preferred.some((l) => l.toLowerCase().startsWith('hr')) ? 'hr' : 'en';
}

const en = {
  title: "Kids' games",
  intro: "They're free, work offline and have no ads.",
  language: 'Language',
  automatic: 'Automatic',
};

export type Strings = typeof en;

const hr: Strings = {
  title: 'Dječje igre',
  intro: 'Besplatne su, rade i bez interneta i nemaju reklama.',
  language: 'Jezik',
  automatic: 'Automatski',
};

export const STRINGS: Record<Lang, Strings> = { en, hr };
