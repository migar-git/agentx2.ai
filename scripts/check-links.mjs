/**
 * check-links.mjs — verify every internal link in the built site resolves to a real file.
 * Zero dependencies. Run after `astro build`. Part of the quality gate (no dead ends).
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const DIST = 'dist';
if (!existsSync(DIST)) {
  console.error('✗ dist/ not found — run `npm run build` first.');
  process.exit(2);
}

const all = readdirSync(DIST, { recursive: true });
const htmlFiles = all.filter((f) => typeof f === 'string' && f.endsWith('.html')).map((f) => join(DIST, f));

const attrRe = /(?:href|src)\s*=\s*"([^"]+)"/gi;
const broken = [];
let checked = 0;

function targetsFor(link) {
  const p = link.split('#')[0].split('?')[0];
  if (!p) return null;
  if (p.endsWith('/')) return [join(DIST, p, 'index.html')];
  if (extname(p)) return [join(DIST, p)];
  return [join(DIST, p + '.html'), join(DIST, p, 'index.html')];
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  let m;
  while ((m = attrRe.exec(html))) {
    const link = m[1].trim();
    if (!link || /^(https?:|mailto:|tel:|data:|javascript:|#)/i.test(link)) continue;
    checked++;
    const targets = targetsFor(link);
    if (targets && !targets.some((t) => existsSync(t))) {
      broken.push(`${file.replace(DIST, '') || '/'}  →  ${link}`);
    }
  }
}

if (broken.length) {
  console.error(`✗ ${broken.length} broken internal link(s):`);
  broken.forEach((b) => console.error('  ' + b));
  process.exit(1);
}
console.log(`✓ Links OK — ${checked} internal links across ${htmlFiles.length} pages, 0 broken.`);
