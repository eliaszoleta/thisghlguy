import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thisghlguy.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !['/search/', '/privacy-policy/', '/terms/'].some((path) => page.endsWith(path)),
    }),
  ],
  output: 'static',
});
