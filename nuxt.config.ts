// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    components: {
        dirs: []
    },
    css: [
        '@/styles/css/tailwind.css',
    ],
    experimental: {
        renderJsonPayloads: false,
    },
    modules: [
    'nuxt-booster',
    'nuxt-quasar-ui',
    '@nuxtjs/tailwindcss',
    ],
    nitro: {
      compressPublicAssets: true,
  },
  booster: {

    detection: {
      performance: true,
      browserSupport: true
    },
    fonts: [{
            family: 'Roboto',
            locals: ['Roboto'],
            fallback: ['Georgia', 'sans-serif'],
            variances: [
                {
                    style: 'normal',
                    weight: 900,
                    sources: [
                        {
                            src: '@/assets/fonts/roboto/roboto-black.woff',
                            type: 'woff'
                        },
                    ]
                },
                    {
                        style: 'italic',
                        weight: 900,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto/roboto-black-italic.woff',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'normal',
                        weight: 700,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto/roboto-bold.woff',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'italic',
                        weight: 700,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto/roboto-bold-italic.woff',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'italic',
                        weight: 500,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto/roboto-italic.woff',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'normal',
                        weight: 300,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto/roboto-light.woff',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'italic',
                        weight: 300,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto/roboto-light-italic.woff',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'normal',
                        weight: 500,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto/roboto-medium.woff',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'italic',
                        weight: 500,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto/roboto-medium-italic.woff',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'normal',
                        weight: 400,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto/roboto-regular.woff',
                                type: 'woff'
                            },
                        ]
                    },
                    {
                        style: 'normal',
                        weight: 100,
                        sources: [
                            {
                                src: '@/assets/fonts/roboto/roboto-thin.woff',
                                type: 'woff'
                            },
                        ]
                    },
                    // {
                    //     style: 'italic',
                    //     weight: 100,
                    //     sources: [
                    //         {
                    //             src: '@/assets/fonts/roboto/roboto-thin-italic.woff',
                    //             type: 'woff'
                    //         },
                    //     ]
                    // },
                ]
            }

        ],

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
    ssr: true,
})
