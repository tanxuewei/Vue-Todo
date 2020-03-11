import Dep from "./dep"

export default class Watcher {
  constructor (vm, expOrFn, cb) {
    this.vm = vm
    this.expOrFn = expOrFn
    this.cb = cb
    this.value = this.get()
  }

  get () {
    Dep.target = this // 为了区分只有在构造函数调用的时候添加到依赖中, 那update不是也调用了么？这里需要调用么？？
    let value = this.vm._data[this.expOrFn]
    Dep.target = null

    return value
  }

  update () {
    this.run()
  }

  run () {
    const value = this.get()
    if(value !== this.value){
      this.value = value
      this.cb.call(this.vm)
    }
  }
}