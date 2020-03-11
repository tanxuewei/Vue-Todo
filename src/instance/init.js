import Observer from '../observer/index'
import Watcher from '../observer/watcher'

exports._init = function (options) {
  console.log('init')
  this.$options = options
  let data = this._data = this.$options.data
  new Observer(data)
}