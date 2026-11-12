# Games

All my free games for young kids on one page. Each card opens a game: spelling, shapes, puzzles, numbers and music. Every game works offline, with no timer, no way to lose and no ads.

## Demo

Check out the live demo at: https://mardesnic.github.io/des-games/

On your phone, open it and choose **Add to Home Screen** (Safari) or **Install app** (Chrome). Then one icon on the home screen opens every game: a game opened from a card stays in the same window, and Back comes back to the list.

## Features

- A big card for each game, with its icon, name and one short line
- Only finished games are shown
- A game opens in the same window, and Back comes back to the list
- Each game keeps working offline once it has been opened
- In English and Croatian, following the phone's language unless you pick one
- Light and dark mode
- No ads, accounts or tracking

## Development

```bash
npm install
npm run dev        # local dev server; the cards link to the live games
npm test           # game list and translation tests
npm run build      # production build in dist/
```

`npm run deploy` builds the page and publishes it to GitHub Pages.

To add a game, add it to `src/lib/games.ts`, or set `ready: true` on one that is already there.
