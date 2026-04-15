<script>
  import Ornament from '$lib/components/Ornament.svelte';
  import { t, langPath } from '$lib/i18n.js';
  let { data } = $props();
  let lang = $derived(data.lang);

  const issues = [
    { date: { af: 'April 2018', en: 'April 2018' }, href: '/archive/vdc-2018-04.pdf', pages: 16 }
  ];
</script>

<svelte:head>
  <title>{t('argief.title', lang)}</title>
</svelte:head>

<article>
  <header class="article-head">
    <p class="kicker">{t('argief.kicker', lang)}</p>
    <h1>{t('argief.heading', lang)}</h1>
    <div class="rule" aria-hidden="true"></div>
  </header>

  <div class="content">
    {#if lang === 'en'}
      <p class="plea">
        Our entire archive of <em>Val du Charron</em> — both the physical
        stack and the digital masters — has been lost in a disaster. If you
        have preserved old issues somewhere,
        <a href={langPath('/kontak', lang)}>please let us know</a>.
        Every single page helps us piece the paper back together.
      </p>
    {:else}
      <p class="plea">
        Ons hele argief van <em>Val du Charron</em> — die fisiese stapel sowel
        as die digitale meesters — is in ’n ramp verlore. As u êrens ou
        uitgawes bewaar het,
        <a href={langPath('/kontak', lang)}>laat weet ons asseblief</a>.
        Elke blad help om die koerant weer heel te maak.
      </p>
    {/if}

    {#if issues.length > 0}
      <section class="issues" aria-label={t('argief.aria', lang)}>
        <h2>{t('argief.recovered', lang)}</h2>
        <ul>
          {#each issues as issue}
            <li>
              <a href={issue.href} download>
                <span class="issue-date">{issue.date[lang] ?? issue.date.af}</span>
                <span class="issue-meta">PDF · {issue.pages} {t('argief.pages', lang)}</span>
              </a>
            </li>
          {/each}
        </ul>
      </section>
    {/if}
  </div>

  <Ornament />
</article>

<style>
  article {
    max-width: var(--measure);
    margin: 1rem auto 3rem;
    padding: 0 1.5rem;
  }
  .article-head { text-align: center; margin-bottom: 2rem; }
  .kicker {
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.24em;
    font-size: 0.78rem;
    color: var(--ink-soft);
    margin: 0;
  }
  .article-head h1 {
    font-family: var(--font-masthead);
    font-size: clamp(2.4rem, 6vw, 3.6rem);
    margin: 0.3rem 0 0.1rem;
    line-height: 1;
  }
  .article-head .rule {
    max-width: 200px;
    margin: 0.6rem auto 0;
    height: 4px;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    padding-top: 2px;
  }

  .content { max-width: 34rem; margin: 0 auto; }
  .plea {
    text-align: justify;
    hyphens: auto;
    font-size: 1.02rem;
  }
  .plea em { font-style: italic; }
  .plea a {
    color: var(--ink);
    border-bottom: 1px solid var(--rule);
  }
  .plea a:hover { color: var(--accent); }

  .issues {
    margin-top: 3rem;
    padding-top: 1.6rem;
    border-top: 1px solid var(--paper-edge);
  }
  .issues h2 {
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.22em;
    font-size: 0.8rem;
    color: var(--ink-soft);
    text-align: center;
    margin: 0 0 1.4rem;
    font-weight: normal;
  }
  .issues ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .issues li + li {
    border-top: 1px solid var(--paper-edge);
  }
  .issues a {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding: 0.9rem 0.2rem;
    color: var(--ink);
    border-bottom: 0;
    transition: color 150ms ease;
  }
  .issues a:hover { color: var(--accent); }
  .issue-date {
    font-family: var(--font-body);
    font-size: 1.05rem;
  }
  .issue-meta {
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.7rem;
    color: var(--ink-faint);
  }
</style>
