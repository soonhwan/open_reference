
import { createAction, handleActions } from 'redux-actions';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';

import * as api from 'store/api/display/displayRecent';

// 액션 타입
export const INIT_DISPLAY_RECENT = 'display/INIT_DISPLAY_RECENT'

export const GET_DISPLAY_RECENT = 'display/GET_DISPLAY_RECENT';
export const GET_DISPLAY_RECENT_PENDING = 'display/GET_DISPLAY_RECENT_PENDING';
export const GET_DISPLAY_RECENT_SUCCESS = 'display/GET_DISPLAY_RECENT_SUCCESS';
export const GET_DISPLAY_RECENT_ERROR = 'display/GET_DISPLAY_RECENT_ERROR';

// 액션 생성자
export const getDisplayRecent = createPromiseThunk(GET_DISPLAY_RECENT, api.getDisplayRecent);

export const initDisplayRecent = createAction(INIT_DISPLAY_RECENT);

// 초기 상태
const initialState = {
  isLoading: false,
  title: '',
  productList: [],
};
const initRecentList = (draft) => {
  draft['title'] = ''
  draft['productList'] = []
}

export default handleActions({

  [INIT_DISPLAY_RECENT]: (state, action) => {
    return produce(state, draft => {
      initRecentList(draft)
    });
  },

  [GET_DISPLAY_RECENT_PENDING]: (state, action) => {
    return produce(state, draft => {
      draft.isLoading = true
    });
  },

  [GET_DISPLAY_RECENT_SUCCESS]: (state, action) => {
    const data = action.payload.params;
    
    return produce(state, draft => {
      Object.keys(data).map((key) => {
        draft[key] = data[key];
      });
      draft.isLoading = false

    });
  },
  [GET_DISPLAY_RECENT_ERROR]: (state, action) => {
    console.log(state);
    return produce(state, draft => {
      initRecentList(draft)
      draft.isLoading = false
    });
  },

}, initialState);

