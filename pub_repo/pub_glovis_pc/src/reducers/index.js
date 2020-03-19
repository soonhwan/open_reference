import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import counterReducer from './counterReducer';
import pricingReducer from './pricingSystemReducer';
import searchCarConditionReducer from './searchCarConditionReducer';

export default combineReducers({
  common: commonReducer,
  counter: counterReducer,
  pricing: pricingReducer,
  searchCarCond: searchCarConditionReducer
});
