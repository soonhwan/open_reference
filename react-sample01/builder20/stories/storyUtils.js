import axios from 'axios';

async function dispatch(uri, cb) {
  const res = axios.get(uri)
    .then(function (response) {
      // console.log(response)
      cb(response.data)
      // return response.data;
    })
    .catch(function (error) {
      console.log(error)
      cb({
        result_message: 'error',
        result_code: '9999',
      })
    })

  return res;
}

// 비동기 방식으로 data 받을 경우 (결과물은 promise)
export const getMockJson = async function (uri) {
  uri = '/api' + uri
  // console.log('getMockJson => ' + uri)

  let result;
  await dispatch(uri, (data) => {
    result = data;
  })
  return result
}

// 동기방식으로 data 받을 경우 
const storyMockData = require('../mockData/storyMockData.js');
export const getMockJs = function (dataType, options, count) {
  // console.log('== getMockJs ==', storyMockData) 
  return storyMockData.getMockData(dataType, options, count)
}
