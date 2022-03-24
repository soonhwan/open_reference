import "../styles/globals.css";
import type { AppProps } from "next/app";
import styles from "styles";

const { GlobalStyles, ThemeProvider, theme } = styles;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
