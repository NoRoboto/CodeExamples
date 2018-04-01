const spawn = require('threads').spawn
const ora = require('ora')

const spinner = ora('Loading...')
const DEFAULT_OBJECT = {
  type: 'parallelSearch',
  name: 'Parallel search (2 threads)'
}

const parallelSearch = (arrayLength, array, value) => {
  return new Promise((resolve, reject) => {
    const lb = Math.floor(arrayLength / 2)
    const up = Math.round(arrayLength / 2)

    const thread1 = spawn(function ([array, low, up, value], done) {
      const linearSearch = (array, low, up, value) => {
        for (let i = low; i < up; i++) {
          if (array[i] === value) return i
        }
        return -1
      }
      done(linearSearch(array, low, up, value))
    })

    const thread2 = spawn(function ([array, low, up, value], done) {
      const linearSearch = (array, low, up, value) => {
        for (let i = low; i < up; i++) {
          if (array[i] === value) return i
        }
        return -1
      }
      done(linearSearch(array, low, up, value))
    })

    spinner.start()
    const start = process.hrtime()

    thread1
      .send([array, 0, lb, value])
      // The handlers come here: (none of them is mandatory)
      .on('message', function (response) {
        const end = process.hrtime(start)
        const used = process.memoryUsage().heapUsed / 1024 / 1024
        const infoString = `Finished \nIndex: ${response}  \nRam: ${used} MB \nTime: ${end[1]/1000000} ms`
        spinner.succeed([infoString])
        if (response !== -1) {
          thread2.kill()
          resolve({time: end[1]/1000000, ram: used, index: response, ...DEFAULT_OBJECT})
        }
        thread1.kill()
      })

    thread2
      .send([array, up, arrayLength, value])
      // The handlers come here: (none of them is mandatory)
      .on('message', function (response) {
        const end = process.hrtime(start)
        const used = process.memoryUsage().heapUsed / 1024 / 1024
        const infoString = `Finished \nIndex: ${response}  \nRam: ${used} MB \nTime: ${end[1]/1000000} ms`
        spinner.succeed([infoString])
        if (response !== -1) {
          thread1.kill()
          resolve({time: end[1]/1000000, ram: used, index: response, ...DEFAULT_OBJECT})
        }
        thread2.kill()
      })
  })
}



module.exports = {
  parallelSearch
}