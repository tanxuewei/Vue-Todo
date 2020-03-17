// console.log('index')

import MVVM from './MVVM.js'

let v = new MVVM({
  el: '#app',
  data: {
    user: {
      name: 'Shirley',
      age: 18,
    },
    study: {
      js: {
        idea: 'haipa',
        done: false
      }
    },
    a: 'eee'
  }
})

// v.$watch("a",()=>console.log("哈哈，$watch成功"))

// v.$data.a = 555
v.a = 666
