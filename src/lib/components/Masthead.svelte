<script>
  import { t, langPath } from '$lib/i18n.js';
  let { lang = 'af' } = $props();
  let home = $derived(langPath('/', lang));
</script>

<header class="masthead">
  <div class="date-line">
    <span>Wellington</span>
    <span>·</span>
    <span>Wamakersvallei</span>
    <span>·</span>
    <span>Val du Charron</span>
  </div>
  <h1 class="title"><a href={home}>Heil die Leser</a></h1>
  <p class="subtitle">{t('site.subtitle', lang)}</p>
  <div class="rule" aria-hidden="true"></div>
</header>

<style>
  .masthead {
    max-width: var(--measure-wide);
    margin: 2.8rem auto 2rem;
    padding: 0 1.5rem;
    text-align: center;
  }
  .date-line {
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.78rem;
    color: var(--ink-soft);
    display: flex;
    justify-content: center;
    gap: 0.6em;
    margin-bottom: 0.4rem;
    flex-wrap: wrap;
  }
  .title {
    font-family: var(--font-masthead);
    font-size: clamp(3rem, 9vw, 5.8rem);
    line-height: 1;
    margin: 0.1em 0 0.1em;
    color: var(--ink);
    letter-spacing: 0.01em;
  }
  .title a {
    color: inherit;
    border: 0;
  }
  .subtitle {
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.24em;
    font-size: 0.78rem;
    color: var(--ink-soft);
    margin: 0.4rem 0 1.3rem;
  }
  .rule {
    height: 6px;
    border-top: 2px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    margin: 0 auto;
  }
</style>
