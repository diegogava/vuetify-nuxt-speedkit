/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // './*.vue',
        // './layouts/**/*.vue',
        // './pages/**/*.vue',
        // './pages-custom/**/*.vue',
        // './components/**/*.vue'
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./pages-custom/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    //   important: '#__nuxt',
    //important: '#app',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        fontSize: {
          xs: ['12px', '16px'],
          sm: ['14px', '20px'],
          base: ['16px', '24px'],
          lg: ['20px', '28px'],
          xl: ['24px', '32px'],
          xl: ['24px', '32px'],
          '2xl': ['30px', '36px'],
          '3xl': ['36px', '40px'],
          '4xl': ['42px', '48px'],
          '5xl': ['54px', '60px'],
          '6xl': ['66px', '72px'],
          '7xl': ['72px', '80px'],
          '8xl': ['86px', '92px'],
          '9xl': ['92px', '98px'],
        },
        extend: {
            colors: {
                primary: '#FF1744',
                secondary: '#FFFFFF',
                background: '#0D0D0E',
            },
        },
        screens: {
          'xs': {'max': '480px'},
          // => @media (max-width: 480px) { ... }

          'sm': {'min': '480px', 'max': '767px'},
          // => @media (min-width: 480px and max-width: 767px) { ... }

          'md': {'min': '768px', 'max': '1023px'},
          // => @media (min-width: 768px and max-width: 1023px) { ... }

          'lg': {'min': '1024px', 'max': '1279px'},
          // => @media (min-width: 1024px and max-width: 1279px) { ... }

          'xl': {'min': '1280px', 'max': '1535px'},
          // => @media (min-width: 1280px and max-width: 1535px) { ... }

          '2xl': {'min': '1536px'},
          // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
}

