export const prerender = true;

export function load({ params }) {
  return { lang: params.lang === 'en' ? 'en' : 'af' };
}
