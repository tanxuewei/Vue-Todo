import Observer from './observer/index'
import Compiler from './compiler/index'

class MVVM {
  constructor (options) {
    this._init(options)
  }

  _init (options) {
    this.$el = options.el
    this.$options = options
    let data = this.$data = this.$options.data
    Object.keys(data).forEach(key=>this._proxy(key))
    if (this.$el) {
      new Observer(data)
      new Compiler(this.$el, this)
    }
  }
  
  // 代理的作用，this.xx 等于 访问 this.data.xx
  _proxy (key) {
    var self = this
    Object.defineProperty(self, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return self.$data[key]
      },
      set: function proxySetter (val) {
        self.$data[key] = val
      }
    })
  }
}

export default MVVM