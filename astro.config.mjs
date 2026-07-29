import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://www.nbshzl-motor.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn', 'es', 'de', 'tr', 'ar', 'pt', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    format: 'directory',
  },
});
