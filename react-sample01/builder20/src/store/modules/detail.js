
import { createAction, handleActions } from 'redux-actions';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';

import * as api from 'store/api/detail';

// 액션 타입
export const INIT_DETAIL_INFO = 'detail/INIT_DETAIL_INFO'

export const GET_DETAIL_INFO = 'detail/GET_DETAIL_INFO';
export const GET_DETAIL_INFO_PENDING = 'detail/GET_DETAIL_INFO_PENDING'; 
export const GET_DETAIL_INFO_SUCCESS = 'detail/GET_DETAIL_INFO_SUCCESS';
export const GET_DETAIL_INFO_ERROR = 'detail/GET_DETAIL_INFO_ERROR';

export const GET_COMMENT_LIST = 'detail/GET_COMMENT_LIST';
export const GET_COMMENT_LIST_PENDING = 'detail/GET_COMMENT_LIST_PENDING'; 
export const GET_COMMENT_LIST_SUCCESS = 'detail/GET_COMMENT_LIST_SUCCESS';
export const GET_COMMENT_LIST_ERROR = 'detail/GET_COMMENT_LIST_ERROR';

export const UPDATE_STAR_POINT = 'detail/UPDATE_STAR_POINT';
export const UPDATE_STAR_POINT_PENDING = 'detail/UPDATE_STAR_POINT_PENDING'; 
export const UPDATE_STAR_POINT_SUCCESS = 'detail/UPDATE_STAR_POINT_SUCCESS';
export const UPDATE_STAR_POINT_ERROR = 'detail/UPDATE_STAR_POINT_ERROR';

export const UPDATE_LIKE_YN = 'detail/UPDATE_STAR_POINT';
export const UPDATE_LIKE_YN_PENDING = 'detail/UPDATE_LIKE_YN_PENDING'; 
export const UPDATE_LIKE_YN_SUCCESS = 'detail/UPDATE_LIKE_YN_SUCCESS';
export const UPDATE_LIKE_YN_ERROR = 'detail/UPDATE_LIKE_YN_ERROR';

export const GET_COMMENT_PAGING_SUCCESS = 'detail/GET_COMMENT_LIST_SUCCESS';
export const GET_COMMENT_PAGING_ERROR = 'detail/GET_COMMENT_LIST_ERROR';

// 액션 생성자
export const getDetailInfo = createPromiseThunk(GET_DETAIL_INFO, api.getDetailInfo);
export const getCommentList = createPromiseThunk(GET_COMMENT_LIST, api.getCommentList);

export const updateStarPoint = createPromiseThunk(UPDATE_STAR_POINT, api.updateStarPoint);
export const updateLikeYn = createPromiseThunk(UPDATE_LIKE_YN, api.updateLikeYn)

export const initDetailInfo = createAction(INIT_DETAIL_INFO);

// 초기 상태
const initialState = {
  isLoading: false, // 로딩중 UI state

  aaaaaaaaaa: '', // 데이터 타입 용

  productDetail: {}, // 상세정보
  firstEpisode: [], // 해당작품의 1화 정보
  tagList: [], // 태그 리스트 정보
  audioBookChapterList: [], // 오디오 북 리스트
  audiobookChapterCount: 0, // 오디오 북 리스트
  sellerInfo: [], // 판매자 정보
  serialProd: [], // 연재 리스트 정보
  serialCount: 0, // 연재 카운터

  commentList: [], // 댓글 리스트 정보
  commentTotal: 0, // 댓글 카운터

  commentTotalCount: 0, // 임시 현재 댓글 카운터
  totalCount: 0, // 임시 총 댓글 카운터

  contributorNotice: '', // 작가공지
  productExplain: '', // 작가한마디
  prodDesc: '', // 작품설명

  bookTypeCd: '', // 북타입

  voucherInfo: {}, // 이용권 정보 --storeVoucherVO 전권소장(전권, 세트), playVoucherVO 전권대여 (전권, 세트), freepassVoucherVO 정액권 (이용권-30일, T-life, 딜라이트 등등)

  favoriteCnt: 0,
  myFavoriteCnt: 0, // 내가 좋아요 한 count  <-- 100개 이상 좋아여 했을때 처리를 위해
  isFavorite: 'N', // 해당 책에 좋아요 했는지 여부
  recent: null, // 마지막 본 회차 정보
  avgRatingScore: 0, // 평균 평점 점수
  ratingPaticpersCnt: 0, // 평점에 참여한 인원 수
  myRatingScore: 0, // 내 평점   // 내 평점 - 이북, 만화만 존재 -> 모두 존재
  isEpisodeAll: 'N', //

};

