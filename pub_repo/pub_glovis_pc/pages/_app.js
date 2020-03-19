import App from "next/app";
import React from "react";
import { CookiesProvider } from 'react-cookie';
import withReduxStore from "@src/store/with-redux-store";
import { Provider } from "react-redux";

class AutobellApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      </Provider>
    );
  }
}

export default withReduxStore(AutobellApp);
