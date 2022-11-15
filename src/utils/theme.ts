import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
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
      '100': '#f9ecd7',
      '200': '#f8e5ca',
      '300': '#f6dfbd',
      '400': '#f3d2a2',
      '500': '#d6ac6e',
      '600': '#be9962',
      '700': '#a68656',
      '800': '#8e7349',
      '900': '#77603d',
    },
    secondary: {
      main: '#d8c4aa',
      '100': '#ebe1d4',
      '200': '#e7dbcc',
      '300': '#e3d5c3',
      '400': '#dfcfbb',
      '500': '#c2b099',
      '600': '#ac9c88',
      '700': '#978976',
      '800': '#817566',
      '900': '#6c6255',
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
