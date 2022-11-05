const without = function(source, itemsToRemove) {
  //create a new array to return
  let cleanArray = [];
  //create a loop that compare current value to itemsToRemove
  //if the current value does not match push it to the new array
  //return the new array

  for (let i = 0; i < source.length; i++) {
    let keepItem = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        keepItem = false;
      }
    }
    if (keepItem) {
      cleanArray.push(source[i]);
    }
  }
  //console.log("source:", source);

  return cleanArray;

};





const eqArrays = function(arr1, arr2) {
  if (!arr1.length === arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    
  }
  return true;

};

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`Assertion Failed:⛔️⛔️⛔️  ${actual} !==  ${expected}`);
  } else {
    console.log(`Assertion Passed:✅✅✅  ${actual}  ===  ${expected}`);
   
  }

};





// //a test case to chck that our original array was not modify
// const nums = [1, 2, 3];
// without(nums, [1]);
// assertArraysEqual(nums, [1, 2, 3]);

const words = ["hello", "world", "lighthouse"];
let wordsAfterCleaning = without(words, ["lighthouse"]);
assertArraysEqual(wordsAfterCleaning, ["hello", "world"]);


console.log(without(["1", "2", "3"], [1, 2, "3"]));

const nums = ["1", "2", "3"];
let numAfterCleaning = without(nums, [1, 2, "3"]);
assertArraysEqual(numAfterCleaning, ["1", "2"]);
