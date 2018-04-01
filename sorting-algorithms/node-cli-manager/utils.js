const ora = require('ora')
const spinner = ora('Loading...')
const prompt = require('prompt-sync')()

/**
 * @param  {Number} length. Length of array
 * @param  {Number} upperBound. Max value in random range
 */
const getArrayData = (length, upperBound) => [...new Array(length)]
  .map(() => Math.floor(Math.random() * upperBound))


const cliArray = () => {
  const length = Number(prompt("Array length (max 99.999.999) "))
  const max = Number(prompt("Maximum random value "))
  spinner.start()
  if (length > 0 && length < 99999999) {
    if (max < Number.MAX_SAFE_INTEGER && max > 0) {
      const resp = getArrayData(length, max)
      spinner.succeed(['Finished!'])
      return resp
    }
  }
  spinner.fail(['Incorrect input parameters'])
}

const logs = (message) => {
  console.log(message)
  console.log('*** Select an option ***')
}

/**
 * @param  {string} avg. average complexity
 * @param  {string} wrt. worst case complexity
 */
const methodInfo = (avg, wrt) => {
  console.log('***********')
  console.log('Complexity:')
  console.log(`Average: ${avg}`)
  console.log(`Worst: ${wrt}`)
  console.log('***********\n')
}

/**
 * @param  {string} msg. Get keyboard input (sync)
 */
const getNumVar = (msg) => {
  const value = Number(prompt(msg))
  if (value < Number.MAX_SAFE_INTEGER && value > 0) return value
  return -1
}

/**
 * @param  {Obj} obj. remove array
 */
const clearData = (obj) => {
  spinner.start()
  obj.array = []
  obj.methods = []
  spinner.succeed(['Finished!'])
}

module.exports = {
  cliArray,
  getArrayData,
  logs,
  methodInfo,
  getNumVar,
  clearData
}