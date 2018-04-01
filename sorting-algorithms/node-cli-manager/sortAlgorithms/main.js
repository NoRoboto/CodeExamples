const {
    insertSort,
    insertSortInfo,
    mergeSortWrapper,
    mergeSortInfo,
    selectionSort,
    selectionSortInfo
} = require('./sortMethods')
const ora = require('ora')

const spinner = ora('Loading...')

const DEFAULT_VALUE = {
    array: null,
    swaps: 0,
    time: 0,
    ram: 0
}

/**
 * mainWrapper - wrapper to reuse multiple calls of main program.
 * @param {function} funct - sorting method
 * @param {Array} array - stage data
 */

const mainWrapper = (funct, array) => {
    spinner.start()
    const start = process.hrtime()
    const result = funct(array)
    const end = process.hrtime(start);
    const used = process.memoryUsage().heapUsed / 1024 / 1024

    result.time = `${end[0]} segs, ${end[1] / 1000000}`
    result.ram = used
    const infoString = `Finished \nRam: ${used} MB \nTime: ${end[0]} segs ${end[1]/1000000} ms \nExchanges: ${result.swaps}`
    spinner.succeed([infoString])

    result.type = 'sort'
    result.name = funct.name
    return result
}

/**
 * @param  {String} method. method { sorting or searching }
 * @param  {Array} array. array value
 */

const run = (method, array) => {
    const option = array.length !== 0 ? method : 'none'
    switch (option) {
        case 'insertSort':
            insertSortInfo()
            return mainWrapper(insertSort, array)
        case 'mergeSort':
            mergeSortInfo()
            return mainWrapper(mergeSortWrapper, array)
        case 'selectionSort':
            selectionSortInfo()
            return mainWrapper(selectionSort, array)
        default:
            console.log('Array is empty!')
            return DEFAULT_VALUE
    }
}

module.exports = {
    run
}