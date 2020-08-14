import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Practice from './Practice1';
//import Practice from './Practice1_old';
//import Practice from './Practice2';
//import Practice from './Practice3';

const Hot = hot(Practice);

ReactDOM.render(<Hot />, document.querySelector('#root'));
