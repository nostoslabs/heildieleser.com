<script>
  import { page } from '$app/stores';

  const tabs = [
    { href: '/', label: 'Voorwoorde', match: (p) => p === '/' || p.startsWith('/heil') },
    { href: '/prosa', label: 'Prosa', match: (p) => p.startsWith('/prosa') },
    { href: '/kontak', label: 'Kontak', match: (p) => p.startsWith('/kontak') },
    { href: '/oor', label: 'Oor', match: (p) => p.startsWith('/oor') }
  ];
</script>

<nav class="tabs" aria-label="Hoofnavigasie">
  {#each tabs as tab}
    <a href={tab.href} class:active={tab.match($page.url.pathname)}>{tab.label}</a>
  {/each}
</nav>

<style>
  .tabs {
    max-width: var(--measure-wide);
    margin: 0 auto 2.2rem;
    padding: 0 1.5rem;
    display: flex;
    justify-content: center;
    gap: clamp(1.2rem, 4vw, 2.6rem);
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.86rem;
    border-bottom: 1px solid var(--paper-edge);
    flex-wrap: wrap;
  }
  .tabs a {
    padding: 0.7rem 0.15rem 0.85rem;
    color: var(--ink-soft);
    border: 0;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    transition: color 150ms ease, border-color 150ms ease;
  }
  .tabs a:hover {
    color: var(--accent);
  }
  .tabs a.active {
    color: var(--ink);
    border-bottom-color: var(--rule);
  }
</style>
