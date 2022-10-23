// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let tail = actual.slice(1);
  let tail2 = expected.slice(1);


  if (JSON.stringify(tail) === JSON.stringify(tail2)) {
    console.log(`✅ Assertion Passed: ${tail} === ${tail2}`);
  } else {
    console.log(`❎ Assertion Failed: ${tail} !== ${tail2}`);
  }
  return;
};

// TEST CODE
assertEqual(["Lighthouse Labs", "Bootcamp", 3], ["Bootcamp", "Bootcamp", 3]);
assertEqual([1, 2, 3, 4], [1, 2, 3, 4]);
assertEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]);
assertEqual([1],[1]);
assertEqual([1,2,3],[1,2]);
