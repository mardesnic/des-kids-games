import { describe, expect, it } from 'vitest';

import { GAMES, gameUrl, iconUrl, readyGames } from './games';

describe('games', () => {
  it('each have their own slug', () => {
    const slugs = GAMES.map((g) => g.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z]+(-[a-z]+)*$/);
  });

  it('have a name and a short line in both languages', () => {
    for (const g of GAMES) {
      for (const text of [g.name.en, g.name.hr, g.about.en, g.about.hr]) {
        expect(text.trim()).not.toBe('');
      }
      // Short enough to fit a card on a phone.
      expect(g.about.en.length).toBeLessThanOrEqual(50);
      expect(g.about.hr.length).toBeLessThanOrEqual(50);
    }
  });

  it('have a colour', () => {
    for (const g of GAMES) expect(g.colour).toMatch(/^#[0-9a-f]{6}$/);
  });

  it('show only the ready ones, in order', () => {
    const ready = readyGames();
    expect(ready.every((g) => g.ready)).toBe(true);
    expect(ready.map((g) => g.slug)).toEqual(
      GAMES.filter((g) => g.ready).map((g) => g.slug)
    );
  });

  it('link to the game and its icon', () => {
    const g = GAMES[0];
    expect(gameUrl(g)).toMatch(new RegExp(`/des-${g.slug}/$`));
    expect(iconUrl(g)).toMatch(new RegExp(`/des-${g.slug}/favicon\\.svg$`));
  });
});
