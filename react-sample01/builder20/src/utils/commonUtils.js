


// 기초 유틸
const utils = {
  isString: function(val) { return typeof val === 'string'; },
  isObject: function(val) { return typeof val === 'object'; },
  isFunction: function(val) { return typeof val === 'function'; },
  isBoolean: function(val) { return typeof val === 'boolean'; },
  isUndefined: function(val) { return typeof val === 'undefined'; },
  isDefined: function(val) { return typeof val !== 'undefined'; },
  isNumber: function(val) { return typeof val === 'number'; },
  isArray: function(val) { return Array.isArray(val); },
  isDate: function(val) { return Object.prototype.toString.call(val) === '[object Date]'; },
  isEmpty: function(val) { return val === null || typeof val === 'undefined' || (val + '').trim() === '' },
  isEmptyList: (val) => { return !(utils.isArray(val) && val.length > 0) },
  parseIntOrDefault: function (val, defaultVal) {
    var _int = parseInt(val, 10);
    return isNaN(_int) ? defaultVal : _int;
  }
}


// https://www.npmjs.com/package/chalk
const _chalk = require('react-dev-utils/chalk')
utils.chalk = _chalk;
export const chalk = utils.chalk

// export function chalk(...params) {
//   console.log('chalk', chalk)
//   _chalk(...params)
// }
/*
console.log(
  chalk.cyan(
    `Attempting to bind to HOST environment variable: ${chalk.yellow(
      chalk.bold(process.env.HOST)
    )}`
  )
);
*/

utils.log = function(...params) {
  if (console) {
    console.log(...params)
  } else {

  }
} 
export const log = utils.log



// device
// ssr 인 경우 받아와야함
const appVersion = '' // navigator.appVersion
const userAgent = '' // navigator.userAgent

utils.isAndroid = function() {
  return (/android/gi).test(appVersion);
}
utils.isIOS = function() {
  return (/iphone|ipad|ipod/gi).test(appVersion);
}
utils.probablyMobile = function() {
  return (utils.isAndroid() || utils.isIOS() || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(userAgent));
}
utils.getIOSWindowHeight = function() { 
  // Get zoom level of mobile Safari
  // Note, that such zoom detection might not work correctly in other browsers
  // We use width, instead of height, because there are no vertical toolbars :)
  var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
  // window.innerHeight returns height of the visible area. 
  // We multiply it by zoom and get out real height.
  return window.innerHeight * zoomLevel;
}

// ----------------------------------------------------------------- 이하 정리 필요

// id 자동 생성
let _idIndex = 0
utils.getAutoGenId = () => {
  _idIndex++
  if (_idIndex > 99999999) {
    _idIndex = 0
  }
  return 'ids_' + _idIndex
}

// event
utils.triggerEvent = (eventNm, onEvent, prevEvent, value, oldValue, event) => {
  let prevEventResult = true
  if (typeof prevEvent === 'function') {
    prevEventResult = prevEvent(eventNm, oldValue, value)
  }
  if (prevEventResult) {
    if (typeof onEvent === 'function') {
      onEvent(eventNm, value, event)
    } 
  }
  return prevEventResult;
}



// array 관련
utils.findItemByValue = function(list, value, valueKey) {
  if (utils.isEmptyList(list)) {
    return null
  }
  const result = list.find(item => item[valueKey] === value)
  return utils.isUndefined(result) ? null : result
}

// element 가 object 일 경우 
utils.findIndexByValue = function(list, value) {
  if (utils.isEmptyList(list)) {
    return null
  }
  return list.findIndex((element, index, array) => {
    return element.value === value
  })
}



// string 문자열에 콤마(',')를 찍고, 구분자를 뒤에 붙여준다
utils.setComma = function(str, separator) {
  var result = '';

  if (!utils.stringIsNull(str) || str === '0') {
    str = String(str);
    result = str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

    if (!utils.stringIsNull(separator)) {
      result = result + separator;
    }
  }

  return result;
}

utils.stringIsNull = function(str) {
  if (str === undefined || str === '' || (typeof str === 'undefined')) {
    return true;
  } else {
    return false;
  }
}

utils.isEmptyArray = function(array) {
  if (array && array.constructor === Array && array.length > 0) {
    return false;
  } else {
    return true;
  }
}

// browser
// IE 체크
utils.isExplorer = function() {
  if (typeof navigator !== 'undefined' && navigator?.userAgent) {
    const agent = navigator.userAgent.toLowerCase();
    if ((navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) || agent.indexOf('msie') !== -1) {
      return true;
    }
    return false;
  }
  return false;
}

// IE 버전 체크(7,8,9 or 10,11)
// 현재 여러 가지 ie 에러로 인해서 테스트 불가
utils.getIeOldVersion = function() {
  const hasIE = utils.isExplorer();

  if (hasIE === true) {
    let word;
    const agent = navigator.userAgent.toLowerCase();

    // IE old version ( IE 10 or Lower )
    if (navigator.appName === 'Microsoft Internet Explorer') {
      word = 'msie ';
    } else if (agent.search('trident') > -1) { // IE 11
      word = 'trident/.*rv:';
    } else if (agent.search('edge/') > -1) { // Microsoft Edge
      word = 'edge/';
    } else { // 그 외, IE가 아니라면 ( If it's not IE or Edge )
      return false;
    }

    const reg = new RegExp(word + '([0-9]{1,})(\\.{0,}[0-9]{0,1})');

    if (reg.exec(agent) !== null) {
      const version = parseFloat(RegExp.$1 + RegExp.$2);

      if (version < 10) {
        return true;
      }
    }
    return false;
  }
  return false;
}

export default utils
