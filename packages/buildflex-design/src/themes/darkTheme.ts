// darkTheme.ts
import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
  colors: {
    primary: '#177ddc',
    secondary: '#1f1f1f',
    background: '#141414',
    text: '#ffffff',
    success: '#49aa19',
    warning: '#d89614',
    error: '#a61d24',
  },
  fonts: {
    primary: 'Arial, sans-serif',
    secondary: 'Helvetica, sans-serif',
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export default darkTheme;
