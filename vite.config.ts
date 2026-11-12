import { execSync } from 'node:child_process';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
// The version shown in Settings: the date and short hash of the last
// commit, so every deploy gets a new one without bumping anything.
const git = (args: string) => {
  try {
    return execSync(`git ${args}`, { encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
};
const version =
  [git('log -1 --format=%cs'), git('rev-parse --short HEAD')]
    .filter(Boolean)
    .join(' · ') || 'dev';

export default defineConfig({
  define: { __VERSION__: JSON.stringify(version) },
  base: '/des-kids-games/',
  plugins: [
    react(),
    // Installable from the browser menu, and works offline once loaded.
    VitePWA({
      registerType: 'autoUpdate',
      pwaAssets: { config: true },
      manifest: {
        // A fixed id of its own, so a phone never mixes it up with an earlier
        // install or with the games on this site.
        id: 'des-kids-games',
        name: 'Games',
        short_name: 'Games',
        description: 'Free games for kids',
        theme_color: '#1971c2',
        background_color: '#f4f5f7',
        display: 'standalone',
        start_url: '/des-kids-games/',
        // The whole site, not just this page: a game opened from a card stays
        // in this app's window (no address bar), and Back comes back here.
        // The service worker below still only looks after /des-kids-games/, so it
        // never gets in the way of a game's own one.
        scope: '/',
      },
      workbox: {
        // Keep the games' icons, so the cards look right offline too. Online,
        // each icon is checked with its game first (a quick "not changed"
        // most times), so a game's new icon shows on the next open instead
        // of after one more; the kept copy is used only offline.
        runtimeCaching: [
          {
            urlPattern: /\/des-[a-z-]+\/favicon\.svg$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'game-icons',
              networkTimeoutSeconds: 3,
              fetchOptions: { cache: 'no-cache' },
            },
          },
        ],
      },
    }),
  ],
});
