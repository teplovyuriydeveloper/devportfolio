// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100
      }
    }
  },
})
