const tail = require('../tail')
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  it("returns back two elements", () => {
    assert.deepEqual(result.length, 2);
    
  });
  it("shows Lighthouse", () => {
    assert.deepEqual(result[0], "Lighthouse"); 
  });
  it("shows Labs", () => {
    assert.deepEqual(result[1], "Labs")
  });
});
