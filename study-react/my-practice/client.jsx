import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Practice from './Practice1';

const Hot = hot(Practice);

ReactDOM.render(<Hot />, document.querySelector('#root'));
