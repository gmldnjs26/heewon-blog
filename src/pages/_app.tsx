import { AppProps as NextAppProps } from 'next/app';
import { ReactElement } from 'react';
type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, 'pageProps'>;

import 'src/styles/globals.css';

const App = ({ Component, pageProps }: AppProps<ReactElement>) => {
  return <Component {...pageProps} />;
};

export default App;
