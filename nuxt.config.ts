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
    compatibilityDate: "2025-01-21",
    css: [
        '@/styles/main.scss',
        '@/styles/css/tailwind.css',
    ],
    devtools: { enabled: false },
    experimental: {
        renderJsonPayloads: true
    },
    features: {
        inlineStyles: true,
        devLogs: false,
    },

    modules: [
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        'nuxt-vitalizer',
        async (options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => {
                config?.plugins?.push(
                    vuetify({
                        autoImport: true, // Autoimport components (def true)
                    }),
                );
            });
        },
        //   async (options, nuxt) => {
        //       nuxt.hooks.hook("vite:extendConfig", (config) =>
        //           // @ts-ignore
        //           config.plugins.push(vuetify())
        //       );
        //   },
    ],

    nitro: {
        compressPublicAssets: true,
    },
    ssr: true,
    typescript: { shim: false, strict: true, },
    // vitalizer: {
    //     disableStylesheets: 'entry',
    //     // delayHydration: {
    //     //     // /**
    //     //     //  * Specify the events that should trigger hydration.
    //     //     //  *
    //     //     //  * @default ['mousemove', 'scroll', 'keydown', 'click', 'touchstart', 'wheel']
    //     //     //  */
    //     //     // hydrateOnEvents?: (keyof WindowEventMap)[]
    //     //     /**
    //     //      * The maximum amount of time to wait in milliseconds when waiting for an idle callback. This is useful when there are a lot of network requests happening.
    //     //      *
    //     //      * @default 8000
    //     //      */
    //     //     idleCallbackTimeout: 8000,
    //     //     /**
    //     //      * Time to wait in milliseconds after the idle callback before hydrating the component.
    //     //      *
    //     //      * @default 4000
    //     //      */
    //     //     postIdleTimeout: 4000,
    //     //   }
    // },
    vite: {
        // build: {
        // 	/* used minifier when transpiling (def "esbuild", false = disable)
        // 	   https://vitejs.dev/config/build-options.html#build-minify */
        // 	minify: "esbuild",
        // 	/* Size reporting for gzip-compressed files.
        // 		Disabling may increase build performance in large projects (def true)
        // 		https://vitejs.dev/config/build-options.html#build-reportcompressedsize */
        // 	reportCompressedSize: false,
        // },
        esbuild: {
            drop: [
                "debugger",
                "console",
            ]
        },
	},
})