import { API_SERVER } from '_constants';
import utils from 'utils';

/**
 * 10.2.20.9 최근 본 상품 목록
 * @param {String} topMenuId 최상위 메뉴 ID
 * @param {String} title 타이틀
 * (MockData) http://localhost:3000/api/display/recent/fantasy
 */
export const getDisplayRecent = (topMenuId, param) => {
  const url = `${API_SERVER}/api/display/recent/${topMenuId}`
  return utils.axiosGet(url, param);
}
