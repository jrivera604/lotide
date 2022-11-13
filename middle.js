
const assertArraysEqual = require('./assertArraysEqual') 
const middle = function (arr) {
  if (arr.length <=2) {
    return [];
  }
  if (arr.length % 2 !== 0) {
    let mid = Math.floor(arr.length/2);
    return arr[mid]
  } else {
    let mid = (arr.length / 2) -1;
    return arr.slice(mid, mid+2)
  }

};

module.exports = middle;