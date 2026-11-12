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
  title: 'Games',
  settings: 'Settings',
  done: 'Done',
  language: 'Language',
  automatic: 'Automatic',
  install: 'Install on your phone',
  installAndroid:
    'Android (Chrome): open the ⋮ menu and tap Install app or Add to Home screen.',
  installIos: 'iPhone or iPad (Safari): tap Share, then Add to Home Screen.',
  installNote: 'Then every game opens from one icon.',
  source: 'Source code',
};

export type Strings = typeof en;

const hr: Strings = {
  title: 'Igre',
  settings: 'Postavke',
  done: 'Gotovo',
  language: 'Jezik',
  automatic: 'Automatski',
  install: 'Instaliraj na mobitel',
  installAndroid:
    'Android (Chrome): otvori izbornik ⋮ i dodirni Instaliraj aplikaciju ili Dodaj na početni zaslon.',
  installIos:
    'iPhone ili iPad (Safari): dodirni Dijeli, pa Dodaj na početni zaslon.',
  installNote: 'Tada se sve igre otvaraju s jedne ikone.',
  source: 'Izvorni kod',
};

export const STRINGS: Record<Lang, Strings> = { en, hr };
