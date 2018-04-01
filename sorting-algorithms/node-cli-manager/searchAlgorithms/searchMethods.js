const {
  methodInfo
} = require('../utils')

/**
 * @param  {Array} array. array data
 * @param  {Number} value. value to search
 */
const linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return {index: i}
  }
  return {index: -1}
}

const linearSearchInfo = () => methodInfo('O(n)', 'O(n)')

/**
 * @param  {Array} list array of numbers 
 * @param  {Number} value value to search
 * Awesome implementation taken from 
 * https://hackernoon.com/programming-with-js-binary-search-aaf86cef9cb3
 */
const binarySearch = (list, value) => {
  // initial values for start, middle and end
  let start = 0
  let stop = list.length - 1
  let middle = Math.floor((start + stop) / 2)

  // While the middle is not what we're looking for and the list does not have a single item
  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }

    // recalculate middle on every iteration
    middle = Math.floor((start + stop) / 2)
  }

  // if the current middle item is what we're looking for return it's index, else return -1
  return (list[middle] !== value) ? {index: -1} : {index: middle}
}

const binarySearchInfo = () => methodInfo('O(n log n)', 'O(n log n)')

module.exports = {
  linearSearch,
  linearSearchInfo,
  binarySearch,
  binarySearchInfo
}