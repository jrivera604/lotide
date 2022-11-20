
const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❎ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectsEqual({ a: "2", b: "1" , c: "3"}, { a: "1", b: "2", c: "3" });

module.exports = assertObjectsEqual;