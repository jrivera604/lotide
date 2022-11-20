const assertArraysEqual = require('./assertArraysEqual')

const without = function(source, itemsToRemove) {
  //create a new array to return
  let cleanArray = [];


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



const words = ["hello", "world", "lighthouse"];
let wordsAfterCleaning = without(words, ["lighthouse"]);
assertArraysEqual(wordsAfterCleaning, ["hello", "world"]);

const nums = ["1", "2", "3"];
let numAfterCleaning = without(nums, [1, 2, "3"]);
assertArraysEqual(numAfterCleaning, ["1", "2"]);

module.exports = without;