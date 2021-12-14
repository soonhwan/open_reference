import axios from 'axios';
import { API_SERVER } from '_constants'; // TODO -> 환경별로 호출 주소가 다름, -> 개선 필요 (proxy 고려) + 서버환경 고려


export const getCommentList = (channelId, orderBy, offset, count) => {
  console.log('== lib/getCommentList => ', channelId, orderBy, offset);

  if (!channelId) {
    return Promise.reject(new Error('not found channelId = ' + channelId))
  }

  const url = `${API_SERVER}/api/comment/${channelId}/list`
  const req = axios.get(url, {
    params: {
      orderBy: orderBy,
      offset: offset,
      count: count
    }
  });

  return req;
}
