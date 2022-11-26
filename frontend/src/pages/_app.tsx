import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../utils/theme';
import createEmotionCache from '../utils/createEmotionCache';

import { sp_view } from '../utils/styleHelper';

const clientSideEmotionCache = createEmotionCache();

type AppProps<P = any> = {
  pageProps: P;
  emotionCache?: EmotionCache;
} & Omit<NextAppProps<P>, 'pageProps'>;

import 'src/styles/reset.scss';
import 'src/styles/common.scss';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const SC = {
  App: styled('div')(({ theme }) => ({
    position: 'relative',
    background: '#f5f6f6',
    minHeight: '100vh',
  })),
  Container: styled('div')(({ theme }) => ({
    display: 'flex',
  })),
  Main: styled('div')(({ theme }) => ({
    flex: '1',
    padding: '40px 0',
    minHeight: 'calc(100vh - 64px)',
  })),
  MainWrapper: styled('div')(({ theme }) => ({
    maxWidth: '1000px',
    margin: '0 auto',
  })),
  Sidebar: styled(Sidebar)(({ theme }) => ({
    transition: 'all 0.25s ease-in-out',
    height: 'calc(100vh - 64px)',
    width: '300px',
    borderRight: `1px solid ${theme.palette.secondary['300']}`,
    [sp_view]: {
      position: 'fixed',
      width: '0',
      opacity: '0',
      top: '0',
      left: '0',
      zIndex: '999',
      background: '#fff',
      '&.active': {
        width: '300px',
        opacity: '1',
      },
    },
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
              <SC.MainWrapper>
                <Component {...pageProps} />
              </SC.MainWrapper>
            </SC.Main>
          </SC.Container>
        </SC.App>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
