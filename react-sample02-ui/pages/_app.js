import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { enableES5, setAutoFreeze } from 'immer'
import wrapper from 'store/configureStore';

enableES5();
setAutoFreeze(process.env.NODE_ENV !== 'production')

const NextProject = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NEXT PROJECT</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </Head>
      <Component />
    </>
  );
};

NextProject.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NextProject);
