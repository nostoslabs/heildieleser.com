<script>
  import Ornament from '$lib/components/Ornament.svelte';
</script>

<svelte:head>
  <title>Oor · Heil die Leser</title>
</svelte:head>

<article>
  <header class="article-head">
    <p class="kicker">Oor die redaktrise</p>
    <h1>Amanda Kreitzer</h1>
    <div class="rule" aria-hidden="true"></div>
  </header>

  <div class="content">
    <p>
      Van ongeveer 1996 af, vir ’n kwarteeu lank, was Amanda Kreitzer die
      redaktrise van <em>Val de Charron</em> — ’n maandelikse nuuskoerant en
      tydskrif vir Wellington en die omliggende Wamakersvallei in die
      Wes-Kaap, Suid-Afrika.
    </p>
    <p>
      Elke uitgawe het oopgegaan met ’n voorwoord onder die titel <em>Heil die
      Leser</em>. Die voorwoorde het deur die seisoene van die vallei beweeg,
      deur die geskiedenis van die dorp, deur haar geloof, en deur die mense
      wat sy langs die pad ontmoet en waargeneem het. Hierdie webtuiste is ’n
      argief van daardie stukke.
    </p>
    <p class="placeholder">
      <strong>Hierdie bladsy is nog ’n plekhouer.</strong> ’n Volledige
      biografie word bygewerk sodra meer besonderhede beskikbaar is.
    </p>
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
  .content p {
    text-align: justify;
    hyphens: auto;
  }
  .content em { font-style: italic; }
  .placeholder {
    font-style: italic;
    color: var(--ink-faint);
    text-align: center !important;
    margin-top: 2rem;
    font-size: 0.92rem;
  }
</style>
