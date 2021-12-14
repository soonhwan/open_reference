
// storybook에서 사용하기 위한 데이터

const productUtils = require('./_story/product/productUtils.js');
// const commentUtils = require('./_story/comment/commentUtils.js');


// list
function MockList() {}
MockList.prototype = [] // Array.prototype
MockList.prototype.initMock = function(list) {
  for (const k in list) {
    this.push(JSON.parse(JSON.stringify(list[k]))) // 값만 복사
  }
  return this;
}
MockList.prototype.update = function(index, key, value) { 
  // console.log('MockList.prototype.update', index, key, value, typeof this[index]);
  if (index < this.length && typeof this[index] === 'object') {
    this[index][key] = value
  }
  return this;
}

// object
function MockObject() {}
MockObject.prototype = {}
MockObject.prototype.initMock = function(list) {
  for (const k in list) {
    this[k] = JSON.parse(JSON.stringify(list[k])) // 값만 복사
  }
  return this;
}
MockObject.prototype.update = function(key, value) { 
  if (this.hasOwnProperty(key)) {
    this[key] = value
  }
  return this;
}


const getMockData = (dataType, options, count) => {

  // count 존재시에만 list 
  if (typeof count === 'undefined') {
    let obj;
    if (dataType === 'product') {
      obj = productUtils.getObject(options)
    } else if (dataType === 'comment') {
      // obj = commentUtils.getObject(options)
    } else {
      obj = productUtils.getObject(options)
    }
    return new MockObject().initMock(obj)
  } else {
    let list;
    if (dataType === 'product') {
      list = productUtils.getList(options, count)
    } else if (dataType === 'comment') {
      // obj = commentUtils.getList(options, count)
    } else {
      list = productUtils.getList(options, count)
    }
    return new MockList().initMock(list)
  }
}

module.exports = {
  getMockData: getMockData
}


// ------------------------------------------------------------------------------------------------------
/*

사용 예시)
const list1 = getMockJs('product', 'list', 10)
list1
  .update(1, 'prodNm', '1123123123132').update(1, 'avgScore', 1.1)
  .update(2, 'prodNm', 'riaihiquhweih').update(2, 'avgScore', 2.2)

*/

  






