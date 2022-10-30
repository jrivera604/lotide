

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  else {
    console.log(`❎ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
   }  
  };


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  } 

  const obj1 = Object.keys(object1);
  for (let i = 0; i < obj1.length; i++){
    let key = obj1[i];
    if (Array.isArray(object1[key])) {
      return eqArrays (object1[key], object2[key]);

    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    return true;
  }
  else {
    return false;
  }
};

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectsEqual({ a: "2", b: "1" , c: "3"}, { a: "1", b: "2", c: "3" });