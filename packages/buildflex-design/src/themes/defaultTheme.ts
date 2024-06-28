// defaultTheme.ts
import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  colors: {
    brand: '#00A9FF',
    primary: {
      900: '#042A49',
      800: '#043658',
      700: '#064370',
      600: '#075791',
      500: '#1379C2',
      400: '#2893DD',
      300: '#41A4E3',
      200: '#6FBFEF',
      100: '#A4D7F6',
      50: '#D4EDFC',
    },
    grayscale: {
      900: '#1F2A37',
      800: '#374151',
      700: '#4B5563',
      600: '#6B7280',
      500: '#9CA3AF',
      400: '#D1D5DB',
      300: '#E5E7EB',
    },
    semantic: {
      information: {
        500: '#0369A1',
        300: '#7DD3FC',
        100: '#E0F2FE',
      },
      success: {
        500: '#22C55E',
        300: '#86EFAC',
        100: '#DCFCE7',
      },
      warning: {
        500: '#F59E0B',
        300: '#FCD34D',
        100: '#FEF3C7',
      },
      error: {
        500: '#EF4444',
        300: '#FCA5A5',
        100: '#FEE2E2',
      },
    },
    background: {
      light: '#FFFFFF',
      dark: '#F9FAFB',
    },
    trend: {
      green: {
        500: '#10B981',
        400: '#34D399',
      },
      red: {
        500: '#EF4444',
        400: '#F87171',
      },
    },
  },
  fonts: {
    primary: 'Inter, Lato, sans-serif',
    secondary: 'Helvetica, sans-serif',
  },
  fontSizes: {
    small: `${12 / 16}rem`, // 12px / 16px = 0.75rem
    medium: `${16 / 16}rem`, // 16px / 16px = 1rem
    large: `${20 / 16}rem`, // 20px / 16px = 1.25rem
  },
  sizes: {
    sizeXXL: `${48 / 16}rem`, // 48px / 16px = 3rem
    sizeXL: `${32 / 16}rem`, // 32px / 16px = 2rem
    sizeLG: `${24 / 16}rem`, // 24px / 16px = 1.5rem
    sizeMD: `${20 / 16}rem`, // 20px / 16px = 1.25rem
    sizeSM: `${16 / 16}rem`, // 16px / 16px = 1rem
    size: `${16 / 16}rem`, // 16px / 16px = 1rem
    sizeXS: `${12 / 16}rem`, // 12px / 16px = 0.75rem
    sizeXXS: `${8 / 16}rem`, // 8px / 16px = 0.5rem
    sizeXXXS: `${4 / 16}rem`, // 4px / 16px = 0.25rem
  },
  spaces: {
    padding: `${16 / 16}rem`, // 16px / 16px = 1rem
    paddingXXS: `${4 / 16}rem`, // 4px / 16px = 0.25rem
    paddingXS: `${8 / 16}rem`, // 8px / 16px = 0.5rem
    paddingSM: `${12 / 16}rem`, // 12px / 16px = 0.75rem
    paddingMD: `${20 / 16}rem`, // 20px / 16px = 1.25rem
    paddingLG: `${24 / 16}rem`, // 24px / 16px = 1.5rem
    paddingXL: `${32 / 16}rem`, // 32px / 16px = 2rem
    paddingXXL: `${48 / 16}rem`, // 48px / 16px = 3rem
    margin: `${16 / 16}rem`, // 16px / 16px = 1rem
    marginXXS: `${4 / 16}rem`, // 4px / 16px = 0.25rem
    marginXS: `${8 / 16}rem`, // 8px / 16px = 0.5rem
    marginSM: `${12 / 16}rem`, // 12px / 16px = 0.75rem
    marginMD: `${20 / 16}rem`, // 20px / 16px = 1.25rem
    marginLG: `${24 / 16}rem`, // 24px / 16px = 1.5rem
    marginXL: `${32 / 16}rem`, // 32px / 16px = 2rem
    marginXXL: `${48 / 16}rem`, // 48px / 16px = 3rem
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export default defaultTheme;
