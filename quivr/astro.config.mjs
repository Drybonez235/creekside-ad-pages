import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',

  build: {
    format: 'directory', // Ensures pages are built as /page/index.html
  },

  site: 'https://quivr.ad-pages.com',

  integrations: [sitemap()],
  server: {
    port: 3000,
    open: true, 
  },
});