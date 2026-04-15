import { editorials, findEditorial } from '$lib/content.js';
import { error } from '@sveltejs/kit';

export function entries() {
  return editorials.map((e) => ({ slug: e.slug }));
}

export function load({ params }) {
  const editorial = findEditorial(params.slug);
  if (!editorial) throw error(404, 'Voorwoord nie gevind nie');
  return { editorial };
}
