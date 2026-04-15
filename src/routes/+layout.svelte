<script>
  import '../app.css';
  import Masthead from '$lib/components/Masthead.svelte';
  import Nav from '$lib/components/Nav.svelte';
  let { children } = $props();
</script>

<div class="page">
  <Masthead />
  <Nav />
  <main>
    {@render children()}
  </main>
  <footer>
    <div class="rule" aria-hidden="true"></div>
    <p>
      Geskryf deur Amanda Kreitzer · Redaktrise, <em>Val de Charron</em>, Wellington
    </p>
    <p class="fine">
      ’n Bewaarplek van haar maandelikse voorwoorde en prosastukke.
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
