
import { createAction, handleActions } from 'redux-actions';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';

import * as api from 'store/api/display/displayProduct';

// 액션 타입
export const INIT_DISPLAY_PRODUCT = 'display/INIT_DISPLAY_PRODUCT'

export const GET_DISPLAY_PRODUCT = 'display/GET_DISPLAY_PRODUCT';
export const GET_DISPLAY_PRODUCT_PENDING = 'display/GET_DISPLAY_PRODUCT_PENDING';
export const GET_DISPLAY_PRODUCT_SUCCESS = 'display/GET_DISPLAY_PRODUCT_SUCCESS';
export const GET_DISPLAY_PRODUCT_ERROR = 'display/GET_DISPLAY_PRODUCT_ERROR';

export const GET_DISPLAY_PRODUCT_PAGING = 'display/GET_DISPLAY_PRODUCT_PAGING';
export const GET_DISPLAY_PRODUCT_PAGING_PENDING = 'display/GET_DISPLAY_PRODUCT_PAGING_PENDING';
export const GET_DISPLAY_PRODUCT_PAGING_SUCCESS = 'display/GET_DISPLAY_PRODUCT_PAGING_SUCCESS';
export const GET_DISPLAY_PRODUCT_PAGING_ERROR = 'display/GET_DISPLAY_PRODUCT_PAGING_ERROR';


// 액션 생성자
export const getDisplayProduct = createPromiseThunk(GET_DISPLAY_PRODUCT, api.getDisplayProduct);
export const getDisplayProductPaging = createPromiseThunk(GET_DISPLAY_PRODUCT_PAGING, api.getDisplayProduct);

export const initDisplayProduct = createAction(INIT_DISPLAY_PRODUCT);

// 초기 상태
const initialState = {
  isLoading: false, // 로딩중 UI state
  startKey: null, // 더보기 시작Key
  hasNext: '', // 다음 더보기 유무
  productList: [], // 상품 리스트
};
const initProductList = (draft) => {
  draft['productList'] = []
  draft['startKey'] = null
}

export default handleActions({
  [INIT_DISPLAY_PRODUCT]: (state, action) => {
    return produce(state, draft => {
      initProductList(draft)
    });
  },

  [GET_DISPLAY_PRODUCT_PENDING]: (state, action) => {
    console.log('================> GET_DISPLAY_PRODUCT_PENDING');
    return produce(state, draft => {
      draft.isLoading = true
    });
  },

  [GET_DISPLAY_PRODUCT_SUCCESS]: (state, action) => {
    const data = action.payload.params;
    
    return produce(state, draft => {
      console.log('================> GET_DISPLAY_PRODUCT_SUCCESS');
      Object.keys(data).map((key) => {
        draft[key] = data[key];
      });
      draft.isLoading = false
    });
  },
  
  [GET_DISPLAY_PRODUCT_ERROR]: (state, action) => {
    console.log('================> GET_DISPLAY_PRODUCT_ERROR');
    return produce(state, draft => {
      initProductList(draft)
      draft.isLoading = false
    });
  },

  [GET_DISPLAY_PRODUCT_PAGING_PENDING]: (state, action) => {
    console.log('================> GET_DISPLAY_PRODUCT_PAGING_PENDING');
    return produce(state, draft => {
      draft.isLoading = true
    });
  },

  [GET_DISPLAY_PRODUCT_PAGING_SUCCESS]: (state, action) => {
    const data = action.payload.params;
    
    return produce(state, draft => {
      console.log('================> GET_DISPLAY_PRODUCT_PAGING_SUCCESS');
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
  
  [GET_DISPLAY_PRODUCT_PAGING_ERROR]: (state, action) => {
    console.log('================> GET_DISPLAY_PRODUCT_PAGING_ERROR');
    return produce(state, draft => {
      initProductList(draft)
      draft.isLoading = false
    });
  }
}, initialState);

