import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import stats from '../../_build_front/react-loadable.json';
import stats from '../../../resources/nbook20/react-loadable.json';
import App from '../App';
import prefetchConfig from './prefetchConfig.js';
import configureStore from 'store';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import 'react-app-polyfill/ie9'; // For IE 9-11 support


function nlog(...props) {
  console.log(...props);
}

// 이미 만들어진 indexHtml 을 기반으로 수정 할 것이기에
// 미리 불러온다.
const indexHtml = fs.readFileSync(
  // path.resolve(process.cwd(), '_build_front/index.html'),
  path.resolve(process.cwd(), '../resources/nbook20/index.html'),
  'utf8'
);


// index.html 에 변화를 일으킨다.
function createPage(rootHtml, bundles, state) {
  let html = indexHtml;

  nlog('======= bundles =======');
  nlog(bundles);
  nlog('\n\n');

  // 스플리팅된 자바스크립트
  const chunkScripts = bundles
    .filter(bundle => bundle.file.match(/.js$/))
    .map(bundle => `<script src="${bundle.publicPath}"></script>`)
    .join('\n');

  // 스플리팅된 스타일
  const chunkStyles = bundles
    .filter(bundle => bundle.file.match(/.css$/))
    .map(bundle => `<link href="${bundle.publicPath}" rel="stylesheet">`)
    .join('\n');

  // 렌더링 결과를 root 안에 집어넣기
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${rootHtml}</div>`
  );

  // 메타 태그 설정 (+ 스플리팅된 스타일 로딩)
  html = html.replace('</head>', `${chunkStyles}</head>`);

  // 커스텀 스크립트 정의
  const customScripts = `<script>
    window.ssr = true;
    window.__PRELOADED_STATE__ = ${JSON.stringify(state).replace(
      /</g,
      '\\u003c'
    )};
    window.shouldCancel = true;
  </script>`;

  // 커스텀스크립트 적용 + 스플리팅된 스크립트 로딩
  const mainScript = html.match(
    /<script src="\/resources\/nbook20\/static\/js\/main..*.chunk.js"><\/script>/
  )[0];

  html = html.replace(
    mainScript,
    `${customScripts}${chunkScripts}${mainScript}`
  );

  return html;
}

// 서버렌더링 함수
const serverRender = async (req, res) => {
  // 스토어 생성
  const store = configureStore();

  // 데이터 미리 불러오기
  console.log('======= server prefetchConfig =======');
  const promises = [];
  prefetchConfig.forEach(route => {
    console.log(req.path, route);
    const match = matchPath(req.path, route);
    if (match) {
      console.log('~~~~~~ match ==> ', match);
      const p = route.prefetch(store, match.params);
      promises.push(p);
    }
  });

  try {
    await Promise.all(promises);
  } catch (e) {
    console.log('========******========> prefetchConfig ERROR');
    console.log(e);
  }

  // Loadable.Capture 는 렌더링 과정에서 어떤 컴포넌트들이 사요되었는지 트래킹함
  const css = new Set() // CSS for all rendered React components
  
  const insertCss = (...styles) => {
    return styles.forEach(style => css.add(style._getCss()))
  }

  const modules = [];
  const rootHtml = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <StyleContext.Provider value={{ insertCss }}>
        <Provider store={store}>
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        </Provider>
      </StyleContext.Provider>
    </Loadable.Capture>
  );

  const state = store.getState();

  // 전달받은 modules 와 stats 정보에 기반하여 bundles 배열을 만든다.
  const bundles = getBundles(stats, modules);

  // 렌더링된 결과 / bundles 를 가지고 html 을 생성하여 사용자에게 전달
  res.send(createPage(rootHtml, bundles, state));
};

export default serverRender;