const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        main: '#0E6B6C',
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
  plugins: [],
};
