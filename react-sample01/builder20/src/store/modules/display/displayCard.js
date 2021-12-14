
import { createAction, handleActions } from 'redux-actions';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';

import * as api from 'store/api/display/displayCard';

// 액션 타입
export const INIT_DISPLAY_CARD = 'display/INIT_DISPLAY_CARD'

export const GET_DISPLAY_CARD = 'display/GET_DISPLAY_CARD';
export const GET_DISPLAY_CARD_PENDING = 'display/GET_DISPLAY_CARD_PENDING';
export const GET_DISPLAY_CARD_SUCCESS = 'display/GET_DISPLAY_CARD_SUCCESS';
export const GET_DISPLAY_CARD_ERROR = 'display/GET_DISPLAY_CARD_ERROR';

// 액션 생성자
export const getDisplayCard = createPromiseThunk(GET_DISPLAY_CARD, api.getDisplayCard);

export const initDisplayCard = createAction(INIT_DISPLAY_CARD);

// 초기 상태
const initialState = {
  isLoading: false,
  title: '',
  desc: '',
  gradeCd: '',
  listId: '',
  menuId: '',
  includeAdult: '',
};
const initRecentList = (draft) => {
  draft['title'] = ''
  draft['desc'] = ''
  draft['gradeCd'] = ''
  draft['listId'] = ''
  draft['menuId'] = ''
  draft['includeAdult'] = ''
}

export default handleActions({

  [INIT_DISPLAY_CARD]: (state, action) => {
    return produce(state, draft => {
      initRecentList(draft)
    });
  },

  [GET_DISPLAY_CARD_PENDING]: (state, action) => {
    return produce(state, draft => {
      draft.isLoading = true
    });
  },

  [GET_DISPLAY_CARD_SUCCESS]: (state, action) => {
    const data = action.payload.params;
    
    return produce(state, draft => {
      Object.keys(data).map((key) => {
        draft[key] = data[key];
      });
      draft.isLoading = false

    });
  },
  [GET_DISPLAY_CARD_ERROR]: (state, action) => {
    console.log(state);
    return produce(state, draft => {
      initRecentList(draft)
      draft.isLoading = false
    });
  },

}, initialState);

