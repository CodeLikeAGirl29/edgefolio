const defaultTheme = require('tailwindcss/defaultTheme')
const themes = require('./styles/themes')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: [
              {
                maxWidth: 'inherit',
                lineHeight: theme('lineHeight.snug'),
                // These default styles are overridden in global.css
                h1: {
                  fontSize: null,
                  lineHeight: null,
                  fontWeight: null,
                },
                h2: {
                  fontSize: null,
                  lineHeight: null,
                  fontWeight: null,
                },
                h3: {
                  fontSize: null,
                  lineHeight: null,
                  fontWeight: null,
                },
                h4: {
                  fontSize: null,
                  lineHeight: null,
                  fontWeight: null,
                },
                h5: {
                  color: 'var(--tw-prose-headings)',
                  marginTop: theme('margin.6'),
                  marginBottom: theme('margin.4'),
                },
                h6: {
                  color: 'var(--tw-prose-headings)',
                  marginTop: theme('margin.6'),
                  marginBottom: theme('margin.4'),
                },
                figcaption: {
                  margin: 0,
                  paddingTop: theme('padding.4'),
                  paddingBottom: theme('padding.4'),
                  textAlign: 'center',
                  backgroundColor: theme('colors.omega.800'),
                  color: theme('colors.omega.400'),
                },
                ':is(h1, h2, h3, h4, h5, h6):first-child': {
                  marginTop: '0',
                },
                'figure:first-child > img': {
                  marginTop: '0',
                },
                blockquote: {
                  fontWeight: theme('fontWeight.normal'),
                },
                a: {
                  textDecoration: 'none',
                },
                th: {
                  backgroundColor: theme('colors.omega.800'),
                },
                'td, th': {
                  paddingTop: theme('padding.2'),
                  paddingBottom: theme('padding.2'),
                  paddingRight: theme('padding.4'),
                  paddingLeft: theme('padding.4'),
                },
                code: {
                  fontWeight: theme('fontWeight.normal'),
                },
                'code::before': {
                  content: '""',
                },
                'code::after': {
                  content: '""',
                },
                'ul > li > *:first-child': {
                  margin: 0,
                },
                'ul > li > *:last-child': {
                  margin: 0,
                },
              },
            ],
          },
        }
      },
      gridTemplateColumns: {
        fluid:
          'repeat(auto-fit, minmax(var(--tw-fluid-col-min, 20rem), var(--tw-fluid-col-max, 1fr)))',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in forwards',
        'grow-in': 'grow-in 0.25s ease-in-out forwards',
        blink: 'blink-caret .75s steps(17, end) infinite',
        // typewriter: 'typing 2s steps(30, end)',
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'grow-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        typing: {
          '0%': { width: 0 },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '50%': { opacity: 0 },
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('./utils/tailwindcss-plugin-theme.js')({
      themes,
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles
    }),
    require('tailwind-scrollbar'),
  ],
}
