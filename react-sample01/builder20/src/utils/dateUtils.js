import _ from 'lodash';

const utils = {};

// https://www.npmjs.com/package/chalk
const _chalk = require('react-dev-utils/chalk')
utils.chalk = _chalk;
export const chalk = utils.chalk

/**
 * Date 계산 : Month 더하기
 * @param {Date, Number}
 * @return {boolean}
 */
utils.addMonths = function(date, addMonth) {
  if (isDate(date) !== true) {
    return null;
  }
  const newDate = clone(date);
  newDate.setMonth(date.getMonth() + addMonth);
  return newDate;
}
function clone(date) { return new Date(date.getTime()); }

/**
 * Date 변환 : to String
 * @param {Date, String}
 * @return {String} : 2020-04-22
 */
utils.dateToString = function(date, format = '-') {
  let toDate = date;
  if (typeof date === 'string') {
    const dateObj = dateParse(date.substr(0, 10));

    if (dateObj) {
      toDate = new Date(dateObj.y, dateObj.m - 1, dateObj.d);
    }
  }

  if (isDate(toDate)) {
    const year = String(toDate.getFullYear());
    const month = String(toDate.getMonth() + 1);
    const day = String(toDate.getDate());

    return year + format + (month.length === 1 ? '0' + month : month) + format + (day.length === 1 ? '0' + day : day);
  }

  return '';
}
function isDate(value) { return value instanceof Date && !isNaN(value.valueOf()); }
/**
 * Date 변환 : to Object with Number value
 * @param {String} : 2020-04-22 or 20200422
 * @return {Object} : {year: 2020, month: 4, day: 22}
 */
function dateParse(value) {
  let year = 0;
  let month = 0;
  let day = 0;

  if (value.length === 8) {
    year = value.substr(0, 4);
    month = value.substr(4, 2);
    day = value.substr(6, 2);
  } else if (value.length === 10) {
    year = value.substr(0, 4);
    month = value.substr(5, 2);
    day = value.substr(8, 2);
  } else {
    return null;
  }

  return {
    year: parseInt(year),
    month: parseInt(month),
    day: parseInt(day)
  };
}

/**
 * Date 획득 : Today
 * @param {String}
 * @return {String} : 2020-04-22
 */
utils.getToday = function(format) {
  if (_.isEmpty(format)) {
    format = '-';
  }

  const toDate = new Date();
  const year = String(toDate.getFullYear());
  const month = String(toDate.getMonth() + 1);
  const date = String(toDate.getDate());

  return year + format + (month.length === 1 ? '0' + month : month) + format + (date.length === 1 ? '0' + date : date);
}

/**
 * 요일 획득 : 1, 2, 3, 4, 5, 6, 7 : 월, 화, 수, 목, 금, 토, 일
 * @param {Date|String}
 * @return {Number}
 */
utils.getDayOfWeek = function(date) {
  // TODO
  if (typeof date === 'string') {
    const { yyyy, mm, dd } = dateParse(date);
    var newDate = new Date(yyyy, mm - 1, dd)
    return newDate.getDay()
  }
  return date.getDay()
}
/**
 * OneStore 요일 변환 : 1, 2, 3, 4, 5, 6, 7 : 일, 월, 화, 수, 목, 금, 토
 * @param {Number} day 
 */
function convertFormatForOnestoreBooks(day) {
  if (day === 7) return 1 //일요일 7 ==> 1
  return day + 1
}
/**
 * unknown 요일 획득 : 2, 3, 4, 5, 6, 7, 1 : 월, 화, 수, 목, 금, 토, 일
 * @param {Number}
 * @return {Number}
 */
utils.getOnestoreBookDayOfWeek = function(date) {
  return convertFormatForOnestoreBooks(utils.getDayOfWeek(date));
}

export default utils