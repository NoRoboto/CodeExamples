const Menu = require('terminal-menu')
const utils = require('./utils')
const sortMethods = require('./sortAlgorithms/main')
const searchMethods = require('./searchAlgorithms/main')

const menu = Menu({
  width: 40,
  x: 1,
  y: 3
})

const dataObj = {}
dataObj.methods = []

const mapFunctions = (index) => {
  let result = {}
  process.stdout.clearScreenDown()
  switch (index) {
    case 0:
      dataObj.array = utils.cliArray()
      break
    case 1:
      result = sortMethods.run('insertSort', dataObj.array ? dataObj.array.slice() : [])
      dataObj.methods.push(result)
      break
    case 2:
      result = sortMethods.run('mergeSort', dataObj.array ? dataObj.array.slice() : [])
      dataObj.methods.push(result)
      break
    case 3:
      result = sortMethods.run('selectionSort', dataObj.array ? dataObj.array.slice() : [])
      dataObj.methods.push(result)
      break
    case 4:
      result = searchMethods.run('linearSearch', dataObj.array ? dataObj.array.slice() : [])
      dataObj.methods.push(result)
      break
    case 5:
      result = searchMethods.run('binarySearch', dataObj.array ? dataObj.array.slice() : [])
      dataObj.methods.push(result)
      break
    case 6:
      const data = dataObj.array ? dataObj.array.slice() : []
      if (data.length > 0) {
        searchMethods.run('parallelSearch', data).then(result => {
          dataObj.methods.push(result)
        })
      } else {
        console.log('Empty array!')
      }
      break
    case 7:
      if (dataObj.array) dataObj.array.sort((a, b) => a - b)
      console.log('Original array sorted!')
      break
    case 8:
      console.log(dataObj.methods)
      break
    case 9:
      utils.clearData(dataObj)
      break
    case 10:
      menu.close()
      break
    default:
      break
  }
}

/**
 * Set menu options.
 */
const drawOptions = () => {
  menu.reset()

  menu.write('MAIN MENU\n')
  menu.write('Author: Daniel Diaz\n')
  menu.write('-------------------------\n')

  menu.add('CREATE ARRAY')
  menu.add('INSERT SORT')
  menu.add('MERGE SORT')
  menu.add('SELECTION SORT')
  menu.add('LINEAR SEARCH')
  menu.add('BINARY SEACH')
  menu.add('THREAD NAIVE DUMMY LINEAR SEARCH')
  menu.add('SORT ORIGINAL ARRAY')
  menu.add('SHOW RESULT HISTORY')
  menu.add('CLEAR ALL DATA')
  menu.add('EXIT (key q)')
}

menu.on('select', function (label, index) {
  console.log('SELECTED: ' + label + ' '.repeat(20))
  mapFunctions(index)
})

menu.on('close', function () {
  process.stdin.setRawMode(false)
  process.stdin.end()
})

/**
 * Start process pipe.
 */
const run = () => {
  process.stdin.pipe(menu.createStream()).pipe(process.stdout);
  process.stdin.setRawMode(true);
  drawOptions()
}

run()