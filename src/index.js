console.log('index')

import Vue from './vue.js'

new Vue({
  el: '#app',
  data: {
    name: 'Shirley',
    age: 18,
    study: {
      js: {
        idea: 'haipa',
        done: false
      }
    }
  }
})