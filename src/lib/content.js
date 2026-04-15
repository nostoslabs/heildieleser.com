import { marked } from 'marked';

function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, content: raw };
  const [, yaml, content] = match;
  const data = {};
  for (const line of yaml.split('\n')) {
    const m = /^(\w+):\s*(.*)$/.exec(line);
    if (!m) continue;
    let val = m[2].trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    data[m[1]] = val;
  }
  return { data, content };
}

marked.setOptions({ gfm: true, breaks: false });

function load(glob) {
  return Object.entries(glob).map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = path.split('/').pop().replace(/\.md$/, '');
    return {
      slug,
      ...data,
      html: marked.parse(content)
    };
  });
}

const editorialModules = import.meta.glob('/docs/md/editorials/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

const proseModules = import.meta.glob('/docs/md/prose/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

export const editorials = load(editorialModules).sort((a, b) =>
  (b.date ?? '').localeCompare(a.date ?? '')
);

export const prose = load(proseModules).sort((a, b) =>
  (a.title ?? '').localeCompare(b.title ?? '')
);

export function findEditorial(slug) {
  return editorials.find((e) => e.slug === slug);
}

export function findProse(slug) {
  return prose.find((p) => p.slug === slug);
}
