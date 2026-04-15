import { prose, findProse } from '$lib/content.js';
import { error } from '@sveltejs/kit';

export function entries() {
  return prose.map((p) => ({ slug: p.slug }));
}

export function load({ params }) {
  const piece = findProse(params.slug);
  if (!piece) throw error(404, 'Stuk nie gevind nie');
  return { piece };
}
