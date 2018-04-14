const CONSTANTS = require('./def')

const isOperator = (token) => {
  if (isNaN(token)) return true
  return false
}



module.exports = {
  isOperator
}