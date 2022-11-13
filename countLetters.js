const countLetters = function(phrase) {
  let result = [];
  for (const letter of phrase) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
    
  }

  return result;

};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`❎ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const test = countLetters("lighthouse labs");
console.log(test["l"]);
assertEqual(test["l"], 2);
assertEqual(test["i"], 1);
assertEqual(test["x"], 1);






