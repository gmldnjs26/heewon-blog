import type { AppPropsWithLayout } from 'next/app';

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
} & Omit<AppPropsWithLayout<P>, 'pageProps'>;

import '~/styles/reset.scss';
import '~/styles/common.scss';
import DefaultLayout from '~/layouts/DefaultLayout';
import { PostContextProvider } from '~/context/post-context';
import { UIContextProvider } from '~/context/ui-contenxt';

const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppProps<any>) => {
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <UIContextProvider>
          <PostContextProvider>{getLayout(<Component {...pageProps} />)}</PostContextProvider>
        </UIContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
