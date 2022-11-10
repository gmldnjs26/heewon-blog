import { AppProps as NextAppProps } from 'next/app';
type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, 'pageProps'>;

import 'src/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = ({ Component, pageProps }: AppProps<any>) => {
  return <Component {...pageProps} />;
};

export default App;
