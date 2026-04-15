<script>
  import '../../app.css';
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import { page } from '$app/stores';
  import Masthead from '$lib/components/Masthead.svelte';
  import Nav from '$lib/components/Nav.svelte';
  import { t, SITE_URL, altLangPath } from '$lib/i18n.js';
  let { data, children } = $props();

  injectAnalytics({ mode: dev ? 'development' : 'production' });

  let lang = $derived(data.lang);
  let pathname = $derived($page.url.pathname);
  let canonical = $derived(`${SITE_URL}${pathname}`);
  let alternateAf = $derived(`${SITE_URL}${altLangPath(pathname, 'af')}`);
  let alternateEn = $derived(`${SITE_URL}${altLangPath(pathname, 'en')}`);
</script>

<svelte:head>
  <link rel="canonical" href={canonical} />
  <link rel="alternate" hreflang="af" href={alternateAf} />
  <link rel="alternate" hreflang="en" href={alternateEn} />
  <link rel="alternate" hreflang="x-default" href={alternateAf} />
</svelte:head>

<div class="page">
  <Masthead {lang} />
  <Nav {lang} />
  <main>
    {@render children()}
  </main>
  <footer>
    <div class="rule" aria-hidden="true"></div>
    <p>
      {t('site.footerByline', lang)} <em>Val du Charron</em>, Wellington
    </p>
    <p class="fine">
      {t('site.footerTagline', lang)}
    </p>
  </footer>
</div>

<style>
  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1;
    width: 100%;
  }
  footer {
    max-width: var(--measure-wide);
    margin: 3rem auto 2rem;
    padding: 1.5rem;
    text-align: center;
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.72rem;
    color: var(--ink-faint);
  }
  footer em {
    font-style: italic;
    text-transform: none;
    letter-spacing: 0;
    font-family: var(--font-body);
  }
  footer p { margin: 0.4rem 0; }
  footer .fine { font-size: 0.68rem; opacity: 0.85; }
  footer .rule {
    max-width: 240px;
    margin: 0 auto 1.2rem;
    height: 4px;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    padding-top: 2px;
  }
</style>
