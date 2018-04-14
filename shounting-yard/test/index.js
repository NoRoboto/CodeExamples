const notations = require('../algorithms/shuntingYard')

const checkArray = (result, expected) => {
  if (result.length !== expected.length)
    return false

  for (let i = 0; i < result.length; i++) {
    if (result[i] !== expected[i])
      return false
  }
  return true
}

const testCheck = (testName, input, funct, expected) => {
  let value = false
  result = funct(input)
  console.log('result', result)
  if (Array.isArray(result)) {
    value = checkArray(result, expected)
  } else {
    value = expected === result
  }

  if (value) {
    console.log(testName, 'Passed the test!')
    return true
  }
  
  console.log('expected', expected)
  console.log(testName, 'bad Test!')
  return false
}

const case1 = () => {
  let input = '(4+8)*(6 - 5)/((3 - 2)*(2+2))'.replace(/\s/g, "")
  input = [...input]
  const expected = ['4', '8', '+', '6', '5', '-', '*', '3', '2', '-', '2', '2', '+', '*', '/']
  return testCheck('Test infix to postfix 1', input, notations.infixToPostfix, expected)
}

const case2 = () => {
  let input = '3+4*5/6'.replace(/\s/g, "")  
  input = [...input]
  const expected = ['3', '4', '5', '*', '6', '/', '+']
  return testCheck('Test infix to postfix 2', input, notations.infixToPostfix, expected)
}

const case3 = () => {
  let input = '7-(2*3+5)*(8-4/2)'.replace(/\s/g, "")
  input = [...input]
  const expected = ['7', '2', '3', '*', '5', '+', '8', '4', '2', '/', '-', '*', '-']
  return testCheck('Test infix to postfix 2', input, notations.infixToPostfix, expected)
}

const case4 = () => {
  let input = '2*5+8-(5 / (1 + 9))'.replace(/\s/g, "")
  input = [...input]
  const expected = ['2', '5', '*', '8', '+', '5', '1', '9', '+', '/', '-']
  return testCheck('Test infix to postfix 2', input, notations.infixToPostfix, expected)
}


const case5 = () => {
  let input = '(7 * 3) + (5/(8-4))'
  const expected = ['+', '*', '7', '3', '/', '5', '-', '8', '4']
  return testCheck('Test infix to prefix 1', input, notations.infixToPrefix, expected)
}

const case6 = () => {
  let input = '3*2-2'
  const expected = ['-', '*', '3', '2', '2']
  return testCheck('Test infix to prefix 2', input, notations.infixToPrefix, expected)
}

const execTests = (testList) => {
  const result = []
  testList.map((test, index) => {
    console.log('\nTest number ', index + 1)
    result.push(test())
  })
  const badTest = result.find(res => res === false)
  if (badTest === false) {
    console.log('\nError in tests')
  } else {
    console.log('\nAll test passed!')
  }
}

const testList = [case1, case2, case3, case4, case5, case6]
execTests(testList)