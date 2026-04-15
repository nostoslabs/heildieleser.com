<script>
  import { page } from '$app/stores';
  import Ornament from '$lib/components/Ornament.svelte';
</script>

<svelte:head>
  <title>{$page.status} · Heil die Leser</title>
</svelte:head>

<article>
  <header class="article-head">
    <p class="kicker">Vierhonderd-en-vier</p>
    <h1>Hierdie bladsy het weggeraak</h1>
    <p class="byline">’n Kort berig uit die soektog</p>
    <div class="rule" aria-hidden="true"></div>
  </header>

  <div class="content">
    {#if $page.status === 404}
      <p>
        Dit lyk asof hierdie bladsy soos ’n wintersmis oor die Hawekwas
        opgetrek het. Dalk het dit tussen die wingerde by Welbedacht gaan
        wegkruip, of agter Sneeukop ’n draai gaan loop. Dalk het die
        geelslange dit in die veldgras ingesluk. Wat ook al die geval — op
        hierdie adres kry ons hom nie.
      </p>

      <p class="aside">
        <em>
          (Die redaksie bied haar verskoning aan vir die ongerief, en
          verseker die leser dat dit nie aan die drukker se skuld toegeskryf
          kan word nie.)
        </em>
      </p>

      <p class="hint">Die vallei is groot. Probeer gerus een van dié paadjies:</p>

      <ul class="signposts">
        <li><a href="/">Terug na die voorwoorde</a></li>
        <li><a href="/prosa">Lees die prosastukke</a></li>
        <li><a href="/oor">Oor die redaktrise</a></li>
        <li><a href="/kontak">Stuur ’n briefie</a></li>
      </ul>
    {:else}
      <p>
        Iets het onverwags skeefgeloop op hierdie bladsy. Die bediener meld:
        <em>{$page.error?.message ?? 'onbekende fout'}</em>.
      </p>
      <p class="hint">
        Keer gerus terug na <a href="/">die hoofblad</a> en probeer weer.
      </p>
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
  .content p {
    text-align: justify;
    hyphens: auto;
  }
  .aside {
    color: var(--ink-soft);
    font-size: 0.98em;
    text-align: center !important;
  }
  .hint {
    margin-top: 2rem;
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.78rem;
    color: var(--ink-soft);
    text-align: center !important;
  }
  .signposts {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0;
    text-align: center;
  }
  .signposts li {
    padding: 0.55rem 0;
    border-top: 1px solid var(--paper-edge);
  }
  .signposts li:last-child {
    border-bottom: 1px solid var(--paper-edge);
  }
  .signposts a {
    border: 0;
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.84rem;
    color: var(--ink-soft);
  }
  .signposts a:hover { color: var(--accent); }
</style>
