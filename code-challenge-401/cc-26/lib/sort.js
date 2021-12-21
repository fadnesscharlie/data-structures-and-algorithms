function InsertionSort(arr) {
  if(!Array.isArray(arr)) {
    return false
  }
  if(arr.length <= 0) {
    return false;
  }
  for(let i = 1; i<arr.length; i++) {
    let j = i - 1
    let temp = arr[i]
    while(j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = temp
  }
  return arr
}

let firstArray = [8, 4, 23, 42, 16, 15]

// console.log(InsertionSort(firstArray))

module.exports = InsertionSort;
