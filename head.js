// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  let head = actual[0];
  if (head === expected) {
    console.log(`✅ Assertion Passed: ${head} === ${expected}`);
  }
  if (head !== expected) {
    console.log(`❎ Assertion Failed: ${head} !== ${expected}`);
  }
};




// TEST CODE
assertEqual(["Lighthouse", "Labs", "Bootcamp"], "Lighthouse");
assertEqual(['hello', 'hello'], 'Hi');
assertEqual([1, 1], 1);
assertEqual([1, 2], 2);
assertEqual([],1);
assertEqual([5], 5);