import { produce } from 'immer';

import { GET_PRICING_MARKET_PRICE, GET_PRICING_CAR_INFO, GET_PRICING_BID_LIST, GET_PRICING_AUCTION_DATA, GET_PRICING_VIEWABLE_CNT, GET_PRICING_TICKET_INFO } from '@src/actions/pricingSystemActions';

const initialState = {
  pricingCarInfo: {},
  bidList: [],
  auctionInfo: {},
  viewableCnt: 0,
  prcingTicketInfo: null,
  marketPrice: null
};

export default function pricingSystemReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRICING_MARKET_PRICE: {
      return produce(state, (draft) => {
        draft.marketPrice = action.payload;
      });
    }
    case GET_PRICING_CAR_INFO: {
      return produce(state, (draft) => {
        draft.pricingCarInfo = action.payload;
        draft.viewableCnt = action.viewableCnt;
      });
    }
    case GET_PRICING_BID_LIST: {
      return produce(state, (draft) => {
        draft.bidList = action.payload;
      });
    }
    case GET_PRICING_AUCTION_DATA: {
      return produce(state, (draft) => {
        draft.auctionInfo = action.payload;
      });
    }
    case GET_PRICING_VIEWABLE_CNT: {
      return produce(state, (draft) => {
        draft.viewableCnt = action.payload;
      });
    }
    case GET_PRICING_TICKET_INFO: {
      return produce(state, (draft) => {
        draft.prcingTicketInfo = action.payload;
      });
    }
    default:
      return state;
  }
}
