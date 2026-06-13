/**
 * check-doc-links.mjs — validate every relative markdown link across the repo's docs.
 * Strips code/mermaid fences and inline code first to avoid false positives.
 * Zero dependencies. Ensures the documentation graph has no dead ends.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';

const ROOT = process.cwd();
const files = readdirSync(ROOT, { recursive: true })
  .filter((f) => typeof f === 'string' && f.endsWith('.md'))
  .filter((f) => !f.includes('node_modules') && !f.split(/[\\/]/)[0].startsWith('dist') && !f.includes('_templates'));

const linkRe = /\[[^\]]*\]\(([^)]+)\)/g;
const broken = [];
let checked = 0;

for (const rel of files) {
  const file = join(ROOT, rel);
  let md = readFileSync(file, 'utf8');
  md = md.replace(/```[\s\S]*?```/g, '').replace(/`[^`]*`/g, ''); // strip fenced + inline code
  let m;
  while ((m = linkRe.exec(md))) {
    let target = m[1].trim().replace(/^<|>$/g, '').split(/\s+/)[0];
    if (!target || /^(https?:|mailto:|tel:|#|data:)/i.test(target)) continue;
    const path = target.split('#')[0];
    if (!path) continue; // pure in-page anchor
    checked++;
    if (!existsSync(resolve(dirname(file), path))) {
      broken.push(`${rel}  →  ${target}`);
    }
  }
}

if (broken.length) {
  console.error(`✗ ${broken.length} broken doc link(s):`);
  broken.forEach((b) => console.error('  ' + b));
  process.exit(1);
}
console.log(`✓ Doc links OK — ${checked} relative markdown links across ${files.length} docs, 0 broken.`);
