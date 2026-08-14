import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from "@tailwindcss/vite";
//npm install tailwindcss @tailwindcss/vite




export default defineConfig({
  trailingSlash: 'always',
  adapter: cloudflare(),
  build: {
    format: 'directory', // Ensures pages are built as /page/index.html
  },

  site: 'https://www.canvas.homes',

  vite: {
    
  },

  server: {
    port: 3000,
    open: true, 
  },

});