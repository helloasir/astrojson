import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://helloasir.github.io',
  base: 'astrojson',
  integrations: [tailwind()],
});
