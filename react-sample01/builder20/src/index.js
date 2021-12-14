import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import StyleContext from 'isomorphic-style-loader/StyleContext' // ssr style 적용 처리
// import 'react-app-polyfill/ie9' // For IE 9-11 support - ie11만 사용할 시 정상동작 하지 않는 이슈가 있어 9 사용
import * as serviceWorker from './serviceWorker'
import configureStore from './store'
import configureAxios from './store/configureAxios'
import App from './App'


const store = configureStore(window.__PRELOADED_STATE__); configureAxios();

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  // console.log('========== insertCss=========')
  // console.log(styles)
  // console.log(removeCss)
  return () => removeCss.forEach(dispose => dispose())
}

const app = (
  <StyleContext.Provider value={{ insertCss }}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StyleContext.Provider>
)

const rootElement = document.getElementById('root')

if (window.ssr) {
  ReactDOM.hydrate(app, rootElement)
} else {
  ReactDOM.render(app, rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
