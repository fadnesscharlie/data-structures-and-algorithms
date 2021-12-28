'use strict';

let Mergesort = require('../lib/mergeSort.js')

let sortedArr, arr, result, arrTest;

beforeEach(() => {
  sortedArr = [4, 8, 15, 16, 23, 42]
  arr = [8, 4, 23, 42, 16, 15]
  result = Mergesort(arr);
  arrTest = [8, 4, 23, 42, 16, 15];
})

describe('Merge Sort', () => {
  describe('Returns ture', () => {
    it('returns a sorted array', () => {
      expect(result).toEqual(sortedArr);
    })
  })

  describe('Returns False', () => {
    it('returns the original array', () => {
      expect(arrTest).not.toEqual(result);
    })

    it('if no items in array', () => {
      expect(Mergesort([])).toBeFalsy()
    })
  
    it('If not an array', () => {
      expect(Mergesort({cookie: true})).toBeFalsy()
    })
  })
})
