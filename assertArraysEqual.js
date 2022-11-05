const eqArrays = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅ Assertion Passed:`, true);
  }
  else {
    console.log(`❎ Assertion Failed:`, false);
  }
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays (actual, expected)){
    console.log(`✅ Assertion Failed: ${actual} !== ${expected}`);
  }
  else {
    console.log(`❎ Assertion Passed: ${actual} === ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false