<script>
  import Ornament from '$lib/components/Ornament.svelte';
  import { t, langPath } from '$lib/i18n.js';
  let { data } = $props();
  let lang = $derived(data.lang);
</script>

<svelte:head>
  <title>{t('prosa.title', lang)}</title>
</svelte:head>

<section class="lede">
  <p class="dropcap">
    {#if lang === 'en'}
      <span class="initial">A</span>longside the editorials archived here,
      Amanda Kreitzer writes prose and short pieces — scenes of the
      Wagon-makers Valley and its people, often with the history of
      Wellington as their backdrop. New pieces are added as they are written.
      The pieces below are in the original Afrikaans.
    {:else}
      <span class="initial">N</span>aas die voorwoorde wat hier opgeneem is,
      skryf Amanda Kreitzer ook prosa en kortverhale — skeppe van die
      Wamakersvallei en sy mense, dikwels met die geskiedenis van Wellington
      as agtergrond. Nuwe stukke word bygewerk soos hulle geskryf word.
    {/if}
  </p>
</section>

<Ornament />

<section class="index">
  <h2>{t('prosa.ledeTitle', lang)}</h2>
  <ul class="entries">
    {#each data.prose as p}
      <li>
        <a href={langPath(`/prosa/${p.slug}`, lang)}>
          <span class="month">{p.title}</span>
          {#if p.setting}
            <span class="dash">·</span>
            <span class="excerpt">{p.setting}</span>
          {/if}
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
  .entries { list-style: none; padding: 0; margin: 0; }
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
