// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/styles/index.scss", "~/assets/fonts/style.scss"],
  // modules: ["@pinia/nuxt"],
  // pinia: {
  //   storesDirs: ["./stores/**"],
  // },
  app: {
    head: {
      title: "Origa",
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
});
