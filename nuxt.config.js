const strapiBaseUri = process.env.BACKEND_URL || "http://localhost:1337";
const strapiAPIUri =
  process.env.GRAPHQL_API_URL || "http://localhost:1337/graphql";
const cloudinaryName = process.env.CLOUDINARY_NAME;
const cloudinaryKey = process.env.CLOUDINARY_KEY;
const cloudinarySecret = process.env.CLOUDINARY_SECRET;
const appName = process.env.APP_NAME;

export default {
  env: {
    strapiAPIUri,
    strapiBaseUri,
    cloudinaryName,
    cloudinaryKey,
    cloudinarySecret,
    appName,
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  axios: {
    baseURL: "https://lorapicault-backend.herokuapp.com",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: appName,
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Alex+Brush&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      "~/components",
      { path: "~/components/base/", prefix: "base" },
      { path: "~/components/sections/" }
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxtjs/cloudinary",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  cloudinary: {
    cloudName: cloudinaryName,
    apiKey: cloudinaryKey,
    apiSecret: cloudinarySecret,
  },
};
