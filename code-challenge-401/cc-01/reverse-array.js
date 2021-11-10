'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Reverse the array [1, 2, 3, 4, 5, 6] with the following outcome of: [6, 5, 4, 3, 2, 1]


------------------------------------------------------------------------------------------------ */

const reverseArray = (arr) => {

    let newArray = [];
    arr.map(element => {
      newArray.unshift(element)
    })
    return newArray;
}


/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing Challenge 1', () => {
  test('It should reverse the array', () => {
    expect(reverseArray([1, 2, 3, 4, 5, 6])).toStrictEqual([6, 5, 4, 3, 2, 1])
  });
});
