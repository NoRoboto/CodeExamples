const {
  methodInfo
} = require('../utils')

// :( global variable for recursive methods TODO: remove
var mergeSwaps = 0

// ***************** INSERTSORT

/**
 * @param  {Array} array. Array data
 */
const insertSort = (array) => {
  let swaps = 0
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i]
    let j = i - 1
    while (j > -1 && currentValue < array[j]) {
      const temp = array[j]
      // major
      array[j + 1] = temp
      array[j] = currentValue
      j--
      swaps++
    }
  }
  return {
    swaps: swaps
  }
}

const insertSortInfo = () => methodInfo('O(n)', 'O(n^2)')

// ***************** MERGESORT


/**
 * @param  {Array} arr. setlist of numbers to sort
 * thanks to https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0
 */

// Split the array into halves and merge them recursively 
const mergeSort = (arr) => {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      mergeSwaps++
      result.push(left[indexLeft])
      indexLeft++
    } else {
      mergeSwaps++
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const mergeSortInfo = () => methodInfo('O(n log n)', 'O(n log n)')

const mergeSortWrapper = (array) => {
  mergeSwaps = 0
  const result = mergeSort(array)
  return {
    swaps: mergeSwaps
  }
}


// *********** selectionSort
/**
 * @param  {Array} array.
 */
const selectionSort = (array) => {
  let temp = 0
  let swaps = 0
  for (let i = 0; i < array.length; i++) {
    let mi = i
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[mi]) mi = j
    }
    swaps++
    temp = array[i]
    array[i] = array[mi]
    array[mi] = temp
  }
  return {swaps}
}

const selectionSortInfo = () => methodInfo('O(n^2)', 'O(n^2)')

module.exports = {
  insertSort,
  insertSortInfo,
  mergeSortWrapper,
  mergeSortInfo,
  selectionSort,
  selectionSortInfo
}