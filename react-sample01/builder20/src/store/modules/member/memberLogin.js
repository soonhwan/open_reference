
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';

import * as api from 'store/api/member/memberLogin';

// 액션 타입
export const GET_MEMBER_LOGIN = 'member/GET_MEMBER_LOGIN';
export const GET_MEMBER_LOGIN_PENDING = 'member/GET_MEMBER_LOGIN_PENDING';
export const GET_MEMBER_LOGIN_SUCCESS = 'member/GET_MEMBER_LOGIN_SUCCESS';
export const GET_MEMBER_LOGIN_ERROR = 'member/GET_MEMBER_LOGIN_ERROR';

// 액션 생성자
export const getMemberLogin = createPromiseThunk(GET_MEMBER_LOGIN, api.getMemberLogin);


// 초기 상태
const initialState = {
  resultCode: '00',
  resultMessage: '',
  isLoading: false,
  naverUrl: '',
  facebookUrl: '',
  gooogleUrl: '',
  appleUrl: '',
  tstoreUrl: ''
};

const initList = (draft) => {
  draft['naverUrl'] = ''
  draft['facebookUrl'] = ''
  draft['gooogleUrl'] = ''
  draft['appleUrl'] = ''
  draft['tstoreUrl'] = ''
}

export default handleActions({
  [GET_MEMBER_LOGIN_PENDING]: (state, action) => {
    console.log('================> GET_MEMBER_LOGIN_PENDING');
    return produce(state, draft => {
      initList(draft)
      draft.isLoading = true
    });
  },

  [GET_MEMBER_LOGIN_SUCCESS]: (state, action) => {
    const data = action.payload;

    console.log('================> GET_MEMBER_LOGIN_SUCCESS');
    return produce(state, draft => {
      // console.log(data);
      draft.resultCode = data['result_code'];
      draft.resultMessage = data['result_message'];
      if (data.params) {
        Object.keys(data.params).map((key) => {
          draft[key] = data.params[key];
        });
      }
      draft.isLoading = false
    });
  },
  [GET_MEMBER_LOGIN_ERROR]: (state, action) => {
    console.log('================> GET_MEMBER_LOGIN_ERROR');
    console.log(state);
    return produce(state, draft => {
      initList(draft)
      draft.isLoading = false
    });
  },

}, initialState);

