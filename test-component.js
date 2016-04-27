var Observ = require('observ')
var h = require('virtual-dom/h')
var Icon = require('./')

module.exports = Component

function Component () {
  return Observ()
}

Component.render = function () {
  return h('div', [
    Icon.render(),
    Icon.render({height: '100px'})
  ])
}
