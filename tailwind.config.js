/** @type {import('tailwindcss').Config} */
let plugin = require("tailwindcss/plugin")
module.exports = {
  darkMode: "class",
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ], 
  theme: {
    extend: {
      fontSize: {
        'mammoth': ['10rem', { lineHeight: '1rem' }],
        xs: ['0.75rem', { lineHeight: '0.8rem' }],
        xxs: ['0.25rem', { lineHeight: '1rem' }],
      },
      colors: {
        main: {
          500: "#17143D"
        }
      },
      height: {
        '40vh': '40vh',
        '30vh': '30vh',
        '60vh': '60vh'
      },
      keyframes: {

      },
      animation: {
        "load-spin": "spin .3s infinite linear",
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      backgroundImage: {
        'auth-portrait': "url('/images/bg_1080x1920.jpg')",
        'auth-landscape': "url('/images/bg_1920x1080.jpg')",
        'auth-portrait-lg': "linear-gradient(195deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/images/bg_1080x1920.jpg')",
        'auth-landscape-lg': "linear-gradient(195deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('/images/bg_1920x1080.jpg')",
        'brand': "url('/icons/rcn-lagos-white.svg')",
        'dark-overlay': "linear-gradient(195deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5))"
      },
      fontFamily: {
        body: ['Poppins', '"DM Sans"'],
        title: ['Anton']
      },
      scale: {
        98: ".98"
      },
      blur: {
        xs: "2px"
      }
    }
  },
}