import vuetify from "vite-plugin-vuetify"

// PWA Config
const title = "Vuetify 3 + Nuxt 3 Starter"
const shortTitle = "Vuetify 3 + Nuxt 3 Starter"
const description =
  "Template to get you up and running with Nuxt 3 & Vuetify 3"
const image = "https://vuetify3nuxt3starter.behonbaker.com/starter.png"
const url = "https://vuetify3nuxt3starter.behonbaker.com/"

export default defineNuxtConfig({
  app: {
      head: {
        title: "Vuetify 3 + Nuxt 3 Starter",
        titleTemplate: "%s | Vuetify 3 + Nuxt 3 Starter",
        link: [
          { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
          { rel: "preconnect", href: "https://rsms.me/" },
          { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
          { rel: "canonical", href: url },
        ],
        meta: [
          {
            hid: "description",
            name: "description",
            content: description,
          },
          { property: "og:site_name", content: title },
          { hid: "og:type", property: "og:type", content: "website" },
          {
            hid: "og:url",
            property: "og:url",
            content: url,
          },
          {
            hid: "og:image:secure_url",
            property: "og:image:secure_url",
            content: image,
          },
          {
            hid: "og:title",
            property: "og:title",
            content: title,
          },
          {
            hid: "og:description",
            property: "og:description",
            content: description,
          },
          {
            hid: "og:image",
            property: "og:image",
            content: image,
          },
          //Twitter
          { name: "twitter:card", content: "summary_large_image" },
          {
            hid: "twitter:url",
            name: "twitter:url",
            content: url,
          },
          {
            hid: "twitter:title",
            name: "twitter:title",
            content: title,
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: description,
          },
          {
            hid: "twitter:image",
            name: "twitter:image",
            content: image,
          },
        ],
      },
  },

  build: { transpile: ["vuetify"] },

  css: [
      '@/styles/main.scss',
      '@/styles/css/tailwind.css',
  ],

  devtools: { enabled: false },

  experimental: {
      renderJsonPayloads: true
  },

  modules: [
      '@nuxt/image',
      'nuxt-booster',
      '@nuxtjs/tailwindcss',
      async (options, nuxt) => {
          nuxt.hooks.hook("vite:extendConfig", (config) =>
              // @ts-ignore
              config.plugins.push(vuetify())
          );
      },
  ],

  nitro: {
      compressPublicAssets: true,
      //preset: process.env.ENV === 'production' ? 'vercel-edge' : null,
      // prerender: {
      //   routes: [
      //     '/sitemap.xml',
      //   ]
      // },
    //   routeRules: {
    //     "/": { ssr: true, prerender: true },
    //   }
  },
  booster: {

    detection: {
      performance: true,
      browserSupport: true
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },

    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }

  },


  ssr: true,
  typescript: { shim: false, strict: true, },
  compatibilityDate: "2025-01-21",
});