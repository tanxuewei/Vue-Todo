console.log('observer')
import Dep from './dep'

function Observer (data) {
  this.data = data
  this.walk(data)
}

var p = Observer.prototype

p.walk = function (obj) {
  var val
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      val = obj[key]

      if (typeof val === 'object') {
        new Observer(val)
      }

      this.convert(key, val)
    }
  }
}

p.convert = function (key, val) {
  var dep = new Dep()
  Object.defineProperty(this.data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('你访问了:' + key)
      if (Dep.target) {
        dep.addSub(Dep.target)
      }
      return val
    },
    set: function (newVal) {
      console.log('你设置了' + key);
      console.log('新的' + key + ' = ' + newVal)
      if (newVal === val) return
      val = newVal
      dep.notify()
    }
  })
}

export default Observer