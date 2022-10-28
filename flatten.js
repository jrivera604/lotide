const flatten = function(array) {
  //create a new array to store the flatten version of the array
    let flattenArr = [];
  
    //create a loop to check if the current valueis array
    //if it is an array - we should go inside another loop and take
    //the values from there and push them to our new flatten array
    //return the new array
    for (let input of array) {
      if (Array.isArray(input)) {
        for (let i = 0; i < input.length; i++) {
          flattenArr.push(input[i]);
          
        }
  
      } else {
        flattenArr.push(input);
      }
  
      
    }
    return flattenArr;
  };
  
  
  
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
  
  
  const nums = [1, 2, [3, 4], 5, [6]];
  let numsFlattened = flatten(nums);
  assertArraysEqual(numsFlattened, [1,2,3,4,5,6]);
  
  const nums1 = [1, 2, 3, 4, 5, 6];
  let nums1Flattened = flatten(nums1);
  assertArraysEqual(nums1Flattened, [1,2,3,4,5,6]);
  
  const words = ['a', 'b', ['c', 'd'], 'e'];
  let wordsFlatten = flatten(words);
  assertArraysEqual(wordsFlatten, ['a', 'b', 'c', 'd', 'e']);