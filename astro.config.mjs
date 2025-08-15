// @ts-check
import { defineConfig } from 'astro/config';
const isProd = process.env.NODE_ENV === 'production';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://CesarS39.github.io',
  base: isProd ? '/MiGanado/' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});