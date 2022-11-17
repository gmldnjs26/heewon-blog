import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

type AppProps<P = any> = {
  pageProps: P;
  emotionCache?: EmotionCache;
} & Omit<NextAppProps<P>, 'pageProps'>;

import 'src/styles/reset.scss';
import 'src/styles/common.scss';

import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const SC = {
  App: styled('div')(({ theme }) => ({
    position: 'relative',
    background: '#f5f6f6',
    height: '100vh',
  })),
  Container: styled('div')(({ theme }) => ({
    maxWidth: '1000px',
    margin: '0 auto',
    width: '100%',
  })),
  Sidebar: styled(Sidebar)(({ theme }) => ({
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100vh',
  })),
};

const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppProps<any>) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SC.App>
          <Header />
          <SC.Sidebar />
          <SC.Container>
            <Navigation styles={{ my: '16px' }} />
            <Component {...pageProps} />
          </SC.Container>
        </SC.App>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
