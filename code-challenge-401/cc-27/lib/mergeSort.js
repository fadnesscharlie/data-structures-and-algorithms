function Mergesort(arr) {
  // If nothing in the array
  if(!arr.length) return false;

  // If array is not passed in
  if(!Array.isArray(arr)) return false;

  let n = arr.length

  if (n > 1) {
    let mid = n/2
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    // sort the left side
    Mergesort(left)
    // sort the right side
    Mergesort(right)
    // merge the sorted left and right sides together
    let result = Merge(left, right, arr)
    return result
  }
}

function Merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  // Moves through the left and right arrays to find the lowest
  while ((i < left.length) && (j < right.length)) {
    // beginning of each array
    // the values will be the lowest, finds the lowest
    // and adds it to the array
    if (left[i] <= right[j]) {
      arr[k] = left[i]
      i++
    }
    else {
      arr[k] = right[j]
      j++
    }
    // Moves through our final array
    k++
  }
  if (i === left.length) {
    arr[k] = right[j]
  } else {
    arr[k] = left[i]
  }
  return arr
}

module.exports = Mergesort;
