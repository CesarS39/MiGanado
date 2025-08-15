// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cesars39.github.io',
  base: '/MiGanado/',
  vite: {
    plugins: [tailwindcss()]
  }
});