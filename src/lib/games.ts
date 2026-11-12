import type { Lang } from './i18n';

export type Game = {
  // The repo is des-<slug>, live at /des-<slug>/ on the same site.
  slug: string;
  name: Record<Lang, string>;
  about: Record<Lang, string>;
  // The game's theme colour, from its vite.config.ts.
  colour: string;
  // Only ready games get a card. Set it to true when a game is done.
  ready: boolean;
};

// In the order the cards are shown: the easiest to pick up first.
export const GAMES: Game[] = [
  {
    slug: 'words',
    name: { en: 'Words', hr: 'Riječi' },
    about: {
      en: 'Spell the word for the picture.',
      hr: 'Složi riječ za sliku.',
    },
    colour: '#6b4fd8',
    ready: true,
  },
  {
    slug: 'shapes',
    name: { en: 'Shapes', hr: 'Oblici' },
    about: {
      en: 'Fit the pieces into the outline.',
      hr: 'Složi dijelove u obris.',
    },
    colour: '#2b8a3e',
    ready: true,
  },
  {
    slug: 'pairs',
    name: { en: 'Pairs', hr: 'Parovi' },
    about: {
      en: 'Join the dots of the same colour.',
      hr: 'Spoji točkice iste boje.',
    },
    colour: '#8a4fd6',
    ready: true,
  },
  {
    slug: 'robot',
    name: { en: 'Robot', hr: 'Robot' },
    about: {
      en: 'Guide the robot to its battery.',
      hr: 'Dovedi robota do baterije.',
    },
    colour: '#f08a24',
    ready: true,
  },
  {
    slug: 'blocks',
    name: { en: 'Blocks', hr: 'Blokovi' },
    about: {
      en: 'Slide the blocks to free the star.',
      hr: 'Pomakni blokove i oslobodi zvijezdu.',
    },
    colour: '#0f8a7a',
    ready: true,
  },
  {
    slug: 'elementals',
    name: { en: 'Elementals', hr: 'Elementals' },
    about: {
      en: 'Help fire, water, earth and air get home.',
      hr: 'Pomozi vatri, vodi, zemlji i zraku do kuće.',
    },
    colour: '#6741d9',
    ready: false,
  },
  {
    slug: 'echo',
    name: { en: 'Echo', hr: 'Jeka' },
    about: {
      en: 'A music memory game for two.',
      hr: 'Glazbena igra pamćenja za dvoje.',
    },
    colour: '#7c4dcc',
    ready: true,
  },
  {
    slug: 'crossmath',
    name: { en: 'Crossmath', hr: 'Računska križaljka' },
    about: {
      en: 'Fill in the numbers so every sum is right.',
      hr: 'Upiši brojeve da svaki račun bude točan.',
    },
    colour: '#d6336c',
    ready: true,
  },
  {
    slug: 'pixeldoku',
    name: { en: 'Pixeldoku', hr: 'Pikseldoku' },
    about: {
      en: 'Colour the squares to find the picture.',
      hr: 'Oboji kvadratiće i otkrij sliku.',
    },
    colour: '#c2255c',
    ready: true,
  },
  {
    slug: 'sudoku',
    name: { en: 'Sudoku', hr: 'Sudoku' },
    about: {
      en: 'Each number once in every row and column.',
      hr: 'Svaki broj jednom u svakom retku i stupcu.',
    },
    colour: '#3056d3',
    ready: true,
  },
];

export const readyGames = (games: Game[] = GAMES) =>
  games.filter((g) => g.ready);

// Every game lives on the same site as this page. While developing, the
// links and icons point at the live site instead.
const SITE = import.meta.env.DEV ? 'https://mardesnic.github.io' : '';

export const gameUrl = (g: Game) => `${SITE}/des-${g.slug}/`;
export const iconUrl = (g: Game) => `${SITE}/des-${g.slug}/favicon.svg`;
