import { API_SERVER } from '_constants';
import utils from 'utils';

/**
 * 10.2.20.7 이벤트 카드 목록
 * @param {String} panelId 패널 ID
 * (MockData) http://localhost:3000/api/display/event/fantasy
 */
export const getDisplayEvent = (panelId) => {
  const url = `${API_SERVER}/api/display/event/${panelId}`
  return utils.axiosGet(url);
}
