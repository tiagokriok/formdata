export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthq/ui", "nuxt-icon"],
  css: ["~/assets/css/font.css"],
  colorMode: {
    preference: "light",
  },
  nitro: {
    routeRules: {
      "/api/submit": {
        cors: true,
      }
    } 
  }
});
