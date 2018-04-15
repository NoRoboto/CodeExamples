/** 
 * https://www.youtube.com/watch?v=UK16ttNfGSk
 * https://cs.nyu.edu/courses/Fall12/CSCI-GA.1133-002/notes/InfixToPostfixExamples.pdf
 * Algorithm: https://www.youtube.com/watch?v=OVFwgYrMShw
 * https://en.wikipedia.org/wiki/Shunting-yard_algorithm
 * https://www.youtube.com/watch?v=y_snKkv0gWc
 */

/**
 * Change parenthesis orientation
 * @param  {Array} expression. 
 */
const changeParenthesis = (expression) => {
  return expression.map(value => {
    if (value === ')') {
      return '('
    } else if (value === '(') {
      return ')'
    }
    return value
  })
}
/**
 * @param  {String} token. Get hierarchical level to 
 * handle operations in stack
 */
const getPrecedence = (token) => {
  switch (token) {
    case '*':
    case '/':
      return 2
    case '+':
    case '-':
      return 1
    default:
      return 0
  }
}
/**
 * @param  {String} token. Check if a token is a left o right parenthesis
 */
const isPts = (token) => (token === '(' || token === ')')

/**
 * @param  {Array} stack. Array of arithmetic operators.
 */
const comparePrecedence = (stack) => {
  const stackValueB = stack.pop()
  const stackValueA = stack.pop()

  const evalA = getPrecedence(stackValueA)
  const evalB = getPrecedence(stackValueB)

  if (evalA > evalB || evalA === evalB) {
    stack.push(stackValueB)
    return stackValueA
  } else {
    stack.push(stackValueA)
    stack.push(stackValueB)
  }

}

/**
 * @param  {Array} stack. Arithmetic tokens
 * @param  {Array} output. Postfix result array.
 */
const checkStack = (stack, output) => {
  if (stack.length > 1) {
    if (!isPts(stack[stack.length - 2]) && !isPts(stack[stack.length - 1])) {
      const operator = comparePrecedence(stack)
      if (operator)
        output.push(operator)
    }
  }
}

/**
 * @param  {Array} stack. 
 * @param  {Array} output.
 */
const parenthesisOperatorsToStack = (stack, output) => {
  const index = stack.lastIndexOf('(')
  const body = stack.slice(0, index)
  const tail = stack.slice(index + 1, stack.length)
  tail.reverse().map(token => output.push(token))
  return body
}

/**
 * @param  {String} value. Current value from input array
 * @param  {Array} stack. 
 * @param  {Array} output.
 */
const checkAndUpdateStack = (value, stack, output) => {
  // get arithmetic expression and push it on output array.
  // pop all surrounding operators over parenthesis
  if (value === ')') {
    return parenthesisOperatorsToStack(stack, output)
  }

  stack.push(value)
  return stack
}

/**
 * @param  {Array} expression. Input array of tokens and numeric values
 */
const shuntingYard = (expression) => {

  let stack = []
  let output = []

  expression.map((value, i) => {
    // require('child_process').spawnSync("read _ ", {shell: true, stdio: [0, 1, 2]}) to debugger
    if (isNaN(value)) {
      stack = checkAndUpdateStack(value, stack, output)
    } else {
      output.push(value)
    }
    checkStack(stack, output)
    // console.log('temp ' + i, stack, output)
  })

  if (stack.length > 0) {
    const orderStack = stack.reverse()
    output = [...output, ...orderStack]
  }

  return output
}

/**
 * @param  {string} expression. infix expression
 */
const infixToPostfix = (expression) => {
  console.log(expression)
  let input = expression.replace(/\s/g, "")
  input = [...input]
  return shuntingYard(input)
}

/**
 * @param  {string} expression. infix expression
 */
const infixToPrefix = (expression) => {
  let input = expression.replace(/\s/g, "")
  input = changeParenthesis([...input]).reverse()
  return shuntingYard(input).reverse()
}

module.exports = {
  infixToPostfix,
  infixToPrefix
}