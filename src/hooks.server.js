export async function handle({ event, resolve }) {
  const first = event.url.pathname.split('/')[1];
  const lang = first === 'en' ? 'en' : 'af';
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', lang)
  });
}
