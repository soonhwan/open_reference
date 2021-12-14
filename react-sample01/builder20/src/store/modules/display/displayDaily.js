
import { createAction, handleActions } from 'redux-actions';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';

import * as api from 'store/api/display/displayDaily';

// 액션 타입
export const INIT_DISPLAY_DAILY = 'display/INIT_DISPLAY_DAILY'

export const GET_DISPLAY_DAILY = 'display/GET_DISPLAY_DAILY';
export const GET_DISPLAY_DAILY_PENDING = 'display/GET_DISPLAY_DAILY_PENDING';
export const GET_DISPLAY_DAILY_SUCCESS = 'display/GET_DISPLAY_DAILY_SUCCESS';
export const GET_DISPLAY_DAILY_ERROR = 'display/GET_DISPLAY_DAILY_ERROR';

export const GET_DISPLAY_DAILY_PAGING = 'display/GET_DISPLAY_DAILY_PAGING';
export const GET_DISPLAY_DAILY_PAGING_PENDING = 'display/GET_DISPLAY_DAILY_PAGING_PENDING';
export const GET_DISPLAY_DAILY_PAGING_SUCCESS = 'display/GET_DISPLAY_DAILY_PAGING_SUCCESS';
export const GET_DISPLAY_DAILY_PAGING_ERROR = 'display/GET_DISPLAY_DAILY_PAGING_ERROR';

// 액션 생성자
export const getDisplayDaily = createPromiseThunk(GET_DISPLAY_DAILY, api.getDisplayDaily);
export const getDisplayDailyPaging = createPromiseThunk(GET_DISPLAY_DAILY_PAGING, api.getDisplayDailyPaging);

export const initDisplayDaily = createAction(INIT_DISPLAY_DAILY);

// 초기 상태
const initialState = {
  isLoading: false, // 로딩중 UI state
  
  listId: '', // 리스트 ID
  upMenuId: '', // 메뉴 ID
  dayCode: '', // 요일 코드
  comptYn: '', // 완결 여부
  dailyYn: '', // 요일별 여부
  sort: '', // 정렬조건
  title: '', // 타이틀
  startKey: null, // 더보기 시작Key
  hasNext: '', // 다음 더보기 유무
  productList: '', // 상품 리스트
  snsProdNm: '', // 타이틀
  snsDesc: '', // 설명
  snsFilePos: '', // 이미지
};
const initProductList = (draft) => {
  draft['productList'] = []
  draft['startKey'] = '0/0'
}

export default handleActions({
  [INIT_DISPLAY_DAILY]: (state, action) => {
    return produce(state, draft => {
      initProductList(draft)
    });
  },

  [GET_DISPLAY_DAILY_PENDING]: (state, action) => {
    console.log('================> GET_DISPLAY_DAILY_PENDING');
    return produce(state, draft => {
      initProductList(draft)
      draft.isLoading = true
    });
  },

  [GET_DISPLAY_DAILY_SUCCESS]: (state, action) => {
    const data = action.payload.params;
    
    return produce(state, draft => {
      console.log('================> GET_DISPLAY_DAILY_SUCCESS');
      Object.keys(data).map((key) => {
        draft[key] = data[key];
      });
      draft.isLoading = false

    });
  },
  [GET_DISPLAY_DAILY_ERROR]: (state, action) => {
    console.log('================> GET_DISPLAY_DAILY_ERROR');
    console.log(state);
    return produce(state, draft => {
      initProductList(draft)
      draft.isLoading = false
    });
  },

  
  [GET_DISPLAY_DAILY_PAGING_PENDING]: (state, action) => {
    console.log('================> GET_DISPLAY_DAILY_PAGING_PENDING');
    return produce(state, draft => {
      draft.isLoading = true
    });
  },

  [GET_DISPLAY_DAILY_PAGING_SUCCESS]: (state, action) => {
    const data = action.payload.params;
    
    return produce(state, draft => {
      console.log('================> GET_DISPLAY_DAILY_PAGING_SUCCESS');
      Object.keys(data).map((key) => {
        if (key === 'productList') {
          if (draft[key]) {
            draft[key] = draft[key].concat(data[key]);
          } else {
            draft[key] = data[key];
          }
        } else {
          draft[key] = data[key];
        }
      });
      draft.isLoading = false
    });
  },
  
  [GET_DISPLAY_DAILY_PAGING_ERROR]: (state, action) => {
    console.log('================> GET_DISPLAY_DAILY_PAGING_ERROR');
    return produce(state, draft => {
      initProductList(draft)
      draft.isLoading = false
    });
  }
}, initialState);

