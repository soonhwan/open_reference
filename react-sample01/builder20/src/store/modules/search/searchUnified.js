import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import createPromiseThunk from 'store/createPromiseThunk';
import produce from 'immer';

import * as api from 'store/api/search/searchUnified';

// ============================== 액션 타입  ==================================
export const INIT_GET_SEARCH_UNIFIED = 'search/INIT_GET_SEARCH_UNIFIED';

// 검색결과 조회
export const GET_SEARCH_UNIFIED = 'search/GET_SEARCH_UNIFIED';
export const GET_SEARCH_UNIFIED_PENDING = 'search/GET_SEARCH_UNIFIED_PENDING';
export const GET_SEARCH_UNIFIED_SUCCESS = 'search/GET_SEARCH_UNIFIED_SUCCESS';
export const GET_SEARCH_UNIFIED_ERROR = 'search/GET_SEARCH_UNIFIED_ERROR';

// 더보기
export const GET_SEARCH_UNIFIED_PAGING = 'search/GET_SEARCH_UNIFIED_PAGING';
export const GET_SEARCH_UNIFIED_PAGING_PENDING =
  'search/GET_SEARCH_UNIFIED_PENDING_PAGING';
export const GET_SEARCH_UNIFIED_PAGING_SUCCESS =
  'search/GET_SEARCH_UNIFIED_SUCCESS_PAGING';
export const GET_SEARCH_UNIFIED_PAGING_ERROR =
  'search/GET_SEARCH_UNIFIED_ERROR_PAGING';

// ============================== 액션 생성자 ==================================
// 통합검색
export const getSearchUnified = createPromiseThunk(
  GET_SEARCH_UNIFIED,
  api.getSearchUnified
);
// 더보기
export const getSearchUnifiedPaging = createPromiseThunk(
  GET_SEARCH_UNIFIED_PAGING,
  api.getSearchUnifiedPaging
);
// init데이터 설정
export const initSearchUnified = createAction(INIT_GET_SEARCH_UNIFIED);

// 초기 상태 설정
const initialState = {
  isLoading: false, // 로딩중 state
  totalSearchCount: 0, // 모든 그룹 전체 검색수

  searchResult: [
    {
      // 검색결과 groupList
      group: '', // 그룹코드
      groupNm: '', // 그룹명
      topMenuId: '', // 탑 카테고리 코드(=topMenuId)
      count: 0, // 노출 상품 수
      searchCount: 0, // 해당 group 검색 수

      // 상품정보 array
      productList: [
        {
          prodId: '', // 상품 ID
          prodNm: '', // 상품 이름
          badgeNm: '', // 뱃지명칭
          gradeCd: '', // 등급정보(구버전 prodGrdCd)
          topMenuId: '', // 탑 카테고리 코드(=topMenuId)
          thumbnailImageUrl: '', // 썸네일 이미지주소
          thumbnailType: '', // 썸네일 타입
          artistNm: '', // 작가명(최대 3명까지 노출)
          artistNmSub: '', // 추가 작가명 정보
          plus19Yn: '', // 19+ 상품여부
          setProdYn: '', // 세트상품 여부
          bookUnit: '', // 책단위 (권, 회, 화, 호)
          metaClsfCd: '', // 메타코드(책유형)
          bookClsfCd: '', // 단행,연재 구분코드(=bookType)
          totalCount: 0, // 총(에피소드) 권수
          avgScore: 0.0, // 평균평점(별점)
          commentCount: 0, // 댓글수
          publisherNm: '', // 출판사명
          completedYn: '', // 연재완료여부(=status) -> completed(완결), continue(미완결)
          weekDayNm: '', // 연재용일명(연재중-> weekDayCdName이 없으면 '자유연재)
          regDt: '', // 최신 등록일
          bookpassYn: 'N', // 북패스 상품 여부
          audiobookTypeNm: '', // 오디오북 타입 이름
        },
      ],
    },
  ],
};

const initSearchResult = draft => {
  draft['searchResult'] = [];
  draft['totalSearchCount'] = 0;
};

export default handleActions(
  {
    [INIT_GET_SEARCH_UNIFIED]: (state, action) => {
      return produce(state, draft => {
        initSearchResult(draft);
      });
    },

    [GET_SEARCH_UNIFIED_PENDING]: (state, action) => {
      console.log('================> GET_SEARCH_UNIFIED_PENDING');
      return produce(state, draft => {
        initSearchResult(draft);
        draft.isLoading = true;
      });
    },

    [GET_SEARCH_UNIFIED_SUCCESS]: (state, action) => {
      const data = action.payload.params;
      const resultData = action.payload.params.searchResult;

      console.log('================> GET_SEARCH_UNIFIED_SUCCESS');
      return produce(state, draft => {
        draft['totalSearchCount'] = data.totalSearchCount;
        // 검색결과 array 데이터 매핑
        Object.keys(resultData).map(key => {
          // searchResult배열의 각 항목에 매핑데이터 삽입
          draft['searchResult'][key] = resultData[key];

          // 검색결과->productList의 각 항목에 array 데이터 매핑
          Object.keys(resultData[key].productList).map(subKey => {
            draft['searchResult'][key]['productList'][subKey] =
              resultData[key].productList[subKey];
          });
        });
        draft.isLoading = false;
      });
    },
    [GET_SEARCH_UNIFIED_ERROR]: (state, action) => {
      console.log('================> GET_SEARCH_UNIFIED_ERROR');
      console.log(state);
      return produce(state, draft => {
        initSearchResult(draft);
        draft.isLoading = false;
      });
    },

    // PAGING
    [GET_SEARCH_UNIFIED_PAGING_PENDING]: (state, action) => {
      console.log('================> GET_SEARCH_UNIFIED_PAGING_PENDING');
      return produce(state, draft => {
        initSearchResult(draft);
        draft.isLoading = true;
      });
    },

    [GET_SEARCH_UNIFIED_PAGING_SUCCESS]: (state, action) => {
      const data = action.payload.params;
      const resultData = action.payload.params.searchResult;

      console.log('module data', data);
      console.log('================> GET_SEARCH_UNIFIED_PAGING_SUCCESS');
      return produce(state, draft => {
        draft['totalSearchCount'] = data.totalSearchCount;
        // 검색결과 array 데이터 매핑
        Object.keys(resultData).map(key => {
          // 기존에 있던 데이터들에 더보기 매핑데이터 추가
          draft['searchResult'][key] = draft['searchResult'][key].concat(
            resultData[key]
          );

          // 검색결과->productList의 각 항목에 array 데이터 매핑
          Object.keys(resultData[key].productList).map(subKey => {
            // 기존에 있던 데이터들에 더보기 매핑데이터 추가
            draft['searchResult'][key]['productList'][subKey] = draft[
              'searchResult'
            ][key]['productList'][subKey].concat(
              resultData[key].productList[subKey]
            );
          });
        });
        draft.isLoading = false;
      });
    },
    [GET_SEARCH_UNIFIED_PAGING_ERROR]: (state, action) => {
      console.log('================> GET_SEARCH_UNIFIED_PAGING_ERROR');
      console.log(state);
      return produce(state, draft => {
        initSearchResult(draft);
        draft.isLoading = false;
      });
    },
  },
  initialState
);
