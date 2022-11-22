import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },

  palette: {
    primary: {
      main: '#eec07b',
      '100': '#fdf8f1',
      '200': '#fbf2e4',
      '300': '#f8e5ca',
      '400': '#f4d9af',
      '500': '#f1cc95',
      '600': '#be9962',
      '700': '#8e7349',
      '800': '#5f4c31',
      '900': '#2f2618',
    },
    secondary: {
      main: '#d8c4aa',
      '100': '#fbf9f6',
      '200': '#f7f3ee',
      '300': '#efe7dd',
      '400': '#e7dbcc',
      '500': '#dfcfbb',
      '600': '#ac9c88',
      '700': '#817566',
      '800': '#564e44',
      '900': '#2b2722',
    },
    info: {
      main: '#c9b0ba',
      '100': '#fbf9f6',
      '200': '#f7f3ee',
      '300': '#efe7dd',
      '400': '#e7dbcc',
      '500': '#dfcfbb',
      '600': '#ac9c88',
      '700': '#817566',
      '800': '#564e44',
      '900': '#2b2722',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
