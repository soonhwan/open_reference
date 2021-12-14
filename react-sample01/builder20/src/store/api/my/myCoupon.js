import axios from 'axios';
import { API_SERVER } from '_constants';
import utils from 'utils';

// 페이지를 구성하는 전체 정보 조회
export const getMyCoupon = () => {
  const url = `${API_SERVER}/api/my/coupon`
  return axios.get(url)
}
