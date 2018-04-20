import cy from './graph'
import getTree from './graph/utils'


window.onload = function () {
  var form = document.querySelector("form")
  form.onsubmit = submitted.bind(form)
}

const submitted = (ev) => {
  ev.preventDefault()
  cy.remove(cy.elements())
  const { value } = ev.target.elements[0]
  const tree = getTree(value)
  cy.add(tree.nodes)
  cy.add(tree.edges)
  const layout = cy.layout({
    name: 'dagre'
  })
  layout.run()
}

