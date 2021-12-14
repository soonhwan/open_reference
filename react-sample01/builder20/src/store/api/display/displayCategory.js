import { API_SERVER } from '_constants';
import utils from 'utils';

/**
 * 10.2.20.2 카테고리 리스트 조회
 * @param {String} upMenuKey 메뉴(카테고리) Key
 * (MockData) http://localhost:3000/api/display/category/fantasy
 */
export const getDisplayCategory = (upMenuKey) => {
  const url = `${API_SERVER}/api/display/category/${upMenuKey}`
  return utils.axiosGet(url);
}


