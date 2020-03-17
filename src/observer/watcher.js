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
    let value = this.vm.$data[this.expOrFn]
    Dep.target = null

    return value
  }

  update () {
    this.run()
  }

  run () {
    // 改为不重新获取
    const value = this.vm.$data[this.expOrFn] // update时重新获取一遍get是为了拿到新的值，这个是对的，但是会绑定2次watch
    if(value !== this.value){
      this.value = value
      this.cb.call(this.vm)
    }
  }
}
