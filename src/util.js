import Watcher from './observer/watcher'

const resolveFn = { // 工具函数集
  getValue(vm, expr) { // 返回指定表达式的数据
      return expr.split('.').reduce((data, current)=>{
          return data[current]; // this[info]、this[obj][a]
      }, vm);
  },

  text(node, exp, vm) {
    // 惰性匹配，避免连续多个模板时，会直接取到最后一个花括号
    // {{name}} {{age}} 不用惰性匹配 会一次取全 "{{name}} {{age}}"
    // 我们期望的是 ["{{name}}", "{{age}}"]
    let reg = /\{\{(.+?)\}\}/;
    let expr = exp.match(reg);
    node.textContent = this.getValue(vm, expr[1]); // 编译时触发更新视图
    new Watcher(vm, expr[1], () => { // setter 触发发布
        node.textContent = this.getValue(vm, expr[1]);
    });
  },

  setValue(vm, exp, value) {
    exp.split('.').reduce((data, current, index, arr)=>{ // 
        if(index === arr.length-1) { // 最后一个成员时，设置值
            return data[current] = value;
        }
        return data[current];
    }, vm.$data);
  },
  model(node, exp, vm) {
      new Watcher(vm, exp, (newVal) => { // 添加观察者，数据变化，更新视图
          node.value = newVal;
      });
      node.addEventListener('input', (e) => { //监听 input 事件（视图变化），事件触发，更新数据
          let value = e.target.value;
          this.setValue(vm, exp, value); // 设置新值
      });
      // 编译时触发
      let value  = this.getValue(vm, exp);
      node.value = value;
  }
}

export default resolveFn
