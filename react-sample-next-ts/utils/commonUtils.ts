import baseUtils from "./baseUtils";

// 기초 유틸
const utils: any = {};

// className 합치기
utils.setClassNameBind = function (arr: []) {
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

// 하이픈(-)이 없는 전화번호에 하이픈을 넣어줌(PRS 소스 참고)
utils.setPhoneHyphen = function (str: string) {
  if (str.split("-").length > 1) {
    return str;
  }

  if (str.length == 12 && !isNaN(Number(str))) {
    let result = "";
    result = "0" + parseInt(str.substr(0, 4)).toString() + "-";
    result =
      result +
      parseInt(str.substring(4, 8)).toString() +
      "-" +
      str.substr(-4).toString();

    return result;
  }

  return str;
};

// 특정 위치로 스크롤링
utils.scrollToTarget = (ref: any) => {
  window.scrollTo({
    top: window.pageYOffset + ref.current.getBoundingClientRect().top,
    behavior: "auto",
  });
};

// 클릭 이벤트 설정 시 제외 영역을 지정
utils.getExcludeArea = (selectors: any, event: any) => {
  if (selectors.length > 0) {
    const arr = [];
    for (let i = 0; i < selectors.length; i++) {
      arr.push(
        selectors[i] === undefined ? true : !selectors[i].contains(event.target)
      );
    }
    return arr.every((v) => v === true);
  } else {
    // selectors가 노드인 경우도 체크
    return !selectors.contains(event.target);
  }
};

// 영어 대문자로 치환
utils.upperCase = (val: string) => {
  return ("" + val).toUpperCase();
};
// 영어 소문자로 치환
utils.lowerCase = (val: string) => {
  return ("" + val).toLowerCase();
};
utils.cutString = (val: string, num: any) => {
  return val.substr(0, num);
};

export default utils;
