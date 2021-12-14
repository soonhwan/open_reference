
import { createAction, handleActions } from 'redux-actions';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';

import * as api from 'store/api/display/displayChallenge';

// 액션 타입
export const INIT_DISPLAY_CHALLENGE = 'display/INIT_DISPLAY_CHALLENGE'

export const GET_DISPLAY_CHALLENGE = 'display/GET_DISPLAY_CHALLENGE';
export const GET_DISPLAY_CHALLENGE_PENDING = 'display/GET_DISPLAY_CHALLENGE_PENDING';
export const GET_DISPLAY_CHALLENGE_SUCCESS = 'display/GET_DISPLAY_CHALLENGE_SUCCESS';
export const GET_DISPLAY_CHALLENGE_ERROR = 'display/GET_DISPLAY_CHALLENGE_ERROR';

// 액션 생성자
export const getDisplayChallenge = createPromiseThunk(GET_DISPLAY_CHALLENGE, api.getDisplayChallenge);
export const initDisplayChallenge = createAction(INIT_DISPLAY_CHALLENGE);

// 초기 상태
const initialState = {
  isLoading: false,
  title: '',
  imageUrl: '',
};
const initChallengeList = (draft) => {
  draft['title'] = ''
  draft['imageUrl'] = ''
}

export default handleActions({

  [INIT_DISPLAY_CHALLENGE]: (state, action) => {
    return produce(state, draft => {
      initChallengeList(draft)
    });
  },

  [GET_DISPLAY_CHALLENGE_PENDING]: (state, action) => {
    return produce(state, draft => {
      draft.isLoading = true
    });
  },

  [GET_DISPLAY_CHALLENGE_SUCCESS]: (state, action) => {
    const data = action.payload.params;
    
    return produce(state, draft => {
      Object.keys(data).map((key) => {
        draft[key] = data[key];
      });
      draft.isLoading = false

    });
  },
  [GET_DISPLAY_CHALLENGE_ERROR]: (state, action) => {
    console.log(state);
    return produce(state, draft => {
      initChallengeList(draft)
      draft.isLoading = false
    });
  },

}, initialState);

