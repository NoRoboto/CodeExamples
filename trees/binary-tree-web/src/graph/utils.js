import {
  createTree
} from '../algorithms/operationTree'

const removeLevels = (nodes) => {
  nodes.map(node => delete node.data.level)
}


const getTree = (input) => {
  const nodes = []
  let tree = createTree(input)
  tree = JSON.parse(JSON.stringify(tree, null, 2))

  search(tree, nodes)
  const edges = makeEdges(nodes)
  removeLevels(nodes)

  return {
    nodes,
    edges
  }
}

const search = (tree, nodes) => {

  if (tree.level === 0)
    nodes.push({
      group: "nodes",
      data: {
        name: tree.value,
        level: tree.level
      }
    })

  if (tree.left) {
    nodes.push(search(tree.left, nodes))
  }

  if (tree.right) {
    nodes.push(
      search(tree.right, nodes)
    )
  }

  return {
    group: "nodes",
    data: {
      name: tree.value,
      level: tree.level
    }
  }
}

const makeEdges = (nodes) => {
  const edges = []
  let parent = nodes[0]

  nodes.sort((a, b) => a.data.level - b.data.level)
    .map((node, i) => node.data.id = i.toString())

  for (let i = 1; i < nodes.length; i += 2) {
    const left = {
      group: "edges",
      data: {
        source: parent.data.id,
        target: nodes[i].data.id
      }
    }
    const right = {
      group: "edges",
      data: {
        source: parent.data.id,
        target: nodes[i + 1].data.id

      }
    }
    edges.push(left)
    edges.push(right)

    if (isNaN(nodes[i].data.name)) {
      parent = nodes[i]
    } else {
      parent = nodes[i + 1]
    }
  }

  return edges
}

export default getTree