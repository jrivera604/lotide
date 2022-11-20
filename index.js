// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const flatten = require('./flatten')
const countOnly = require('./countOnly')
const eqObjects = require('./eqObjects')
const assertObjectsEqual = require('./assertObjectEqual')
const letterPositions = require('./letterPositions')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const map = require('./map')
const takeUntil = require('./takeUntil')
const without = require('./without')
module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertArraysEqual,
  flatten,
  countOnly,
  eqObjects,
  assertObjectsEqual,
  letterPositions,
  findKey,
  findKeyByValue,
  map,
  takeUntil,
  without,
};