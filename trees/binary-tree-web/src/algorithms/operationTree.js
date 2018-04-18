import * as R from 'ramda'
import {infixToPrefix} from './shuntingYard.js'

const node = (value, level, left = false, right = false) =>
    (left && right)?
        {value, level, left, right} :
        { value, level}

const buildNode = (tokens, level) => {
    const [head, ...tail] = tokens
    return R.test(/[+,*,\-,\/]/, head) ?
        buildTree(tokens, level + 1) :
        [node(head, level + 1), tail]
}

const buildTree = (tokens, level) => {
    const [value, ...mTail] = tokens
    const [left, lTail] = buildNode(mTail, level)
    const [right, rTail] = buildNode(lTail, level)
    return [node(value, level, left, right), rTail]
}

const createTree = (expr) => {
    const tokens = infixToPrefix(expr)
    const [tree] = buildTree(tokens, 0)
    return tree
}

// const tree = createTree("(1 + (5 * (2 - 1))) + (6 / 2)")

// console.log(JSON.stringify(tree, null, 2))

export {
    createTree
}
