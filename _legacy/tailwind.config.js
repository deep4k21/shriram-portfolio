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
      // Type scale from the Figma spec (1920x1080 canvas, px values converted
      // to rem at 16px root = 1920px viewport). The root font-size in index.css
      // scales with viewport width, so these stay proportional to the design
      // at any screen size. Assign per-element as design specifies which text
      // is Header / Sub header / Title / Body, etc.
      fontSize: {
        header:    '5.125rem', // 82px
        subheader: '3rem',     // 48px
        title:     '1.875rem', // 30px
        body:      '1.75rem',  // 28px
      },
      // Icon and padding sizes from the Figma spec, same rem-based approach
      // as fontSize above — scales with the root font-size breakpoints in
      // index.css.
      spacing: {
        icon:    '3.625rem', // 58px
        section: '2.5rem',   // 40px — standard section/card padding
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
