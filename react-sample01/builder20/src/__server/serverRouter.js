import path from 'path';
import express from 'express';
import serverRender from './serverRender.js';
import { createProxyMiddleware } from 'http-proxy-middleware'


const app = express();

// / 경로에 들어왔을때도 똑같은 서버사이드 렌더링 작업
// index.html 을 사용하는것을 방지하는것임
app.get('/', (req, res) => {
  return serverRender(req, res);
});

// build 경로를 정적 디렉토리로 사용
// app.use(express.static(path.resolve(__dirname, '../build')));
app.use('/resources/nbook20', express.static(path.resolve(__dirname, '../../_build_front')));

// 기존 리소스 경로 허용 
console.log('== run http-proxy-middleware 11 ==');
app.use(
    '/resources/nbook10',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true
    })
  );

// api 경로 예외처리 추가
console.log('== run http-proxy-middleware 22 ==');
app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true
    })
  );

// 404가 발생하는 경우 서버사이드 렌더링 -> 신규 에러페이지 우회 처리
app.use((req, res, next) => {
console.log('======serverRender=======', req.path, req.route);
  if (!req.route) {
    return serverRender(req, res);
  }
  return next();
});


export default app;













// =============================================================
// apple 임시
// https://stackoverflow.com/questions/56442900/how-to-use-sign-in-with-apple-with-apple-js
/*
'response_type' => 'code',
'client_id'     => APPLE_SERVICE_ID,
'scope'         => email or name or email name 
'response_mode' => 'form_post',
'redirect_uri'  => redirectURI,
'state'         => $state
*/
/*
  $('body').append('<div id="appleid-signin" data-color="black" data-border="true" data-type="sign in"></div>');
  $('body').append('<script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>');
  AppleID.auth.init({
      clientId : 'kr.co.onestore', // DU4B56LA6L.com.skplanet.tstorebook
      scope : 'email',
      redirectURI: 'https://qa-m.onestorebooks.co.kr/setting/settingMain',
      state : 'KO'
  });
  $('#appleid-signin').trigger('click');

=============================================================
응답 결과 (Request Method: POST)

Origin: https://appleid.apple.com
Pragma: no-cache
Referer: https://appleid.apple.com/



state: KO
code: c0c45cb5eec6f4c13a0fe5c6c0f75a1cd.0.nxws.SVKmqk83KRuYyzObXz4aDQ
id_token: eyJraWQiOiJBSURPUEsxIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoia3IuY28ub25lc3RvcmUiLCJleHAiOjE1ODAyNjUyNzQsImlhdCI6MTU4MDI2NDY3NCwic3ViIjoiMDAwNzYyLmQ3ZDE2MDBiMzhlNTQwNjNhNmRlYWEzYzRjNGIxNmJhLjAyMjQiLCJjX2hhc2giOiJfNWVsQW5xRDk1YTNJSHlkakstdk1RIiwiZW1haWwiOiJjaG9oaGRkQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjoidHJ1ZSIsImF1dGhfdGltZSI6MTU4MDI2NDY3NH0.hWE6-AIhF7DWoAaNhBOje-EWSRWmyPAPKaMDwUHM9fCW0lXshfjAPIpu26exjmKB54eFi230O8Ol1X_q3_xCGYFufjOQqlkH65gzpt-QZxU89f7LgW8V0cAsBlO5GULCAQb7IAtWBds84SbJ9W6ITjVQLqtzpCjQ8luzs_3SGNVOPFL-vA0bpzGrbWO5TyNASOaGBKvO9cGoOBhbcVajEsFTnTuTALj0IB5j5mpvkV_3lgF8McciHXtYklNuyOlubBSwuip6zmBbu34exIN5buUu-Ds-y7WTDIB4M82I9MvKyfJ3rq1TSnWJpTf1JPR8pB_3vshldcVfLri1MFyQzA
user: {"email":"chohhdd@gmail.com"}



import fs from 'fs';
function createHtml() {
  const html = fs.readFileSync(
    path.resolve(process.cwd(), 'src/server/apple.html'),
    'utf8'
  );
  return html;
}
const htmlRender = async (req, res) => {
  res.send(createHtml());
}
app.get('/apple', (req, res) => {
  return htmlRender(req, res);
});
// =============================================================
*/