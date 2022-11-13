// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❎ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
/* assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual('hello', 'hello');
assertEqual(1, 1);
assertEqual(1, 2); */


module.exports = assertEqual;