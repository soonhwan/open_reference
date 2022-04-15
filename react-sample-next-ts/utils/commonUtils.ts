import baseUtils from "./baseUtils";

// 기초 유틸
const utils: any = {};

// className 합치기
utils.classNameBind = function (arr: []) {
  return arr.filter((el) => el !== '').join(' ');
};

// string 문자열 찾기
utils.setSearchStr = function (str: string, val: string) {
  //console.log('str => ', str, ', val => ', val)
  return str.includes(val);
};

// string 문자열에 콤마(',')를 찍고, 구분자를 뒤에 붙여준다
utils.setComma = function (str: string, separator: string) {
  let result = "";

  if (!baseUtils.isEmpty(str) || str === "0") {
    str = String(str);
    result = str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");

    if (!baseUtils.isEmpty(separator)) {
      result = result + separator;
    }
  }

  return result;
};


export default utils;
