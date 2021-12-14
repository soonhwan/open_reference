
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';

import * as api from 'store/api/search/searchAutoComplete';

// 액션 타입
export const INIT_GET_SEARCH_AUTOCOMPLETE = 'search/INIT_GET_SEARCH_AUTOCOMPLETE';

export const GET_SEARCH_AUTOCOMPLETE = 'search/GET_SEARCH_AUTOCOMPLETE';
export const GET_SEARCH_AUTOCOMPLETE_PENDING = 'search/GET_SEARCH_AUTOCOMPLETE_PENDING';
export const GET_SEARCH_AUTOCOMPLETE_SUCCESS = 'search/GET_SEARCH_AUTOCOMPLETE_SUCCESS';
export const GET_SEARCH_AUTOCOMPLETE_ERROR = 'search/GET_SEARCH_AUTOCOMPLETE_ERROR';

// 액션 생성자
export const getSearchAutoComplete = createPromiseThunk(GET_SEARCH_AUTOCOMPLETE, api.getSearchAutoComplete);

export const initSearchAutoComplete = createAction(INIT_GET_SEARCH_AUTOCOMPLETE);

// 초기 상태 설정
const initialState = {
  isLoading: false, // 로딩중 state
  keywordList: [
    {
      // 검색어에 따른 자동완성
      keyword: '', // 상품명?
      replaceThumbnail: '', // 대체썸네일 노출 여부
      adult: '', // 성인상품 여부 (0:일반상품, 1:성인상품)
      prodId: '', // 상품 ID
      imagePath: '', // 썸네일 이미지 경로
      categoryCode: '' //카테고리 코드
    }
  ]
 
};

const initKeywordList = (draft) => {
  draft['keywordList'] = [];
  draft['totalSearchCount'] = 0;
}


export default handleActions({
  [INIT_GET_SEARCH_AUTOCOMPLETE]: (state, action) => {
    return produce(state, draft => {
      initKeywordList(draft);
    });
  },

  // 자동완성 검색어 
  [GET_SEARCH_AUTOCOMPLETE_PENDING]: (state, action) => {
    console.log('================> GET_SEARCH_AUTOCOMPLETE_PENDING');
    return produce(state, draft => {
      initKeywordList(draft);
      draft.isLoading = true;
    });
  },

  [GET_SEARCH_AUTOCOMPLETE_SUCCESS]: (state, action) => {
    const data = action.payload.params;

    console.log('================> GET_SEARCH_AUTOCOMPLETE_SUCCESS');
    return produce(state, draft => {
      // 검색결과 array 데이터 매핑
      Object.keys(data).map((key) => {
        draft[key] = data[key];
      });
      draft.isLoading = false;
    });
  },
  [GET_SEARCH_AUTOCOMPLETE_ERROR]: (state, action) => {
    console.log('================> GET_SEARCH_AUTOCOMPLETE_ERROR');
    console.log(state);
    return produce(state, draft => {
      initKeywordList(draft);
      draft.isLoading = false;
    });
  },

}, initialState);

