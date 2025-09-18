// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production'
        ? process.env.NUXT_APP_BASE_URL
            ? process.env.NUXT_APP_BASE_URL : '/'
        : './',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module'
  ],
  typescript: {
    typeCheck: true
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
})
