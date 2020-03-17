import Watcher from '../observer/watcher'
import resolveFn from '../util'

export default class Compiler {
  constructor (el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    let fragment = this.createFragment(this.el)
    this.compile(fragment); // 编译
    this.el.appendChild(fragment); // 变易完成后，重新放回 dom
  }

  createFragment(node) { // 将 dom 元素，转换成文档片段
    let fragment = document.createDocumentFragment();
    let firstChild;
    // 一直去第一个子节点并将其放进文档碎片，直到没有，取不到则停止循环
    while(firstChild = node.firstChild) {
        fragment.appendChild(firstChild);
    }
    return fragment;
  }

  isDirective(attrName) { // 是否是指令
    return attrName.startsWith('v-');
  }

  isElementNode(node) { // 是否是元素节点
    return node.nodeType === 1;
  }

  compile(node) { // 编译节点
    let childNodes = node.childNodes; // 获取所有子节点
    [...childNodes].forEach(child => {
        if(this.isElementNode(child)){ // 是否是元素节点
            this.compile(child); // 递归遍历子节点
            let attributes = child.attributes; 
            // 获取元素节点的所有属性 v-model class 等
            [...attributes].forEach(attr => { // 以  v-on:click="clear" 为例
                let {name, value: exp} = attr; // 结构获取 "clear"
                if(this.isDirective(name)) { // 判断是不是指令属性
                    let [, directive] = name.split('-'); // 结构获取指令部分 v-on:click
                    let [directiveName, eventName] = directive.split(':'); // on，click
                    resolveFn[directiveName](child, exp, this.vm, eventName); 
                    // 执行相应指令方法
                }
            })
        }else{ // 编译文本
            let content = child.textContent; // 获取文本节点
            if(/\{\{(.+?)\}\}/.test(content)) { // 判断是否有模板语法 {{}}
                resolveFn.text(child, content, this.vm); // 替换文本
            }
        }
    });
  }
}