const initProductInfo = (draft) => {
  draft['productDetail'] = {}
  draft['firstEpisode'] = []
  draft['tagList'] = []
  draft['audioBookChapterList'] = []
  draft['audiobookChapterCount'] = []
  draft['sellerInfo'] = []
  draft['serialProd'] = []
  draft['serialCount'] = 0
  draft['commentList'] = []
  draft['commentTotal'] = 0
  draft['prodDesc'] = ''
  draft['contributorNotice'] = ''
  draft['productExplain'] = ''

  draft['voucherInfo'] = {}

  draft['commentTotalCount'] = 0
  draft['totalCount'] = 0

  draft['bookTypeCd'] = ''

  draft['favoriteCnt'] = 0
  draft['myFavoriteCnt'] = 0
  draft['isFavorite'] = 'N'
  draft['recent'] = null
  draft['avgRatingScore'] = 0.0
  draft['ratingPaticpersCnt'] = 0
  draft['myRatingScore'] = 0
  draft['isEpisodeAll'] = 'N'
  
  draft['voucherModeYn'] = 'N'
}


export default handleActions({
  [INIT_DETAIL_INFO]: (state, action) => {
    return produce(state, draft => {
      initProductInfo(draft)
    });
  },
  [GET_DETAIL_INFO_PENDING]: (state, action) => {
    console.log('================> GET_DETAIL_INFO_PENDING');
    return produce(state, draft => {
      //initProductList(draft)
      draft.isLoading = true
    });
  },
  [GET_DETAIL_INFO_SUCCESS]: (state, action) => {
    console.log('================> GET_DETAIL_INFO_SUCCESS', action.payload);
    const data = action.payload.params;
    return produce(state, draft => {
      console.log('================> GET_DETAIL_INFO_SUCCESS', data);
      initProductInfo(draft)

      draft['productDetail'] = data.productDetail
      draft['firstEpisode'] = data.productDetail.firstEpisode

      if (data.productDetail.tagList !== null) {
        data.productDetail.tagList.map((tag) => {
          draft['tagList'] = { text: tag.tagNm, value: tag.tagId }
        })
      }

      draft['audioBookChapterList'] = data.audioBookChapterList
      draft['audiobookChapterCount'] = data.productDetail.audiobookChapterCount
      draft['sellerInfo'] = data.sellerInfo
      draft['serialProd'] = data.serialProd
      draft['serialCount'] = data.productDetail.serialCount
      //draft['commentList'] = data.commentList
      //draft['commentTotal'] = data.productDetail.commentTotal

      draft['contributorNotice'] = data.productDetail.contributorNotice
      draft['productExplain'] = data.productDetail.productExplain
      draft['prodDesc'] = data.productDetail.prodDesc

      draft['voucherInfo'] = data.productDetail.voucherInfo

      draft['bookTypeCd'] = data.bookTypeCd

      draft['favoriteCnt'] = data.favoriteCnt
      draft['myFavoriteCnt'] = data.myFavoriteCnt
      draft['isFavorite'] = data.isFavorite
      draft['recent'] = data.recent
      draft['avgRatingScore'] = data.avgRatingScore
      draft['ratingPaticpersCnt'] = data.ratingPaticpersCnt
      draft['myRatingScore'] = data.myRatingScore
      draft['isEpisodeAll'] = data.isEpisodeAll
      draft['voucherModeYn'] = data.voucherModeYn

      draft['aaaaaaaaaa'] = data.aaaaaaaaaa 

      draft.isLoading = false
      console.log('================> GET_DETAIL_INFO_SUCCESS', data.productDetail.prodDesc);

    });
  },
  [GET_DETAIL_INFO_ERROR]: (state, action) => {
    console.log('================> GET_DETAIL_INFO_ERROR');
    console.log(state);
    return produce(state, draft => {
      initProductInfo(draft)
      draft.isLoading = false
    });
  },

  // 별점 주기
  [UPDATE_LIKE_YN_PENDING]: (state, action) => {
    return produce(state, draft => {
      //initProductList(draft)
      draft.isLoading = true
    });
  },
  [UPDATE_LIKE_YN_SUCCESS]: (state, action) => {
    const data = action.payload.params;
    return produce(state, draft => {
      draft.isLoading = false
    });
  },
  [UPDATE_LIKE_YN_ERROR]: (state, action) => {
    console.log(state);
    return produce(state, draft => {
      initProductInfo(draft)
      draft.isLoading = false
    });
  },

  // 좋아요 변경
  [UPDATE_STAR_POINT_PENDING]: (state, action) => {
    return produce(state, draft => {
      //initProductList(draft)
      draft.isLoading = true
    });
  },
  [UPDATE_STAR_POINT_SUCCESS]: (state, action) => {
    const data = action.payload.params;
    return produce(state, draft => {
      draft.isLoading = false
    });
  },
  [UPDATE_STAR_POINT_ERROR]: (state, action) => {
    console.log(state);
    return produce(state, draft => {
      initProductInfo(draft)
      draft.isLoading = false
    });
  },
  

  [GET_COMMENT_LIST_SUCCESS]: (state, action) => {
    const data = action.payload
    return produce(state, draft => {
      if (data.result_code === '00' && data.params && data.params.commentList) {
        draft['commentList'] = data.params.commentList
        draft['commentTotalCount'] = data.params.commentTotalCount
        draft['totalCount'] = data.params.totalCount
      } else {
        initProductInfo(draft)
      }
    });
  },
  [GET_COMMENT_LIST_ERROR]: (state, action) => {
    return produce(state, draft => {
      initProductInfo(draft)
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

}, initialState);

