import axios from 'axios';
import { API_SERVER } from '_constants';
import utils from 'utils';

/**
 * 10.2.25.1 검색 요청 (통합 / 카테고리 / 더보기)
 * @param {String} searchQuery (필수값) 검색어 (UTF-8 인코딩)
 * @param {String} param.type 검색타입 (null: 통합검색, bookpass: 북패스 검색요청)
 * @param {String} param.group 그룹검색 (default - null:모든 group검색, GENERAL:일반도서, WEBTOON:웹툰, ROMANCE:로맨스, FANTASY:판타지, COMIC:만화, WEBNOVEL:웹소설)
 * @param {String} param.orderBy 정렬순서 (default - accuracy : 정확도순, popular:인기순, recent:최신순)
 * @param {int} param.startIndex 검색시 건너뛸 문서 갯수 default - 0
 * @param {int} param.size 검색결과갯수 default - 모든 group 통합검색시: 4, 단일 group 내 검색 시: 30
 * (MockData) http://localhost:3000/api/search/unifined
 */

export const getSearchUnified = (searchQuery, param) => {
  // searchQuery 인코딩
  const encodeQuery = encodeURI(searchQuery)

  // API호출주소
  const url = `${API_SERVER}/api/search/unified`

  // API 호출
  return utils.axiosGet(url, { searchQuery: encodeQuery, ...param })
}

/**
 * 상품검색 페이지 더보기
 * @param {String} searchQuery (필수값) 검색어 (UTF-8 인코딩)
 * @param {String} param.type 검색타입 
 * @param {String} parma.group 그룹검색 
 * @param {String} param.orderBy 정렬순서 
 * @param {int} parma.startIndex 검색시 건너뛸 문서 갯수 => 현재 리스트의 상품수 입력 => 입력값 offset
 * @param {int} param.size 검색결과갯수 default - 모든 group 통합검색시: 4, 단일 group 내 검색 시: 30
 * (MockData) http://localhost:3000/api/search/unifined
 */

export const getSearchUnifiedPaging = (searchQuery, param) => {
  // searchQuery 인코딩
  const encodeQuery = encodeURI(searchQuery)

  // API호출주소
  const url = `${API_SERVER}/api/search/unified`

  // API 호출
  return utils.axiosGet(url, { searchQuery: encodeQuery, ...param })
}