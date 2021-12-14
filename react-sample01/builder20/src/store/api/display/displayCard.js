import { API_SERVER } from '_constants';
import utils from 'utils';

// /api/display/card/{cardId}

/**
 * 10.2.20.1 카드 조회
 * @param {String} cardId 조회 할 상품 목록의 카드 ID
 * (MockData) http://localhost:3000/api/display/card/CARDEXAMPLE001
 */
export const getDisplayCard = (cardId) => {
  const url = `${API_SERVER}/api/display/card/${cardId}`
  return utils.axiosGet(url);
}


