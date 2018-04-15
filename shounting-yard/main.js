const algorithms = require('./algorithms/shuntingYard')

const expression = process.argv[2]

if (expression)
    console.log('Output', algorithms.infixToPostfix(expression))