import {
  createTree
} from '../algorithms/operationTree'

const removeLevels = (nodes) => {
  nodes.map(node => delete node.data.level)
}


const getTree = (input) => {
  const tree = createTree(input)
  const [nodes] = search(tree)
  const [edges] = makeEdges(tree)

  return {
    nodes,
    edges
  }
}
const search = (tree, index = 0) => {
  if (!tree)
    return [[], index - 1]

  const node = {
    group: "nodes",
    data: {
      name: tree.value,
      id: index
    }
  }
  const [leftChild, lastLeftIndex] = search(tree.left, index + 1)
  const [rightChild, lastRightIndex] = search(tree.right, lastLeftIndex + 1)

  return [[node, ...leftChild, ...rightChild], lastRightIndex]
}


const makeEdges = (tree, index = 0) => {
  if (!tree.left || ! tree.right)
    return [[], index]

  const [leftChild, lastLeftIndex] = makeEdges(tree.left, index + 1)
  const [rightChild, lastRightIndex] = makeEdges(tree.right, lastLeftIndex + 1)

  const edges = [{
    group: "edges",
    data: {
      source: index,
      name: tree.value,
      target: index + 1,
    }
  }, {
    group: "edges",
    data: {
      source: index,
      name: tree.value,
      target: lastLeftIndex + 1,
    }
  }]
  return [[...edges, ...leftChild, ...rightChild], lastRightIndex]
}

export default getTree
