
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';

import * as api from 'store/api/my/myCoupon';

// 액션 타입
export const GET_MY_COUPON = 'my/GET_MY_COUPON';
export const GET_MY_COUPON_PENDING = 'my/GET_MY_COUPON_PENDING';
export const GET_MY_COUPON_SUCCESS = 'my/GET_MY_COUPON_SUCCESS';
export const GET_MY_COUPON_ERROR = 'my/GET_MY_COUPON_ERROR';

// 액션 생성자
export const getMyCoupon = createPromiseThunk(GET_MY_COUPON, api.getMyCoupon);


// 초기 상태
const initialState = {
  resultCode: '00',
  isLoading: false,
  couponCnt: 0,
  couponList: [],
};
const initList = (draft) => {
  draft['couponList'] = []
}

export default handleActions({
  [GET_MY_COUPON_PENDING]: (state, action) => {
    console.log('================> GET_MY_COUPON_PENDING');
    return produce(state, draft => {
      initList(draft)
      draft.isLoading = true
    });
  },

  [GET_MY_COUPON_SUCCESS]: (state, action) => {
    const data = action.payload.data;

    console.log('================> GET_MY_COUPON_SUCCESS');
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
  [GET_MY_COUPON_ERROR]: (state, action) => {
    console.log('================> GET_MY_COUPON_ERROR');
    console.log(state);
    return produce(state, draft => {
      initList(draft)
      draft.isLoading = false
    });
  },

}, initialState);

