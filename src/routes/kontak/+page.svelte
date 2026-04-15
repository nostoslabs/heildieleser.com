<script>
  import { onMount } from 'svelte';
  import Ornament from '$lib/components/Ornament.svelte';

  let status = $state('idle'); // idle | submitting | success | error
  let errorMsg = $state('');
  let formTs = $state(0);

  let name = $state('');
  let email = $state('');
  let subject = $state('’n Briefie oor Heil die Leser');
  let message = $state('');
  let honeypot = $state('');

  onMount(() => {
    formTs = Date.now();
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === 'submitting') return;

    status = 'submitting';
    errorMsg = '';

    try {
      const res = await fetch('/api/kontak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          website: honeypot,
          ts: formTs
        })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        status = 'success';
      } else {
        status = 'error';
        errorMsg = data.error ?? 'Iets het skeefgeloop. Probeer asseblief weer.';
      }
    } catch (err) {
      status = 'error';
      errorMsg = 'Die bediener het nie geantwoord nie. Probeer asseblief weer.';
    }
  }
</script>

<svelte:head>
  <title>Kontak · Heil die Leser</title>
</svelte:head>

<article>
  <header class="article-head">
    <p class="kicker">Skryf gerus</p>
    <h1>Kontak</h1>
    <div class="rule" aria-hidden="true"></div>
  </header>

  <div class="content">
    <p class="intro">
      U is baie welkom om op hierdie argief te reageer, foute uit te wys, of te
      laat weet as ’n spesifieke uitgawe dalk êrens tussen ou gehaltepapiere wag
      om teruggevind te word. Amanda Kreitzer lees graag wat haar lesers te sê
      het.
    </p>

    {#if status === 'success'}
      <div class="thanks" role="status">
        <p class="thanks-title">Dankie vir u briefie.</p>
        <p>
          Dit is veilig op pad. Indien ’n antwoord nodig is, sal u dit in die
          volgende dag of twee terugkry.
        </p>
      </div>
    {:else}
      <form onsubmit={handleSubmit} novalidate>
        <div class="field">
          <label for="name">Naam</label>
          <input
            id="name"
            type="text"
            bind:value={name}
            required
            autocomplete="name"
            maxlength="100"
          />
        </div>

        <div class="field">
          <label for="email">E-pos adres</label>
          <input
            id="email"
            type="email"
            bind:value={email}
            required
            autocomplete="email"
            maxlength="200"
          />
        </div>

        <div class="field">
          <label for="subject">Onderwerp</label>
          <input
            id="subject"
            type="text"
            bind:value={subject}
            maxlength="200"
          />
        </div>

        <div class="field">
          <label for="message">Boodskap</label>
          <textarea
            id="message"
            bind:value={message}
            required
            rows="8"
            maxlength="10000"
          ></textarea>
        </div>

        <!-- Honeypot: hidden from humans, bots fill it in -->
        <div class="honeypot" aria-hidden="true">
          <label for="website">Webwerf</label>
          <input
            id="website"
            type="text"
            bind:value={honeypot}
            tabindex="-1"
            autocomplete="off"
          />
        </div>

        <div class="actions">
          <button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Besig om te stuur…' : 'Stuur die briefie'}
          </button>
        </div>

        {#if status === 'error'}
          <p class="error" role="alert">{errorMsg}</p>
        {/if}
      </form>
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
  .article-head .rule {
    max-width: 200px;
    margin: 0.6rem auto 0;
    height: 4px;
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    padding-top: 2px;
  }

  .content { max-width: 34rem; margin: 0 auto; }
  .intro {
    text-align: justify;
    hyphens: auto;
    margin-bottom: 2rem;
  }

  form {
    margin: 0 auto;
    position: relative;
  }
  .field {
    margin: 1.3rem 0;
  }
  .field label {
    display: block;
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.72rem;
    color: var(--ink-soft);
    margin-bottom: 0.45rem;
  }
  .field input,
  .field textarea {
    width: 100%;
    font-family: var(--font-body);
    font-size: 1.05rem;
    color: var(--ink);
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--paper-edge);
    padding: 0.45rem 0.2rem;
    outline: none;
    transition: border-color 160ms ease;
  }
  .field input:focus {
    border-bottom-color: var(--rule);
  }
  .field textarea {
    border: 1px solid var(--paper-edge);
    padding: 0.7rem 0.85rem;
    resize: vertical;
    min-height: 9rem;
    line-height: 1.55;
  }
  .field textarea:focus {
    border-color: var(--rule);
  }

  .honeypot {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .actions {
    margin-top: 2rem;
    text-align: center;
  }
  button[type='submit'] {
    background: transparent;
    border: 1px solid var(--rule);
    color: var(--ink);
    padding: 0.85rem 2.2rem;
    font-family: var(--font-smallcaps);
    text-transform: uppercase;
    letter-spacing: 0.22em;
    font-size: 0.82rem;
    cursor: pointer;
    transition: background 160ms ease, color 160ms ease;
  }
  button[type='submit']:hover:not(:disabled) {
    background: var(--rule);
    color: var(--paper);
  }
  button[type='submit']:disabled {
    opacity: 0.55;
    cursor: wait;
  }

  .error {
    margin-top: 1.4rem;
    color: var(--accent);
    font-style: italic;
    text-align: center;
  }

  .thanks {
    text-align: center;
    padding: 2rem 0 1rem;
  }
  .thanks-title {
    font-family: var(--font-masthead);
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    color: var(--accent);
    margin: 0 0 1rem;
    line-height: 1.1;
  }
  .thanks p {
    text-align: center;
    color: var(--ink-soft);
  }
</style>
