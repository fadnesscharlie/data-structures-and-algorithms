'use strict';

let QuickSort = require('../lib/quickSort.js');

let response, arr, result, arrTest;

beforeEach(() => {
  arr = [8, 4, 23, 42, 16, 15]
  response = [4, 8, 15, 16, 23, 42]
  result = QuickSort(arr, 0, arr.length-1);
  arrTest = [8, 4, 23, 42, 16, 15];
})

describe('Quick Sort', () => {
  describe('Sort', () => {
    it('should return back a sorted Array', () => {
      expect(result).toEqual(response)
    })
    it('should not return back unsorted', () => {
      expect(result).not.toEqual(arrTest)
    })
    it('should sort on different size arrays', () => {
      let smallResult = QuickSort([1], 0, 0);
      let mediumResult = QuickSort([2, 1], 0, 1)
      let bigResult = QuickSort([3, 1, 2], 0, 2)
      
      expect(smallResult).toEqual([1])
      expect(mediumResult).toEqual([1, 2])
      expect(bigResult).toEqual([1, 2, 3])
    })
  })
})
