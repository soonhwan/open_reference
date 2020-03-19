/**
 * IE 브라우저 체크
 * useEffect 안에서만 작동됩니다.
 */
export function ieBrowserCheck(userAgent) {
  const agent = (userAgent || navigator.userAgent || '').toLowerCase();

  return (
    agent.indexOf("trident") != -1 || agent.indexOf("edge") != -1
  ) ? true : false
}

/*
 * Mac, Windows 체크
 */
const os = require("os");
export const Mac = os.release().indexOf("Mac") != -1;
export const Windows = os.release().indexOf("Windows") != -1;

export function numberFormat(number) {
  var reg = /(^[+-]?\d+)(\d{3})/;
  var n = number + "";

  while (reg.test(n)) n = n.replace(reg, "$1" + "," + "$2");

  return n;
}

/**
 * 새로운 객체로 복사
 * @param obj Object 타입
 */
export function clone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  var copy = obj.constructor();

  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = obj[attr];
    }
  }

  return copy;
}

export function transformText(string) {
  const stringArr = string.split('\n'); 
  return stringArr.map((v, i) => {
    return i !== stringArr.length-1 ? <span key={i}>{v}<br /></span> : <span key={i}>{v}</span>;
  });
}

/**
 * @param parameter
 * 예) 변경 전
 * obj.uniform = ['RV', 'SUV', '경차', '중형차']
 * obj.vendor = ['현대', '기아']
 *     변경 후
 * obj.uniform = "'RV','SUV','경차','중형차'"
 * obj.vendor = "'현대','기아'"
 */
export function makeQueryParameter(parameter) {
  let obj = Object();
  if (parameter.hasOwnProperty("uniform"))
    obj.uniform = parameter["uniform"].split(",", "'");
  if (parameter.hasOwnProperty("vendor"))
    obj.vendor = parameter["vendor"].split(",", "'");
  if (parameter.hasOwnProperty("color_li"))
    obj.color_li = parameter["color_li"].split(",", "'");
  if (parameter.hasOwnProperty("fuel"))
    obj.fuel = parameter["fuel"].split(",", "'");
  if (parameter.hasOwnProperty("trans"))
    obj.trans = parameter["trans"].split(",", "'");
  if (parameter.hasOwnProperty("name"))
    obj.name = parameter["name"].split(",", "'");
  return obj;
}
