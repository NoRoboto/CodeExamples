const {
  linearSearch,
  linearSearchInfo,
  binarySearch,
  binarySearchInfo
} = require('./searchMethods')
const {
  parallelSearch
} = require('../parallel/threads')
const ora = require('ora')
const utils = require('../utils')

const spinner = ora('Loading...')

const DEFAULT_VALUE = {
  time: 0,
  ram: 0,
  index: -1
}

/**
 * mainWrapper - wrapper to reuse multiple calls of main program.
 * @param {function} funct - sorting method
 * @param {Array} array - stage data
 */

const mainWrapper = (funct, array, value) => {
  spinner.start()
  const start = process.hrtime()
  const result = funct(array, value)
  const end = process.hrtime(start)
  const used = process.memoryUsage().heapUsed / 1024 / 1024

  result.time = end[1] / 1000000
  result.ram = used
  const infoString = `Finished\nIndex: ${result.index}\nRam: ${used} MB\nTime: ${end[1]/1000000} ms`
  spinner.succeed([infoString])

  result.type = 'search'
  result.name = funct.name

  return result
}

/**
 * @param  {String} method. Method { searching }
 * @param  {Array} array. Array value
 */

const run = (method, array) => {
  const option = array.length !== 0 ? method : 'none'
  const value = utils.getNumVar('Type value to search: ')
  switch (option) {
    case 'linearSearch':
      linearSearchInfo()
      return mainWrapper(linearSearch, array, value)
    case 'binarySearch':
      binarySearchInfo()
      return mainWrapper(binarySearch, array, value)
    case 'parallelSearch':
      return parallelSearch(array.length, array, value)
    default:
      console.log('Array is empty!')
      return DEFAULT_VALUE
  }
}

module.exports = {
  run
}