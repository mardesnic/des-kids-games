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
  sound: 'Sound and vibration',
  on: 'On',
  off: 'Off',
  install: 'Install on your phone',
  installAndroid:
    'Android (Chrome): open the ⋮ menu and tap Install app or Add to Home screen.',
  installIos: 'iPhone or iPad (Safari): tap Share, then Add to Home Screen.',
  source: 'Source code',
  version: 'Version',
};

export type Strings = typeof en;

const hr: Strings = {
  title: 'Igre',
  settings: 'Postavke',
  done: 'Gotovo',
  language: 'Jezik',
  automatic: 'Automatski',
  sound: 'Zvuk i vibracija',
  on: 'Uključeno',
  off: 'Isključeno',
  install: 'Instaliraj na mobitel',
  installAndroid:
    'Android (Chrome): otvori izbornik ⋮ i dodirni Instaliraj aplikaciju ili Dodaj na početni zaslon.',
  installIos:
    'iPhone ili iPad (Safari): dodirni Dijeli, pa Dodaj na početni zaslon.',
  source: 'Izvorni kod',
  version: 'Verzija',
};

export const STRINGS: Record<Lang, Strings> = { en, hr };
