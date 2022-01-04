'use strict'

function QuickSort(arr, left, right) {
  if (left < right) {
        // Partition the array by setting the position of the pivot value
        let position = Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)
    }
  return arr;
}

function Partition(arr, left, right) {
    // set a pivot value as a point of reference
    let pivot = arr[right]
    // create a variable to track the largest index of numbers lower than the letd pivot
    let low = left - 1
    for( let i = left; i <= right -1 ; i++) {
        if (arr[i] <= pivot) {
          low++
          Swap(arr, i, low)
        }
      }
      // place the value of the pivot location in the middle.
      // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1
}

function Swap(arr, i, low) {
    let temp;
    temp = arr[i]
    arr[i] = arr[low]
    arr[low] = temp
}

module.exports = QuickSort;
