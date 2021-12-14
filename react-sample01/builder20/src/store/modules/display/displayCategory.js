
import { createAction, handleActions } from 'redux-actions';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';

import * as api from 'store/api/display/displayCategory';

// 액션 타입
export const INIT_DISPLAY_CATEGORY = 'display/INIT_DISPLAY_CATEGORY'

export const GET_DISPLAY_CATEGORY = 'display/GET_DISPLAY_CATEGORY';
export const GET_DISPLAY_CATEGORY_PENDING = 'display/GET_DISPLAY_CATEGORY_PENDING';
export const GET_DISPLAY_CATEGORY_SUCCESS = 'display/GET_DISPLAY_CATEGORY_SUCCESS';
export const GET_DISPLAY_CATEGORY_ERROR = 'display/GET_DISPLAY_CATEGORY_ERROR';

// 액션 생성자
export const getDisplayCategory = createPromiseThunk(GET_DISPLAY_CATEGORY, api.getDisplayCategory);

export const initDisplayCategory = createAction(INIT_DISPLAY_CATEGORY);

// 초기 상태
const initialState = {
  isLoading: false,
  upMenuKey: '',
  menuList: [],
};
const initProductList = (draft) => {
  draft['upMenuKey'] = ''
  draft['menuList'] = []
}

export default handleActions({

  [INIT_DISPLAY_CATEGORY]: (state, action) => {
    return produce(state, draft => {
      initProductList(draft)
    });
  },

  [GET_DISPLAY_CATEGORY_PENDING]: (state, action) => {
    console.log('================> GET_DISPLAY_CATEGORY_PENDING');
    return produce(state, draft => {
      draft.isLoading = true
    });
  },

  [GET_DISPLAY_CATEGORY_SUCCESS]: (state, action) => {
    const data = action.payload.params;
    
    return produce(state, draft => {
      console.log('================> GET_DISPLAY_CATEGORY_SUCCESS');
      Object.keys(data).map((key) => {
        draft[key] = data[key];
      });
      draft.isLoading = false

    });
  },
  [GET_DISPLAY_CATEGORY_ERROR]: (state, action) => {
    console.log('================> GET_DISPLAY_CATEGORY_ERROR');
    console.log(state);
    return produce(state, draft => {
      initProductList(draft)
      draft.isLoading = false
    });
  },

}, initialState);

