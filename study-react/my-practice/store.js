import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware())
  : composeWithDevTools(applyMiddleware());

const store = createStore(reducer, enhancer);

export default store;