import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

//import NumberBaseball from './NumberBaseballClass';
//import NumberBaseball from './NumberBaseball';
import NumberBaseball from './NumberBaseball2';
//import NumberBaseball from './TestClass';
//import NumberBaseball from './TestClass2';

const Hot = hot(NumberBaseball);

ReactDOM.render(<Hot />, document.querySelector('#root'));
