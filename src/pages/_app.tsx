import styled from 'styled-components';
import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

type AppProps<P = any> = {
  pageProps: P;
  emotionCache?: EmotionCache;
} & Omit<NextAppProps<P>, 'pageProps'>;

import 'src/styles/globals.scss';
import Navigation from '../components/Navigation';

const StApp = styled.div`
  width: 1000px;
  margin: auto;
`;

const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppProps<any>) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <StApp>
          <Navigation styles={{ mt: '16px' }} />
          <Component {...pageProps} />
        </StApp>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
