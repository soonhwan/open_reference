import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { enableES5, setAutoFreeze } from 'immer'
import wrapper from 'store/configureStore';
import { ConfigProvider } from 'styles/antd';
import ko_KR from 'antd/lib/locale/ko_KR';
import 'antd/dist/antd.min.css';
import styles from 'styles';

const { Global } = styles;
enableES5();
setAutoFreeze(process.env.NODE_ENV !== 'production')

const NextProject = ({ Component }) => {

  return (
    <>
      <Global />
      <Head>
        <meta charSet="utf-8" />
        <title>NEXT PROJECT</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
      </Head>
      <ConfigProvider locale={ko_KR}>
        <Component />
      </ConfigProvider>
    </>
  );
};

NextProject.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NextProject);
