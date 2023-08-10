import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  inlineStylesheets: true,
  site: 'http:/ken-ingle.github.io',
});