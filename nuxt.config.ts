export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthq/ui", "nuxt-icon"],
  css: ["~/assets/css/font.css"],
  colorMode: {
    preference: "light",
  },
  routeRules: {
    "/api/submit": {
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  },
});
