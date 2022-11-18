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
    display: 'flex',
  })),
  Main: styled('div')(({ theme }) => ({
    flex: '1',
    maxWidth: '1000px',
    margin: '0 auto',
    width: '100%',
  })),
  Sidebar: styled(Sidebar)(({ theme }) => ({
    height: '100vh',
    width: '300px',
    borderRight: `1px solid ${theme.palette.secondary['300']}`,
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
          <SC.Container>
            <SC.Sidebar />
            <SC.Main>
              <Navigation styles={{ my: '16px' }} />
              <Component {...pageProps} />
            </SC.Main>
          </SC.Container>
        </SC.App>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
