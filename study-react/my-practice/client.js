import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import Main from './Main';

import { Provider } from 'react-redux';
import store from './store'; // 가변적인 store

const Hot = hot(Main);

ReactDOM.render(
  <Provider store={store}>
    <Hot />
  </Provider>,
  document.querySelector('#root')
);
