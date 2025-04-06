/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-60px)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateX(0)', filter: 'blur(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(60px)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateX(0)', filter: 'blur(0)' },
        },
        'fade-in-bottom': {
          '0%': { opacity: '0', transform: 'translateY(60px)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 2s ease-out forwards',
        'fade-in-right': 'fade-in-right 2s ease-out forwards',
        'fade-in-bottom': 'fade-in-bottom 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
