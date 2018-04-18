import {
  createTree
} from '../algorithms/operationTree'


const iterateBT = (input) => {
  let tree = createTree("1 + (2 / 6) + 5")
  tree = JSON.parse(JSON.stringify(tree, null, 2))
  console.log(tree)
  // breadthFirstTraversal(tree, (node) => console.log(node.value) )
  const nodes = []
  const edges = []
  search(tree, nodes, edges, 0)
  console.log('nodes', nodes)
  console.log('edges', edges)
}

const search = (tree, nodes, edges, index) => {
  index = index + 1
  if (tree.left) {
    console.log(tree.left)
    nodes.push({data: {name: tree.value}})  
    search(tree.left, nodes, edges, index)
  }

  if (tree.right) {
    console.log(tree.right)
    edges.push({data: {name: tree.value}})
    search(tree.right, nodes, edges, index)
  }

}



iterateBT()