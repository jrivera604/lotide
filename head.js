// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');
const head = function(arr){
  let result = arr[0];
  return result
};




// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 4);
/* assertEqual(head(([5,6,7]), 5));
assertEqual(head((["Hello", "Lighthouse", "Labs"]), "Hello")); */