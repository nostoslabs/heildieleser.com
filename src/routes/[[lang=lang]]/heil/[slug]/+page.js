import { editorials, findEditorial } from '$lib/content.js';
import { error } from '@sveltejs/kit';

export function entries() {
  const out = [];
  for (const e of editorials) {
    out.push({ slug: e.slug });
    if (e.en) out.push({ lang: 'en', slug: e.slug });
  }
  return out;
}

export function load({ params }) {
  const editorial = findEditorial(params.slug);
  if (!editorial) throw error(404, 'Voorwoord nie gevind nie');
  const lang = params.lang === 'en' ? 'en' : 'af';
  return { editorial, lang };
}
