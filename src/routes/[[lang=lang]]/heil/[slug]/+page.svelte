<script>
  import Ornament from '$lib/components/Ornament.svelte';
  import { t, langPath } from '$lib/i18n.js';
  let { data } = $props();

  let lang = $derived(data.lang);
  let hasTranslation = $derived(Boolean(data.editorial.en));
  let translated = $derived(lang === 'en' && hasTranslation);
  let view = $derived(translated ? data.editorial.en : data.editorial);
  let archiveHref = $derived(langPath('/', lang));
</script>

<svelte:head>
  <title>{view.title} · Heil die Leser</title>
  <meta
    name="description"
    content={`${view.month} ${view.year} · ${lang === 'en' ? 'Editorial' : 'Voorwoord'} by Amanda Kreitzer, Val du Charron, Wellington.`}
  />
</svelte:head>

<article>
  <header class="article-head">
    <p class="kicker">{view.month} {view.year}</p>
    <h1>Heil die Leser</h1>
    <p class="byline">{t('article.byline', lang)}</p>
    <div class="rule" aria-hidden="true"></div>
    {#if lang === 'en' && !hasTranslation}
      <p class="not-translated">{t('article.notTranslated', 'en')}</p>
    {/if}
    {#if view.dedication}
      <p class="dedication">
        {t('article.dedication', lang)} <em>{view.dedication}</em>.
      </p>
    {/if}
  </header>

  <div class="prose">
    {@html view.html}
  </div>

  <Ornament />
  <nav class="back"><a href={archiveHref}>{t('article.back', lang)}</a></nav>
</article>

<style>
  article {
    max-width: var(--measure);
    margin: 1rem auto 3rem;
    padding: 0 1.5rem;
  }
  .article-head {
    text-align: center;
    margin-bottom: 2rem;
  }
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
  .byline {
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.72rem;
    color: var(--ink-faint);
    margin: 0.2rem 0 1.2rem;
  }
  .article-head .rule {
    max-width: 200px;
    margin: 0 auto;
    height: 4px;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    padding-top: 2px;
  }
  .not-translated {
    margin-top: 0.9rem;
    font-style: italic;
    font-size: 0.85rem;
    color: var(--ink-faint);
  }
  .dedication {
    font-style: italic;
    color: var(--ink-soft);
    margin-top: 1rem;
  }
  .prose :global(p:first-child::first-letter) {
    font-family: var(--font-masthead);
    float: left;
    font-size: 4em;
    line-height: 0.82;
    padding: 0.05em 0.12em 0 0;
    color: var(--accent);
  }
  .prose :global(p) {
    text-align: justify;
    hyphens: auto;
  }
  .back {
    text-align: center;
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
  .back a {
    border: 0;
    color: var(--ink-soft);
  }
  .back a:hover { color: var(--accent); }
</style>
