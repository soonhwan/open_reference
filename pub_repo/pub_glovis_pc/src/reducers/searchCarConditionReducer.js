/* eslint-disable import/named */
import { produce } from 'immer';

import {
  GET_CAR_COND_MANUFACTURER,
  GET_CAR_COND_NUMBER_OF_YEAR,
  GET_CAR_COND_MODEL,
  GET_CAR_COND_FUEL,
  GET_CAR_COND_DETAIL_MODEL,
  GET_CAR_COND_DRIV_DIST,
  GET_CAR_COND_COLOR,
  GET_CAR_COND_OPTION
} from '@src/actions/searchCarConditionAction';

const initialState = {
  mnfcOptions: [],
  noyOptions: [],
  mdlOptions: [],
  fuelOptions: [],
  dmdlOptions: [],
  drvDistOptions: [],
  clrOptions: [],
  carCondOptions: []
};

export default function searchCarCondtionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAR_COND_MANUFACTURER: {
      return produce(state, (draft) => {
        draft.mnfcOptions = action.payload;
      });
    }
    case GET_CAR_COND_NUMBER_OF_YEAR: {
      return produce(state, (draft) => {
        draft.noyOptions = action.payload;
      });
    }
    case GET_CAR_COND_MODEL: {
      return produce(state, (draft) => {
        draft.mdlOptions = action.payload;
      });
    }
    case GET_CAR_COND_FUEL: {
      return produce(state, (draft) => {
        draft.fuelOptions = action.payload;
      });
    }
    case GET_CAR_COND_DETAIL_MODEL: {
      return produce(state, (draft) => {
        draft.dmdlOptions = action.payload;
      });
    }
    case GET_CAR_COND_DRIV_DIST: {
      return produce(state, (draft) => {
        draft.drvDistOptions = action.payload;
      });
    }
    case GET_CAR_COND_COLOR: {
      return produce(state, (draft) => {
        draft.clrOptions = action.payload;
      });
    }
    case GET_CAR_COND_OPTION: {
      return produce(state, (draft) => {
        draft.carCondOptions = action.payload;
      });
    }
    default:
      return state;
  }
}
