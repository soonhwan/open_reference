import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { enableES5, setAutoFreeze } from 'immer'
import wrapper from 'store/configureStore';
import 'antd/dist/antd.css';

enableES5();
setAutoFreeze(process.env.NODE_ENV !== 'production')

const NextProject = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NEXT PROJECT</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Component />
    </>
  );
};

NextProject.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NextProject);
