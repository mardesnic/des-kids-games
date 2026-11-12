import { gameUrl, iconUrl, readyGames } from './lib/games';
import {
  LANG_NAMES,
  LANGS,
  STRINGS,
  detectLang,
  type Language,
} from './lib/i18n';
import { useStoredState } from './lib/use-stored-state';

type Settings = { language: Language };

export default function App() {
  const [settings, setSettings] = useStoredState<Settings>('des-kids-games', {
    language: 'auto',
  });
  const lang = settings.language === 'auto' ? detectLang() : settings.language;
  const t = STRINGS[lang];
  const languages: Language[] = ['auto', ...LANGS];

  return (
    <div className='app' lang={lang}>
      <header>
        <h1>{t.title}</h1>
      </header>

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

      <footer>
        <span className='muted'>{t.language}</span>
        <div className='segmented'>
          {languages.map((l) => (
            <button
              key={l}
              aria-pressed={settings.language === l}
              onClick={() => setSettings({ language: l })}
            >
              {l === 'auto' ? t.automatic : LANG_NAMES[l]}
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
}
