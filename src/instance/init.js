// import Observer from '../observer/index'
// import Watcher from '../observer/watcher'

exports._init = function (options) {
  console.log('init')
  this.$options = options
  let data = this._data = this.$options.data
  Object.keys(data).forEach(key=>this._proxy(key))
  new this.Observer(data)
}

exports.$watch = function (expOrFn, cb, options) {
  new this.Watcher(this, expOrFn, cb)
}

// 代理的作用，this.xx 等于 访问 this.data.xx
exports._proxy = function (key) {
  var self = this
  Object.defineProperty(self, key, {
    configurable: true,
    enumerable: true,
    get: function proxyGetter () {
      return self._data[key]
    },
    set: function proxySetter (val) {
      self._data[key] = val
    }
  })
}