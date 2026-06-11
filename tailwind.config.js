/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF9A5C',
          teal:   '#47C89A',
          cyan:   '#00B8C9',
        },
        surface: {
          darker: '#101010',
          dark:   '#161616',
          mid:    '#4B4B4B',
        },
        neutral: {
          muted: '#808080',
          light: '#F0F0F0',
        },
      },
      keyframes: {
        'marquee-up': {
          '0%':   { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        'spin-slow':   'spin 3s linear infinite',
        'marquee-up':  'marquee-up 2s linear infinite',
      },
    },
  },
  plugins: [],
}
