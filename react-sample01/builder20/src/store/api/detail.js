import axios from 'axios';
import { API_SERVER } from '_constants';
import utils from 'utils';

// 작품상세 조회
export const getDetailInfo = (channelId) => {
  // console.log('== lib/getListLand => ', topMenuId, menuId, listId);
  const url = `${API_SERVER}/api/detail/${channelId}`
//   const params = utils.isEmpty(listId) ? null : {
//     params: {
//       listId: listId,
//       comptYn: comptYn,
//     }
//   }
  return utils.axiosGet(url)
  //console.log('fount channelId', res)
  //return res
}

// 작품상세 텝 조회
export const getCommentList = (channelId) => {

  const url = `${API_SERVER}/api/comment/${channelId}/list`
  const req = axios.get(url, 
    // {
    //   params: {
    //   menuId: param.menuId,
    //   listId: param.listId,
    //   startKey: param.startKey,
    //   comptYn: param.comptYn,
    //   grdCd: param.grdCd
    //   }
    // }
  );

  return req;
}

// 좋아요 업데이트
export const updateLikeYn = (likeYn) => {

  //const url = `${API_SERVER}/api/comment/${channelId}/list`
  //const req = axios.get(url, 
    // {
    //   params: {
    //   menuId: param.menuId,
    //   listId: param.listId,
    //   startKey: param.startKey,
    //   comptYn: param.comptYn,
    //   grdCd: param.grdCd
    //   }
    // }
  //);
  const req = {
    result_message: '',
    result_code: '00',
    params: { res: likeYn }
  }

  return req;
}

// 별점 등록
export const updateStarPoint = (starPoint) => {

  //const url = `${API_SERVER}/api/comment/${channelId}/list`
  //const req = axios.get(url, 
    // {
    //   params: {
    //   menuId: param.menuId,
    //   listId: param.listId,
    //   startKey: param.startKey,
    //   comptYn: param.comptYn,
    //   grdCd: param.grdCd
    //   }
    // }
  //);
  const req = {
    result_message: '',
    result_code: '00',
    params: { res: starPoint }
  }

  return req;
}