import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dist = join(process.cwd(), 'dist');
if (!existsSync(dist)) throw new Error('dist/ is missing. Run npm run build first.');

function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const htmlFiles = walk(dist).filter((path) => path.endsWith('.html'));
const failures = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (/^(?:https?:|mailto:|tel:|#)/.test(href)) continue;
    const pathname = href.split(/[?#]/)[0];
    if (!pathname.startsWith('/')) continue;
    const target = pathname.endsWith('/')
      ? join(dist, pathname, 'index.html')
      : join(dist, pathname);
    if (!existsSync(target)) failures.push(`${file}: ${href}`);
  }
}

if (failures.length) {
  console.error(`Broken internal links:\n${failures.join('\n')}`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files: all internal links resolve.`);
