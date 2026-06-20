import { appendFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const mediaSource = readFileSync(join(root, 'src/content/media.ts'), 'utf8');
const siteConfig = readFileSync(join(root, 'src/content/site-config.ts'), 'utf8');
const placeholderIds = [...mediaSource.matchAll(/'(?<id>PH-\d{2})':\s*\{\s*kind:\s*'placeholder'/g)].map((match) => match.groups.id);
const configChecks = [
  ['production URL', siteConfig.includes("url: 'https://oshhome.com'")],
  ['support email', siteConfig.includes("email: 'shmatko1095@gmail.com'")],
  ['Telegram URL', siteConfig.includes("telegramUrl: 'https://t.me/shmatko1095'")]
];
const missingConfig = configChecks.filter(([, ready]) => !ready).map(([name]) => name);
const ready = placeholderIds.length === 0 && missingConfig.length === 0;

console.log(ready
  ? 'Release ready: media and required configuration are complete.'
  : `Release not ready.${placeholderIds.length ? ` Placeholder media: ${placeholderIds.join(', ')}.` : ''}${missingConfig.length ? ` Missing config: ${missingConfig.join(', ')}.` : ''}`
);

if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `ready=${ready}\n`);
if (process.argv.includes('--strict') && !ready) process.exit(1);
