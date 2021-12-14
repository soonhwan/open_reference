import { API_SERVER } from '_constants';
import utils from 'utils';

/**
 * 10.2.20.6 작가도전 상품 목록의 타이틀, 이미지 정보
 * @param {String} panelId 패널 ID
 * @param {String} title 타이틀 ( X )
 * (MockData) http://localhost:3000/api/display/challenge/fantasy?title=도전369
 */
export const getDisplayChallenge = (panelId, param) => {
  const url = `${API_SERVER}/api/display/challenge/${panelId}`
  return utils.axiosGet(url, param);
}
