import { ThemeProvider } from 'styled-components';
import '@/styles/style.scss';

const theme = {
  colors: {
    primary: '#0E2349',
    secondary: '#DD164C',
    pale: '#C0CADC'
  },
  textColors: {
    black: '#34363A',
    white: '#ffffff'
  },
  borderColors: {
    primary: '#CED8EA'
  },
  linkHover: {
    primary: 'hsla(225, 50%, 50%, 0.1)'
  },
  hover: {
    primary: 'hsla(219, 67%, 17%, .8)'
  },
  breakpoints: {
    xl: 1450,
    lg: 1280,
    md: 960,
    sm: 600,
    xs: 0
  }
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
