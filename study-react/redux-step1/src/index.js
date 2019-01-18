import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
// redux
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

/*
ReactDOM.render(<App />, document.getElementById('root'));
*/

/*
액션이 발생
state를 관리하는 store쪽으로 요청
리듀서 처리
액션을 통해 결과를 받아야될 컴포넌트 <- store를 계속 구독중
지켜보고 있다가 결과 나오면 받아감
*/
const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension()); 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
   
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



 