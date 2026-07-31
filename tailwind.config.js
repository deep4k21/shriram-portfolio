/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'fs-heading': '5.125rem',      // 82px
        'fs-subheading': '3rem',       // 48px
        'fs-body-title': '1.875rem',   // 30px
        'fs-body-subtitle': '1.75rem', // 28px
        'fs-body-small': '1.375rem',   // 22px
        'fs-nav': '1.125rem',          // 18px
      },
      colors: {
        background: '#101010',
        section: '#16181D',
        heading: '#00B8C9',
        subheading: {
          orange: '#FF9A5C',
          green: '#47C89A',
        },
        body: {
          grey: '#89919F',
          white: '#F0F0F0',
        },
        sidebar: {
          selected: '#626975',
        },
      },
    },
  },
  plugins: [],
}
