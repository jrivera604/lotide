const assertEqual = require('./assertEqual')
const eqArrays = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅ Assertion Passed:`, true);
  }
  else {
    console.log(`❎ Assertion Failed:`, false);
  }
};


module.exports = eqArrays;