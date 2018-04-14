const utils = require('./utils')

// https://resources.jointjs.com/demos/javascript-ast

// binary search tree constructor

class BST {
  constructor(value, right, left) {
    this.value = value
    this.right = null
    this.left = null
  }


  // insertion function
  insert(value) {
    if (value <= this.value) {
      if (!this.left) this.left = new BST(value)
      else this.left.insert(value)
    } else if (value > this.value) {
      if (!this.right) this.right = new BST(value)
      else this.right.insert(value)
    }
  }

  // Abstract syntax trees
  insAst(value) {

    if (isNaN(value)) {
      if (!this.left) this.left = new BST(value)
      else this.left.insert(value)
    } else {
      if (!this.right) this.right = new BST(value)
      else this.right.insert(value)
    }
  }
}

const exp = '*322'
const input = [...exp]

const a = new BST('-')
input.map(token => a.insAst(token))
console.log(a)