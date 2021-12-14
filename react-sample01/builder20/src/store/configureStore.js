// import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import penderMiddleware from 'redux-pender';
// import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { apiMiddleware } from 'redux-api-middleware';
import modules from './modules';
import axios from 'axios';
import { IS_BROWSER } from '_constants';
import utils from 'utils';

const isDev = process.env.NODE_ENV === 'development'; // 환경이 개발모드인지 확인
// export const browserHistory = window ? createBrowserHistory() : null;

const configureStore = (initialState, history) => {
  let store;
  
  if (IS_BROWSER) {
    // browser
    // 개발모드이면서 ie가 아닐때만 리덕스 개발자도구 적용
    const composeEnhancers = (isDev && !utils.isExplorer()) ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;
    store = createStore(
      modules(history),
      initialState,
      composeEnhancers(
        applyMiddleware(
          // routerMiddleware(history),
          penderMiddleware(),
          thunk,
          // apiMiddleware, 
        )
      )
    );
  } else {
    // server
    store = createStore(
      modules(), // reducer,
      initialState,
      applyMiddleware(
        // routerMiddleware(), // for dispatching history actions
        penderMiddleware(),
        thunk, 
        // apiMiddleware, 
        // logger
      ),
    )
  }

  // hot-reloading
  if (module.hot) {
    module.hot.accept('./modules', () => store.replaceReducer(modules(history)));
  }

  return store;
}

export default configureStore;
