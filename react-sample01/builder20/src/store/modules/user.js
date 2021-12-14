import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';
import * as api from 'store/api/user';

// 액션 타입
const GET_USER_INFO = 'user/GET_USER_INFO';
const GET_USER_INFO_SUCCESS = 'user/GET_USER_INFO_SUCCESS';
const GET_USER_INFO_ERROR = 'user/GET_USER_INFO_ERROR';

// 액션 생성자
export const getUserInfo = createPromiseThunk(GET_USER_INFO, api.getUserMetaInfo);

// 초기 상태
const initialState = {
  // 사용자 정보 
  isLogin: false,
  user: null,
  // 환경 정보 
  isWeb: true,
  isNative: false,
  reqPlatform: 'MW'
};

export default handleActions({
  [GET_USER_INFO_SUCCESS]: (state, action) => {
    const { userInfo, reqPlatform } = action.payload.params;
    // let user = null;
    // if (userInfo) {
    //   user = userInfo;
    // }
    
    return produce(state, draft => {
      // draft = initialState;
      draft.user = userInfo;
      draft.isLogin = !!userInfo;
      draft.reqPlatform = reqPlatform;
      draft.isWeb = reqPlatform === 'MW';
      draft.isNative = reqPlatform === 'WV';
    });
  },
  [GET_USER_INFO_ERROR]: (state, action) => {
    return produce(state, draft => {
      draft = initialState;
    });
  }
}, initialState);


