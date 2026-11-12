import { useEffect, useState } from 'react';

import { gameUrl, iconUrl, readyGames } from './lib/games';
import {
  LANG_NAMES,
  LANGS,
  STRINGS,
  detectLang,
  type Language,
  type Strings,
} from './lib/i18n';
import { popMenu, pushMenu, useBackButton } from './lib/use-back-button';
import { useLanguage, useSound } from './lib/use-shared-settings';

type View = 'list' | 'settings';

export default function App() {
  const [language, setLanguage] = useLanguage();
  const [sound, setSound] = useSound();
  const lang = language === 'auto' ? detectLang() : language;
  const t = STRINGS[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.title;
  }, [lang, t]);

  const [view, setViewState] = useState<View>('list');
  // Settings opens over the list, so the phone's Back button closes it.
  const setView = (next: View) => {
    if (next === 'list') popMenu();
    else pushMenu();
    setViewState(next);
  };
  useBackButton(() => setViewState('list'));

  return (
    <div className='app'>
      <header className='header'>
        <h1>{t.title}</h1>
        <button
          className='button'
          onClick={() => setView(view === 'list' ? 'settings' : 'list')}
        >
          {view === 'list' ? t.settings : t.done}
        </button>
      </header>

      {view === 'list' ? (
        <main className='games'>
          {readyGames().map((g) => (
            <a
              key={g.slug}
              className='game'
              href={gameUrl(g)}
              style={{ '--game': g.colour } as React.CSSProperties}
            >
              <img src={iconUrl(g)} alt='' width={72} height={72} />
              <span className='game__name'>{g.name[lang]}</span>
              <span className='game__about'>{g.about[lang]}</span>
            </a>
          ))}
        </main>
      ) : (
        <SettingsView
          language={language}
          setLanguage={setLanguage}
          sound={sound}
          setSound={setSound}
          t={t}
        />
      )}
    </div>
  );
}

function SettingsView({
  language,
  setLanguage,
  sound,
  setSound,
  t,
}: {
  language: Language;
  setLanguage: (l: Language) => void;
  sound: boolean;
  setSound: (on: boolean) => void;
  t: Strings;
}) {
  const languages: Language[] = ['auto', ...LANGS];
  return (
    <main className='settings'>
      <section className='card'>
        <h2>{t.language}</h2>
        <div className='segmented'>
          {languages.map((l) => (
            <button
              key={l}
              aria-pressed={language === l}
              onClick={() => setLanguage(l)}
            >
              {l === 'auto' ? t.automatic : LANG_NAMES[l]}
            </button>
          ))}
        </div>
      </section>

      <section className='card'>
        <h2>{t.sound}</h2>
        <div className='segmented'>
          {[true, false].map((on) => (
            <button
              key={String(on)}
              aria-pressed={sound === on}
              onClick={() => setSound(on)}
            >
              {on ? t.on : t.off}
            </button>
          ))}
        </div>
      </section>

      <section className='card'>
        <h2>{t.install}</h2>
        <p>{t.installAndroid}</p>
        <p>{t.installIos}</p>
      </section>

      <footer className='footer'>
        <a href='https://github.com/mardesnic/des-kids-games'>{t.source}</a>
      </footer>
    </main>
  );
}
