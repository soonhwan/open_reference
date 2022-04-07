import Head from 'next/head';
import type { AppProps } from "next/app";
import styles from "styles";
import { NavSkip } from "components";

const { GlobalStyles, ThemeProvider, theme } = styles;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        <title>W Concept</title>
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavSkip />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
