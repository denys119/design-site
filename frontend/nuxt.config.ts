import { resolve } from 'node:path';

import CONFIG from './src/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: [
    '@nuxt/devtools',
    '@vueuse/motion/nuxt',
    'nuxt-primevue',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@dojocode/nuxt-strapi-headless'
  ],
  primevue: CONFIG.primevueConfig,
  runtimeConfig: {
    public: {
      strapi: {
        url: process.env.API_URL || 'http://localhost:1337'
      },
      strapiHeadless: {
        // Comma separated list of locales to include in the queries
        languages: 'en, es',

        // Comma separated list of page types to include in the page query
        pageTypes: 'page, blog'
      }
    }
  },
  hooks: {
    'pages:extend' (pages) {
      pages.push({
        name: 'cms',
        path: '/:catchall(.*)*',
        file: resolve(__dirname, './src/pages/index.vue')
      });
    }
  },
  components: {
    global: true,
    dirs: ['@/components', '@/components/sections']
  },
  css: [
    'primevue/resources/themes/bootstrap4-light-purple/theme.css',
    'normalize.css/normalize.css'
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
