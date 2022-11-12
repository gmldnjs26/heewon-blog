import styled from 'styled-components';
import { sp_view } from '../utils/mediaQuery';
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

import 'src/styles/reset.scss';
import 'src/styles/common.scss';

import Navigation from '../components/Navigation';
import Link from 'next/link';

const StApp = styled.div`
  width: 1000px;
  margin: auto;
  ${sp_view} {
    width: 100%;
  }
`;

const StLink = styled(Link)`
  display: inline-block;
  margin-top: 16px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #2c3e50;
  ${sp_view} {
    padding: 0 16px;
    font-size: 1.2rem;
  }
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
          <StLink href="/">똑같은 삽질은 2번 하지 말자</StLink>
          <Navigation styles={{ mt: '16px' }} />
          <Component {...pageProps} />
        </StApp>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
