import vuetify from "vite-plugin-vuetify";

// PWA Config
const title = "Vuetify 3 + Nuxt 3 Starter";
const shortTitle = "Vuetify 3 + Nuxt 3 Starter";
const description =
  "Template to get you up and running with Nuxt 3 & Vuetify 3";
const image = "https://vuetify3nuxt3starter.behonbaker.com/starter.png";
const url = "https://vuetify3nuxt3starter.behonbaker.com/";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // import styles
  css: ['vuetify/lib/styles/main.sass'],
  // enable takeover mode
  typescript: { shim: false },
  build: { transpile: ["vuetify"] },
  modules: [
    'nuxt-speedkit',
    'nuxt-purgecss',
    // [
    //   'nuxt-purgecss',
    //   {
    //     content: [
    //       /* Copy of 'dist' from first npm run generate */
    //       'modules/purgecss/static-generated-html/**/*.html',
    //     ],
    //     greedy: [
    //       /* Generated as runtime, keep all related selectors */
    //       /^v-/,
    //     ],
    //   },
    // ],
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],

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
  speedkit: {
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
  purgecss: {
        enabled: true, // Always enable purgecss
        safelist:  {
            //   standard: [/^v-/],
            //   deep: [/blue$/],
                greedy: [
                    /^v-/,
                    /^font-/,
                    /^text-/,
                    /^mt-/,
                    /^d-/,
                    /^hidden-/,
                    /^fill-/,
                    /^mx-/,
                    /^mb-/,
                    /^w-/,
                    /^h-/,
                    /^rounded-/,
                    /^label/,
                    /^gradient/,
                    /^primary/,
                    /^secondary/
                ]
            }
    },
});
