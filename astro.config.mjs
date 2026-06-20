import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oshhome.com',
  integrations: [sitemap()],
  prefetch: true
});
