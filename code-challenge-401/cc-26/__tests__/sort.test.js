'use strict';

let InsertionSort = require('../lib/sort.js');
let startingArrayTest = [8, 4, 23, 42, 16, 15]
let startingArray = [8, 4, 23, 42, 16, 15]
let sortedArray = [ 4, 8, 15, 16, 23, 42 ]
let results = InsertionSort(startingArray)

describe('Sort', () => {
  describe('Sort should return', () => {
    it('should return back the arr sorted', () => {
      expect(sortedArray).toEqual(results)
    })
  
    it('should not return back the given array', () => {
      expect(startingArrayTest).not.toEqual(results);    
    })
  })

  describe('should return falsy', () => {
    it('if no items in array', () => {
      expect(InsertionSort([])).toBeFalsy()
    })
  
    it('If not an array', () => {
      expect(InsertionSort({cookie: true})).toBeFalsy()
    })

  })

})
