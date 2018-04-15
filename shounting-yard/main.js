const algorithms = require('./algorithms/shuntingYard')

const option = process.argv[2]
const expression = process.argv[3]

const callFunction = Number(option) === 1 ? 'infixToPostfix' : 'infixToPrefix'

if (expression)
  console.log(algorithms[callFunction](expression))