import type { AppProps } from 'next/app';
import { Layout } from '../components/layouts';
import { StyledThemeProvider } from '../styles/StyledThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledThemeProvider>
  );
}

export default MyApp;
