import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';

import * as api from 'store/api/comment';

// 액션 타입
export const GET_COMMENT_LIST = 'comment/GET_COMMENT_LIST';
export const GET_COMMENT_LIST_SUCCESS = 'comment/GET_COMMENT_LIST_SUCCESS';
export const GET_COMMENT_LIST_ERROR = 'comment/GET_COMMENT_LIST_ERROR';

export const GET_COMMENT_PAGING = 'comment/GET_COMMENT_PAGING';
export const GET_COMMENT_PAGING_SUCCESS = 'comment/GET_COMMENT_PAGING_SUCCESS';
export const GET_COMMENT_PAGING_ERROR = 'comment/GET_COMMENT_PAGING_ERROR';


// 액션 생성자
export const getCommentList = createPromiseThunk(GET_COMMENT_LIST, api.getCommentList);
export const getCommentPaging = createPromiseThunk(GET_COMMENT_PAGING, api.getCommentList);


// 초기 상태
const initialState = {
  commentList: [],
  commentTotalCount: 0,
  totalCount: 0,
};

const initComment = (draft) => {
  draft['commentList'] = []
  draft['commentTotalCount'] = 0
  draft['totalCount'] = 0
}

export default handleActions({
  [GET_COMMENT_LIST_SUCCESS]: (state, action) => {
    const data = action.payload
    
    return produce(state, draft => {
      if (data.result_code === '00' && data.params && data.params.commentList) {
        draft['commentList'] = data.params.commentList
        draft['commentTotalCount'] = data.params.commentTotalCount
        draft['totalCount'] = data.params.totalCount
      } else {
        initComment(draft)
      }
    });
  },
  [GET_COMMENT_LIST_ERROR]: (state, action) => {
    return produce(state, draft => {
      initComment(draft)
    });
  },
  [GET_COMMENT_PAGING_SUCCESS]: (state, action) => {
    const data = action.payload
    
    return produce(state, draft => {
      console.log('================> GET_COMMENT_PAGING_SUCCESS')
      // console.log(data);

      draft['commentList'] = draft['commentList'].concat(data.params.commentList)
      draft['commentTotalCount'] = data.params.commentTotalCount
      draft['totalCount'] = data.params.totalCount

    })
  },
  [GET_COMMENT_PAGING_ERROR]: (state, action) => {
    return produce(state, draft => {
      // TODO. 현상 유지
    });
  },
}, initialState)

