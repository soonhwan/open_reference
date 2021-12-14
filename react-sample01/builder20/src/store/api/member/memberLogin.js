import axios from 'axios';
import { API_SERVER } from '_constants';
import utils from 'utils';

/**
 * 10.2.10.1 로그인, 회원가입 페이지 social login url 요청
 * 호출된 데이터에 각각의 소셜로그인 url존재
 * (MockData) http://localhost:3000/api/member/login
 */

export const getMemberLogin = () => {
  // API호출주소
  const url = `${API_SERVER}/api/member/login`

  console.log('LOGIN API URL : ', url)

  // API 호출
  return utils.axiosGet(url)
}
