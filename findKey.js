const assertEqual = require('./assertEqual');

const findKey = (obj, callback) => {
  for (const element in obj) {
    if(callback(obj[element])) {
    
     return element;
  }
 }
 return false; 
}

const key = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

const key2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "elBulli

assertEqual( key, 'noma')
assertEqual(key2, 'elBulli')

module.exports = findKey;
