import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import createPromiseThunk from 'store/createPromiseThunk';

// action types
// 공통 제어 컴포넌트 관리 
const SET_SCREEN_MASK_VISIBILITY = 'base/SET_SCREEN_MASK_VISIBILITY';
const SET_SCREEN_LOADING = 'base/SET_SCREEN_LOADING';
const OPEN_POPUP = 'base/OPEN_POPUP';
const CLOSE_POPUP = 'base/CLOSE_POPUP';
const ADD_TOAST = 'base/ADD_TOAST';
const SHOW_TOAST = 'base/SHOW_TOAST';
const HIDE_TOAST = 'base/HIDE_TOAST';

const SET_REFFER = 'base/SET_REFFER';
const SET_REFFER_PENDING = 'base/SET_REFFER_PENDING';
const SET_REFFER_SUCCESS = 'base/SET_REFFER_SUCCESS';
const SET_REFFER_ERROR = 'base/SET_REFFER_ERROR';




// action creator
// 공통 제어 컴포넌트 관리 
export const setScreenMaskVisibility = createAction(SET_SCREEN_MASK_VISIBILITY); // (visible)
export const setScreenLoading = createAction(SET_SCREEN_LOADING); // (visible)

export const openPopup = createAction(OPEN_POPUP);
export const closePopup = createAction(CLOSE_POPUP);
export const addToast = createAction(ADD_TOAST);
export const showToast = createAction(SHOW_TOAST);
export const hideToast = createAction(HIDE_TOAST);

// export const setReferrer = createAction(SET_REFFER);
export const setReferrer = createPromiseThunk(SET_REFFER); // dispatch.then 사용할 수 있도록 createPromiseThunk로 감싸기 (2번째 인자로 Promise<*> 설정, 안할경우 기본)


let toastId = 0;

const defaultPopupContents = {
  mode: 'alert', // alert, alertToday, confirm, confirmToday, confirmBtnStyle, confirmBtnStyleToday -> props 유무 판단으로 모드 최소화 
  title: 'title',
  detail: 'detail',
  firstBtnNm: 'firstBtnNm',
  secondBtnNm: 'secondBtnNm',
  // contents: ''
  // prevEvent: function(){}
  // onEvent: function(){}
}

// initial state
const initialState = {

  // 공통 제어 컴포넌트 관리 
  isShowScreenMask: false,
  isLoading: false,
  popup: {
    visible: false,
    info: {}
  },
  toast: [],

  // 미정
  referrer: '/main',
  authKey: null, // 최초 정보를 받아왔는지 확인 용도, 향후 session id or 인증 키 정보를 넣어서 관리
};

// reducer
export default handleActions({

  // 공통 제어 컴포넌트 관리 
  [SET_SCREEN_MASK_VISIBILITY]: (state, action) => {
    return produce(state, draft => {
      draft.isShowScreenMask = action.payload
    });
  },

  // 로딩중 
  [SET_SCREEN_LOADING]: (state, action) => {
    return produce(state, draft => {
      draft.isShowScreenMask = action.payload
      draft.isLoading = action.payload
    });
  },

// ----------------------------------------------------------------------------
// popup
// ----------------------------------------------------------------------------
  [OPEN_POPUP]: (state, action) => {
    return produce(state, draft => {
      draft.isShowScreenMask = true
      draft.popup.visible = true
      draft.popup.info = action.payload
    });
  },
  [CLOSE_POPUP]: (state, action) => {
    return produce(state, draft => {
      draft.isShowScreenMask = false
      draft.popup.visible = false
    });
  },
  
// ----------------------------------------------------------------------------
// toast
// ----------------------------------------------------------------------------
  [ADD_TOAST]: (state, action) => {
    const { type, text } = action.payload;
    console.log(state)
    const toast = state.toast;
    return produce(state, draft => {
      draft.toast.push({
        id: toastId++,
        visible: true,
        type,
        text
      })
    })
  },
  [SHOW_TOAST]: (state, action) => {
    const { type, text } = action.payload;
    const toast = state.toast;
    const index = toast.findIndex(item => item.id === action.payload);
    return produce(state, draft => {
      if (index > -1) {
        draft.toast[index].visible = true
      }
    })
  },
  [HIDE_TOAST]: (state, action) => {
    const toast = state.toast;
    const index = toast.findIndex(item => item.id === action.payload);
    return produce(state, draft => {
      if (index > -1) {
        // draft.toast.splice(index, 1)
        draft.toast[index].visible = false
      }
    })
  },


// ----------------------------------------------------------------------------
// test
// ----------------------------------------------------------------------------
  [SET_REFFER]: (state, action) => {
    // createAction 사용시 발생
    console.log('-- oooorrrrrggg   SET_REFFER');
    const newReferrer = action.payload;
    return produce(state, draft => {
      draft.referrer = newReferrer
    });
  },

  // 이하는 createPromiseThunk 사용시 발생 
  [SET_REFFER_PENDING]: (state, action) => {
    console.log('-- SET_REFFER_PENDING');
    const newReferrer = action.payload;
    return produce(state, draft => {
      draft.referrer = newReferrer
    });
  },
  [SET_REFFER_SUCCESS]: (state, action) => {
    console.log('-- SET_REFFER_SUCCESS');
    const newReferrer = action.payload;
    return produce(state, draft => {
      draft.referrer = newReferrer
    });
  },
  [SET_REFFER_ERROR]: (state, action) => {
    console.log('-- SET_REFFER_ERROR');
    const newReferrer = action.payload;
    return produce(state, draft => {
      draft.referrer = newReferrer
    });
  },

  
}, initialState);
