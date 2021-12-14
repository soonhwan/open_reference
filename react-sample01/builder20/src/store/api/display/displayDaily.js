import axios from 'axios'
import { API_SERVER } from '_constants';
import utils from 'utils';

//[TOPIC] 매개변수 나열 VS Object 처리 : Object 처리시 param 정의
/**
 * 요일별 웹툰/웹소설 상품 목록 조회
 * @param {String} dayCode 요일코드 : 1~8 (일~완결) : default
 * @param {String} sort 정렬조건 : popular, recent, starscore : default
 * @param {String} upMenuId 메뉴 ID : DP13, DP14 
 * @param {String} startKey 더보기 시작점 Page 키값 : 0, 1 : default
 * @param {String} title 타이틀
 * (MockData) http://localhost:3000//api/display/daily
 */
export const getDisplayDaily = (param) => {
  const url = `${API_SERVER}/api/display/daily`

  // [TOPIC] DEFAULT 전처리 - 위치와 방식
  // if (utils.isEmpty(param?.dayCode)) param.dayCode = utils.getOnestoreBookDayOfWeek(new Date());
  // if (utils.isEmpty(param?.sort)) {
  //   if (param.dayCode === 8) sort = 'starscore'
  //   else param.sort = 'recent'
  // }
  // if (utils.isEmpty(param?.startKey)) param.startKey = '0'
  
  const params = param && {
    dayCode: param.dayCode || utils.getOnestoreBookDayOfWeek(new Date()),
    sort: param.sort || (param.dayCode === 8 ? param.sort = 'starscore' : param.sort = 'recent'),
    startKey: param.startKey || '0',
    upMenuId: param.upMenuId,
    title: param.title
  }
  //return axios.get(url, { params: params })
  return utils.axiosGet(url, { params: params }, true);
}

/**
 * 요일별 웹툰/웹소설 상품 목록 조회 WITH PAGING
 * @param {String} listId 조회 할 상품 목록의 ID : Mandatory
 * @param {String} param.menuId 메뉴 ID
 * @param {String} param.comptYn 완결 여부
 * @param {String} param.startKey 더보기 시작점 offset 키 값 : 87/0
 * @param {String} param.freepassGrpCd 정액권(패스) 그룹 코드 : PD013333
 * @param {String} param.excludeKToonYN K툰 상품 제외 값
 * (MockData) http://localhost:3000/api/display/product/RNK050600001
 */
// [TOPIC] 매개변수 나열 : API 호출에 필수값은 param과는 별개로 앞에 정의한다.
export const getDisplayDailyPaging = (listId, param) => {
  const url = `${API_SERVER}/api/display/product/${listId}`;
  console.log('API ::: ', url)
  //return axios.get(url, { params: param });
  return utils.axiosGet(url, { params: param }, true);
}