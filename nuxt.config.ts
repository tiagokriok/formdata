export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthq/ui", "nuxt-icon"],
  css: ["~/assets/css/font.css"],
  colorMode: {
    preference: "light",
  },
  routeRules: {
    "/api/submit": {
      headers: { "Access-Control-Allow-Origin": "*" },
    },
  },
});
