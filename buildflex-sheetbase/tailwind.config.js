const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html,js,jsx}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        borderColor: '#EDEDED',
        brand: {
          PRIMARY: '#15A0A3',
          'bf-gradient-start': '#21D4A7',
          'bf-gradient-end': '#0DA8D3',
        },
        theme: {
          'ocean-blue': '#087AAF',
          'midnight-gray': '#333F53',
          'royal-purple': '#6840C4',
          'crimson-red': '#B12318',
          'burnt-orange': '#B24608',
          'forest-green': '#027947',
          'steel-blue': '#353E70',
          'magenta-pink': '#BF1573',
          'ruby-red': '#BE1048',
        },
        primary: {
          PRIMARY: '#0BA5EC',
          50: '#F0F9FF',
          100: '#F2F4F7',
          200: '#B9E6FE',
          300: '#7CD4FD',
          600: '#087AAF',
          700: '#026AA2',
          800: '#065B89',
          900: '#062538',
        },
        gradient: {
          'sheet-base-start': '#076D9C',
          'sheet-base-end': '#014F7A',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#D0D5DD',
          300: '#667085',
          400: '#344054',
          500: '#101828',
        },
        semantic: {
          DEFAULT: '#0D7FAB',
          50: '#E3EEF2',
          100: '#86BFD4',
          600: '#0D7FAB',
        },
        success: {
          DEFAULT: '#12B981',
          50: '#ECFBF3',
          100: '#D1FAE5',
          200: '#88DCBF',
          600: '#12B981',
        },
        warning: {
          DEFAULT: '#FCBF25',
          50: '#FFFAF0',
          100: '#FFE9B2',
          200: '#FDDF92',
          600: '#FCBF25',
        },
        danger: {
          DEFAULT: '#F87171',
          50: '#FEF0EF',
          100: '#FAC8BE',
          200: '#FBB7B7',
          400: '#F87171',
        },
        neutral: {
          TERTIARY: '#FEFEFE',
          50: '#F9FAFB',
          200: '#CACFD8',
          500: '#F9FAFB',
        },
        'neutral-dark': {
          100: '#F9FAFB',
          300: '#6A758B',
          400: '#3E4D65',
          500: '#101828',
        },
      },
      // lineHeight: {
      //   3: '1.2rem',
      //   4: '1.6rem',
      //   5: '2.0rem',
      //   6: '2.4rem',
      //   7: '2.8rem',
      //   8: '3.2rem',
      //   9: '3.6rem',
      //   10: '4.0rem',
      // },
      fontFamily: {
        sans: [
          'Lato',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        lato: ['Lato', 'sans-serif'],
        sourceCodePro: ['Source Code Pro', 'monospace'],
      },
      // fontSize: {
      //   xs: ['1.2rem', { lineHeight: '1.6rem' }],
      //   sm: ['1.4rem', { lineHeight: '2.0rem' }],
      //   base: ['1.6rem', { lineHeight: '2.4rem' }],
      //   lg: ['1.8rem', { lineHeight: '2.3rem' }],
      //   xl: ['2.0rem', { lineHeight: '2.6rem' }],
      //   '2xl': ['2.4rem', { lineHeight: '3.2rem' }],
      //   '3xl': ['2.8rem', { lineHeight: '3.6rem' }],
      //   '4xl': ['3.6rem', { lineHeight: '4.6rem' }],
      // },
      // spacing: {
      //   px: '.1rem',
      //   0.5: '.2rem',
      //   1: '.4rem',
      //   1.5: '.6rem',
      //   2: '.8rem',
      //   2.5: '1.0rem',
      //   3: '1.2rem',
      //   3.5: '1.4rem',
      //   4: '1.6rem',
      //   5: '2.0rem',
      //   6: '2.4rem',
      //   7: '2.8rem',
      //   8: '3.2rem',
      //   9: '3.6rem',
      //   10: '4.0rem',
      //   11: '4.4rem',
      //   12: '4.8rem',
      //   13.5: '5.4rem',
      //   14: '5.6rem',
      //   16: '6.4rem',
      //   20: '8.0rem',
      //   24: '9.6rem',
      //   28: '11.2rem',
      //   32: '12.8rem',
      //   36: '14.4rem',
      //   40: '16.0rem',
      //   44: '17.6rem',
      //   48: '19.2rem',
      //   52: '20.8rem',
      //   56: '22.4rem',
      //   60: '24.0rem',
      //   64: '25.6rem',
      //   72: '28.8rem',
      //   80: '32.0rem',
      //   96: '38.4rem',
      //   34: '8.5rem',
      //   68: '27.2rem',
      //   82.5: '33.0rem',
      //   90: '36.0rem',
      //   100: '40.0rem',
      //   106: '42.4rem',
      //   200: '80.0rem',
      // },
      // borderRadius: {
      //   xs: '.2rem',
      //   sm: '.4rem',
      //   DEFAULT: '.8rem',
      //   md: '.6rem',
      //   lg: '.8rem',
      //   xl: '1.2rem',
      //   '2xl': '1.6rem',
      //   '3xl': '2.4rem',
      // },
      // minWidth: (theme) => ({
      //   ...theme('spacing'),
      // }),
      // maxWidth: (theme) => ({
      //   ...theme('spacing'),
      //   0: '0rem',
      //   xs: '32.0rem',
      //   sm: '38.4rem',
      //   md: '44.8rem',
      //   lg: '51.2rem',
      //   xl: '57.6rem',
      //   '2xl': '67.2rem',
      //   '3xl': '76.8rem',
      //   '4xl': '89.6rem',
      //   '5xl': '102.4rem',
      //   '6xl': '115.2rem',
      //   '7xl': '128.0rem',
      // }),
      backgroundImage: (theme) => ({
        'gradient-ocean-blue':
          'linear-gradient(94.88deg, #076D9C 0%, #014F7A 100%)',
        'gradient-midnight-gray':
          'linear-gradient(94.88deg, #344054 0%, #1D2939 100%)',
        'gradient-royal-purple':
          'linear-gradient(94.88deg, #6941C6 0%, #53389E 100%)',
        'gradient-crimson-red':
          'linear-gradient(94.88deg, #B42318 0%, #912018 100%)',
        'gradient-burnt-orange':
          'linear-gradient(94.88deg, #B54708 0%, #93370D 100%)',
        'gradient-forest-green':
          'linear-gradient(94.88deg, #027A48 0%, #05603A 100%)',
        'gradient-steel-blue':
          'linear-gradient(94.88deg, #363F72 0%, #293056 100%)',
        'gradient-magenta-pink':
          'linear-gradient(94.88deg, #C11574 0%, #9E165F 100%)',
        'gradient-ruby-red':
          'linear-gradient(94.88deg, #C01048 0%, #A11043 100%)',
      }),
    },
  },
  plugins: [require('@tailwindcss/forms')],

};
