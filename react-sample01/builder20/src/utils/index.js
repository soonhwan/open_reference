import commonUtils from 'utils/commonUtils';
import dateUtils from 'utils/dateUtils';
import httpUtils from 'utils/httpUtils';

const utils = {}

Object.keys(commonUtils).forEach((key) => {
  utils[key] = commonUtils[key]
})

Object.keys(dateUtils).forEach((key) => {
  utils[key] = dateUtils[key]
})

Object.keys(httpUtils).forEach((key) => {
  utils[key] = httpUtils[key]
})

export default utils
