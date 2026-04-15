<script>
  import { page } from '$app/stores';
  import { t, langPath, altLangPath } from '$lib/i18n.js';

  let { lang = 'af' } = $props();

  let tabs = $derived([
    {
      href: langPath('/', lang),
      label: t('nav.voorwoorde', lang),
      match: (p) => {
        const stripped = p === '/en' ? '/' : p.startsWith('/en/') ? p.slice(3) : p;
        return stripped === '/' || stripped.startsWith('/heil');
      }
    },
    {
      href: langPath('/prosa', lang),
      label: t('nav.prosa', lang),
      match: (p) => p.startsWith('/prosa') || p.startsWith('/en/prosa')
    },
    {
      href: langPath('/argief', lang),
      label: t('nav.argief', lang),
      match: (p) => p.startsWith('/argief') || p.startsWith('/en/argief')
    },
    {
      href: langPath('/kontak', lang),
      label: t('nav.kontak', lang),
      match: (p) => p.startsWith('/kontak') || p.startsWith('/en/kontak')
    },
    {
      href: langPath('/oor', lang),
      label: t('nav.oor', lang),
      match: (p) => p.startsWith('/oor') || p.startsWith('/en/oor')
    }
  ]);

  let afHref = $derived(altLangPath($page.url.pathname, 'af'));
  let enHref = $derived(altLangPath($page.url.pathname, 'en'));
</script>

<nav class="tabs" aria-label={t('nav.ariaLabel', lang)}>
  {#each tabs as tab}
    <a href={tab.href} class:active={tab.match($page.url.pathname)}>{tab.label}</a>
  {/each}

  <span class="lang-switch" role="group" aria-label={t('nav.langSwitch', lang)}>
    <a
      href={afHref}
      class="lang"
      class:active={lang === 'af'}
      hreflang="af"
      lang="af"
      aria-label="Afrikaans">AFR</a><a
      href={enHref}
      class="lang"
      class:active={lang === 'en'}
      hreflang="en"
      lang="en"
      aria-label="English">ENG</a>
  </span>
</nav>

<style>
  .tabs {
    max-width: var(--measure-wide);
    margin: 0 auto 2.2rem;
    padding: 0 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(1.2rem, 4vw, 2.6rem);
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.86rem;
    border-bottom: 1px solid var(--paper-edge);
    flex-wrap: wrap;
  }
  .tabs > a {
    padding: 0.7rem 0.15rem 0.85rem;
    color: var(--ink-soft);
    border: 0;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    transition: color 150ms ease, border-color 150ms ease;
  }
  .tabs > a:hover {
    color: var(--accent);
  }
  .tabs > a.active {
    color: var(--ink);
    border-bottom-color: var(--rule);
  }
  .lang-switch {
    margin-left: auto;
    display: inline-flex;
    align-items: stretch;
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    border: 1px solid var(--rule);
    align-self: center;
    line-height: 1;
  }
  .lang-switch .lang {
    color: var(--ink-faint);
    border: 0;
    padding: 0.42rem 0.6rem 0.38rem;
    transition: color 150ms ease, background 150ms ease;
    display: inline-flex;
    align-items: center;
  }
  .lang-switch .lang + .lang {
    border-left: 1px solid var(--rule);
  }
  .lang-switch .lang:hover {
    color: var(--accent);
  }
  .lang-switch .lang.active {
    color: var(--paper);
    background: var(--ink);
  }
  @media (max-width: 520px) {
    .lang-switch {
      margin-left: 0;
      margin-top: 0.4rem;
      width: auto;
      align-self: center;
    }
  }
</style>
