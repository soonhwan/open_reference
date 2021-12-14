import axios from 'axios';
import { IS_BROWSER } from '_constants';
import utils from 'utils';

const isDev = process.env.NODE_ENV === 'development'; // 환경이 개발모드인지 확인

const configureAxios = () => {
  /*
  why axios?
  https://www.dahae.kim/blog/how-to-use-axios/
  https://medium.com/@jeffrey.allen.lewis/http-requests-compared-why-axios-is-better-than-node-fetch-more-secure-can-handle-errors-better-39fde869a4a6
  */

  if (IS_BROWSER) {
    window.axios = axios;
  }

  // axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
  // axios.defaults.headers.post['Content-Type'] = 'application/json';

  if (process.env.NODE_ENV === 'production') {
    axios.defaults.withCredentials = true;
    // axios.defaults.baseURL = 'https://m.onestorebooks.co.kr';
  } else {
    axios.defaults.withCredentials = true;
    // axios.defaults.baseURL = 'http://localhost:8080';
    // 개발자 환경인 경우 package.js 의 proxy 설정으로 처리 
    
    axios.interceptors.request.use(request => {
      // REQUEST CONFIG

      // accessToken 획득 및 request header 설정 ( 로컬스토리지 , 세션스토리지 결정에 따라 결정 )
      const accessToken = null //config.headers.get.Cookie?.accessToken ?? Cookies?.get('accessToken');
      // Irregular page access without token
      if (request.url === 'https://www.juso.go.kr/addrlink/addrLinkApi.do' || request.url === 'https://appleid.apple.com/auth/token') { // 예제 URL
        // console.log();
      } else {
        request.headers.authorization = accessToken ?? null
        // ? request.headers.common.Authorization
      }
      return request;
    }, error => {
      return Promise.reject(error);
    });

    axios.interceptors.response.use(response => {
      if (response?.data?.result_code === '00') { // if success
        return response.data
      } else if (response?.data?.result_code !== 'AA') { // if need login
        // [TODO] redirect to login page
      } else {
        // [TODO] 실패( FAILURE )처리 - 공통 메시지 팝업 처리
        throw new Error(response.data.result_message);
      }
    }, error => {
      // console.log('axios.interceptors.response [Error]', error);
      const res = error.response;
      if (res) {
        const config = res.config;
        // 공통 에러 타지 않고 직접 처리하는 경우 ga 코드 삽입
        if (res.statusText !== 'abort') {
          try {
            let resParam = '';
            if (config && config.params) {
              resParam = IS_BROWSER ? window.JSON.stringify(config.params) : JSON.stringify(config.params);
            }
            webLog('exception', 'interface', config.url + '(?' + resParam + ')', 1);
          } catch (e) {
            webLog('exception', 'interface', config.url, 1);
          }
        }
        return Promise.reject(error);
      } else {
        console.log(error);
      }
    });
  }

  const webLog = (category, action, label, value) => {

    // 임시로 막음
    console.log('[webLog] == ' + category + ' : ' + action + ' - ' + label);
    // return;
    /*
    var _value = window.parseInt(value, 10);
    _value = window.isNaN(_value) ? 0 : _value;

    if (window.ga) {
      window.ga('send', {
        hitType: 'event',
        eventCategory: '' + category,
        eventAction: '' + action,
        eventLabel: '' + label,
        eventValue: _value,
        nonInteraction: 1
      });
    }
    */
  }
}

export default configureAxios;
