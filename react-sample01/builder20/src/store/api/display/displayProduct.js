import { API_SERVER } from '_constants';
import utils from 'utils';

/**
 * 10.2.20.1 전시 상품 조회
 * @param {String} listId 조회 할 상품 목록의 ID : Mandatory
 * @param {String} param.menuId 메뉴 ID
 * @param {String} param.comptYn 완결 여부
 * @param {String} param.startKey 더보기 시작점 offset 키 값 : 87/0
 * @param {String} param.freepassGrpCd 정액권(패스) 그룹 코드 : PD013333
 * @param {String} param.excludeKToonYN K툰 상품 제외 값
 * (MockData) http://localhost:3000/api/display/product/RNK050600001
 */
export const getDisplayProduct = (listId, param) => {
  const url = `${API_SERVER}/api/display/product/${listId}`;
  console.log('API ::: ', url)
  return utils.axiosGet(url, param, true);
}
