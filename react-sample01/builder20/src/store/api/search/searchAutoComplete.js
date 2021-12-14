import axios from 'axios';
import { API_SERVER } from '_constants';
import utils from 'utils';

/**
 * 10.2.25.2 자동완성
 * @param {String} searchQuery (필수값) 검색어 (UTF-8 인코딩)
 * (MockData) http://localhost:3000/api/search/autoComplete
 */

export const getSearchAutoComplete = (searchQuery) => {
  // searchQuery 인코딩
  const encodeQuery = encodeURI(searchQuery)
  console.log('search API : ', encodeQuery)

  // API호출주소
  const url = `${API_SERVER}/api/search/autoComplete`

  console.log('search API URL : ', url)

  // API 호출
  return utils.axiosGet(url, { searchQuery: encodeQuery })
}
