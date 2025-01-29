// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    css: [
        '@/styles/css/tailwind.css',
    ],
    experimental: {
        renderJsonPayloads: false,
    },
    features: {
        inlineStyles: true,
        devLogs: false,
    },
    modules: [
        'nuxt-vitalizer',
        'nuxt-quasar-ui',
        '@nuxtjs/tailwindcss',
    ],
    nitro: {
        compressPublicAssets: true,
    },
    quasar: {
        plugins: [
          'BottomSheet',
          'Dialog',
          'Loading',
          'LoadingBar',
          'Notify',
          'Dark',
        ],
        extras: {
          font: 'roboto-font',
        },
        components: {
          defaults: {
            QBtn: {
              unelevated: true,
            },
          },
        },
    },
    typescript: { shim: false, strict: true, },
    vitalizer: {
        disableStylesheets: 'entry'
    },
    vite: {
        esbuild: {
            drop: [
                "debugger",
                "console",
            ]
        },
    },
})
