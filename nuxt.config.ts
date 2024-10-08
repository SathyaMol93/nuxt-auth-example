// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    auth: {
      client: {
        id: process.env.CLIENT_ID,
        secret: process.env.CLIENT_SECRET,
      },
    },
  },
  devServer: {
    port: 3001
  }
});
