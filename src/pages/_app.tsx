import type { AppProps } from 'next/app';
import { Layout } from '../components/layouts';
import { SliderProvider } from '../context';
import { StyledThemeProvider } from '../styles/StyledThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider>
      <SliderProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SliderProvider>
    </StyledThemeProvider>
  );
}

export default MyApp;
