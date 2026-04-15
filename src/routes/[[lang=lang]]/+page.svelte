<script>
  import Ornament from '$lib/components/Ornament.svelte';
  import { t, langPath } from '$lib/i18n.js';
  let { data } = $props();

  let lang = $derived(data.lang);

  function excerpt(html) {
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const m = /^(.{40,180}?[.?!])(\s|$)/.exec(text);
    return m ? m[1] : text.slice(0, 140) + '…';
  }

  function view(ed, lang) {
    return lang === 'en' && ed.en ? ed.en : ed;
  }
</script>

<svelte:head>
  <title>{t('site.title', lang)}</title>
  <meta name="description" content={t('site.description', lang)} />
</svelte:head>

<section class="lede">
  <p class="dropcap">
    {#if lang === 'en'}
      <span class="initial">F</span>{@html t('home.lede', lang).slice(1)}
    {:else}
      <span class="initial">V</span>{@html t('home.lede', lang).slice(1)}
    {/if}
  </p>
</section>

<Ornament />

<section class="index">
  <h2>{t('home.ledeTitle', lang)}</h2>
  <ul class="entries">
    {#each data.editorials as ed}
      {@const v = view(ed, lang)}
      <li>
        <a href={langPath(`/heil/${ed.slug}`, lang)}>
          <span class="month">{v.month} {v.year}</span>
          <span class="dash">·</span>
          <span class="excerpt">{excerpt(v.html)}</span>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>
  .lede {
    max-width: var(--measure);
    margin: 1.5rem auto 1rem;
    padding: 0 1.5rem;
  }
  .dropcap { font-size: 1.18rem; line-height: 1.7; }
  .dropcap::after { content: ""; display: block; clear: left; }
  .initial {
    float: left;
    font-family: var(--font-masthead);
    font-size: 3.6em;
    line-height: 0.82;
    padding: 0.05em 0.12em 0 0;
    color: var(--accent);
  }
  .lede :global(em) { font-style: italic; }
  .index {
    max-width: var(--measure);
    margin: 1.5rem auto;
    padding: 0 1.5rem;
  }
  .index h2 {
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.22em;
    font-size: 0.88rem;
    text-align: center;
    color: var(--ink-soft);
    margin: 0 0 1.5rem;
  }
  .entries {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .entries li {
    border-top: 1px solid var(--paper-edge);
    padding: 0.95rem 0;
  }
  .entries li:last-child {
    border-bottom: 1px solid var(--paper-edge);
  }
  .entries a {
    display: flex;
    gap: 0.7rem;
    align-items: baseline;
    border: 0;
    color: var(--ink);
    flex-wrap: wrap;
  }
  .entries a:hover .month { color: var(--accent); }
  .month {
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.82rem;
    white-space: nowrap;
    min-width: 9rem;
    color: var(--ink-soft);
    transition: color 150ms ease;
  }
  .dash { color: var(--ink-faint); }
  .excerpt {
    font-style: italic;
    color: var(--ink-soft);
    flex: 1;
    min-width: 12rem;
  }
</style>
