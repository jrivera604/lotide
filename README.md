# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jrivera604/lotide`

**Require it:**

`const _ = require('@jrivera604/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head): A function that takes an array and retrieves the first element of the array`
* `function2(tail): A function that takes an array and slices the first element in the array and returns the remaining indexes in the array`
* `function3(middle): A function that takes in an array and returns the approximate element that is located in the middle of the array`