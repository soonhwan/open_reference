// 기초 유틸
const utils: any = {
  isString: function(val: any) { return typeof val === 'string'; },
  isObject: function(val: any) { return typeof val === 'object'; },
  isFunction: function(val: any) { return typeof val === 'function'; },
  isBoolean: function(val: any) { return typeof val === 'boolean'; },
  isUndefined: function(val: any) { return typeof val === 'undefined'; },
  isDefined: function(val: any) { return typeof val !== 'undefined'; },
  isNumber: function(val: any) { return typeof val === 'number'; },
  isArray: function(val: any) { return Array.isArray(val); },
  isDate: function(val: any) { return Object.prototype.toString.call(val) === '[object Date]'; },
  isEmpty: function(val: any) { return val === null || typeof val === 'undefined' || (val + '').trim() === '' },
  isEmptyList: (val: any) => { return !(utils.isArray(val) && val.length > 0) },
  isEmptyArray: (val: any) => { return utils.isArray(val) && val.length === 0 },
  isEmptyObj: function(val: any) { return utils.isObject(val) && val !== null && Object.values(val).length === 0 },
  parseIntOrDefault: function (val: string, defaultVal: any) {
    const _int = parseInt(val, 10);
    return isNaN(_int) ? defaultVal : _int;
  },
  validLen: (val: string | any[], cond: boolean) => { return cond !== false ? (val + '').trim().length : val.length },
}

//typeof window
utils.IS_BROWSER = typeof window !== 'undefined';

export default utils;