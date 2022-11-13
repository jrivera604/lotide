const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual')
const middle = require ('../middle')

describe("#middle", () => {
  it("returns empty array", () => {
    assert.deepEqual(middle([1]), []);
  }); 
  it("returns empty array", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns 2", () => {
    assert.deepEqual(middle([1, 2, 3]), 2);
  });   
  it("returns 2", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5]), 3);
  });  
});
/* assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3]), 2) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), 3) // => [3] */