<script>
  import Ornament from '$lib/components/Ornament.svelte';
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.editorial.title} · Heil die Leser</title>
</svelte:head>

<article>
  <header class="article-head">
    <p class="kicker">{data.editorial.month} {data.editorial.year}</p>
    <h1>Heil die Leser</h1>
    <p class="byline">Deur Amanda Kreitzer</p>
    <div class="rule" aria-hidden="true"></div>
    {#if data.editorial.dedication}
      <p class="dedication">
        Opgedra aan <em>{data.editorial.dedication}</em>.
      </p>
    {/if}
  </header>

  <div class="prose">
    {@html data.editorial.html}
  </div>

  <Ornament />
  <nav class="back"><a href="/">← Terug na die argief</a></nav>
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
