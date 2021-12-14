
import { createAction, handleActions } from 'redux-actions';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';

import * as api from 'store/api/display/displayEvent';

// 액션 타입
export const INIT_DISPLAY_EVENT = 'display/INIT_DISPLAY_EVENT'

export const GET_DISPLAY_EVENT = 'display/GET_DISPLAY_EVENT';
export const GET_DISPLAY_EVENT_PENDING = 'display/GET_DISPLAY_EVENT_PENDING';
export const GET_DISPLAY_EVENT_SUCCESS = 'display/GET_DISPLAY_EVENT_SUCCESS';
export const GET_DISPLAY_EVENT_ERROR = 'display/GET_DISPLAY_EVENT_ERROR';

// 액션 생성자
export const getDisplayEvent = createPromiseThunk(GET_DISPLAY_EVENT, api.getDisplayEvent);

export const initDisplayEvent = createAction(INIT_DISPLAY_EVENT);

// 초기 상태
const initialState = {
  isLoading: false,
  title: '',
  eventList: [],
};
const initEventList = (draft) => {
  draft['title'] = ''
  draft['eventList'] = []
}

export default handleActions({

  [INIT_DISPLAY_EVENT]: (state, action) => {
    return produce(state, draft => {
      initEventList(draft)
    });
  },

  [GET_DISPLAY_EVENT_PENDING]: (state, action) => {
    return produce(state, draft => {
      draft.isLoading = true
    });
  },

  [GET_DISPLAY_EVENT_SUCCESS]: (state, action) => {
    const data = action.payload.params;
    
    return produce(state, draft => {
      Object.keys(data).map((key) => {
        draft[key] = data[key];
      });
      draft.isLoading = false

    });
  },
  [GET_DISPLAY_EVENT_ERROR]: (state, action) => {
    console.log(state);
    return produce(state, draft => {
      initEventList(draft)
      draft.isLoading = false
    });
  },

}, initialState);

