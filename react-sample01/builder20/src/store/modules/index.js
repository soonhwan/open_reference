
import { combineReducers } from 'redux';
// import { penderReducer } from 'redux-pender';
// import { connectRouter } from 'connected-react-router'
import { logConfig } from '_constants'

// imports all file except index.js
const req = require.context('.', true, /^(?!.\/index).*.js$/);

const modules = { };

// const getCamelcaseName = (pathList) => {
//   let str = ''
//   pathList.forEach((value, index, array) => {
//     if (index > 0) {
//       str += value.charAt(0).toUpperCase() + value.slice(1)
//     } else {
//       str += value
//     }
//   })
//   // console.log('getCamelcaseName =>', pathList, str)
//   return str
// }

// 모든 module 등록
req.keys().forEach((key) => {
  const regex = /.\/(.*?).js$/;

  // 폴더 조립으로 Camelcase 처리
  // let moduleName = regex.test(key) && key.match(regex)[1];
  // moduleName = moduleName.split('/').join('_')
  // if (moduleName.indexOf('/') > -1) {
  //   moduleName = getCamelcaseName(moduleName.split('/'))
  // }

  // 마지막 폴더 명칭 그대로 사용하기
  const list = (regex.test(key) && key.match(regex)[1]).split('/')
  const moduleName = list[list.length - 1]

  modules[moduleName] = req(key).default;
});

// console.log('============ combineReducers =============', modules)

// penderReducer 추가 
// modules['pender'] = penderReducer;

const createRootReducer = (history) => {
  // connectRouter 추가
  // modules['router'] = connectRouter(history);
  return combineReducers(modules);
}

// 리듀서에 추가
// export default combineReducers(modules);
export default createRootReducer;

