const assertArraysEqual = require('./assertArraysEqual')
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



const test = letterPositions("lighthouse");
assertArraysEqual(test['l'], [0]);
assertArraysEqual(test['e'], [4]);

module.exports = letterPositions