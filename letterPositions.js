const letterPositions = (sentence) => {
  const results = {};
  const letterArr = sentence.split('');
  
  for (let i = 0; i < letterArr.length; i++) {
    if (letterArr[i] !== " ") {
      if (results[letterArr[i]]) {
      
        results[letterArr[i]].push(i);
      
      } else {
        results[letterArr[i]] = [i];
      }
    }
    

  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));



const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`❎ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


const eqArrays = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅ Assertion Passed:`, true);
  } else {
    console.log(`❎ Assertion Failed:`, false);
  }
};

const test = letterPositions("lighthouse");
assertArraysEqual(test['l'], [0]);
assertArraysEqual(test['e'], [4]);
