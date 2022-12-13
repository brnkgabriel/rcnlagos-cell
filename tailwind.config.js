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
        rcnblue: {
          500: "#17143D"
        },
        rcnorange: {
          500: "#FD6C03"
        },
        rcnred: {
          500: "#F71103"
        },
        rcngray: {
          500: "#f5f5f5",
          700: "#eaeded",
          900: "#75757a"
        }
      },
      boxShadow: {
        "custom": "0 2px 5px 0 rgb(0 0 0 / 5%)"
      },
      width: {
        'details': 'calc(100% - 150px)'
      },
      height: {
        '60%' : '60%',
        '40%' : '40%',
        'middle': 'calc(100% - 128px)',
        'listheight': 'calc(100% - 207px)'
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