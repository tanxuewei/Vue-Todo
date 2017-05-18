<template>
  <div>
    <h3>Promise</h3>
    <p>内容输出区域: </p>
    <div ref="cnt">
      <ul>
        <li v-for="x in logList">{{ x }}</li>
      </ul>
    </div>
    <div id="edit" contenteditable></div>
  </div>
</template>
<script>
import * as service from '@/service'

export default {
  name: 'session',
  data () {
    return {
      logList: []
    }
  },
  created () {
    // this.getList()
    this.getJson()
  },
  methods: {
    getJson () {
      service.getJson()
        .then((data) => {
          return service.getJson1()
        })
        .then((data) => {
          //拿到上一步的值去进行处理
          this.print(data)
        })
    },
    getList () {
      function promise () {
        return new Promise((resolve, reject) => {
          resolve('hahahhahaahah')
        })
      }
      this.logList = []
      promise()
        .then((data) => {
          setTimeout(() => {
            this.print(data)
          }, 1000)
        })
        .then((data) => {
          this.print('33')
        })
    },
    print (data) {
      this.logList.push(data)
    },
    a () {
      this.print('函数a')
      return '444'
    }
  }
}
</script>
<style lang="less">
li {
  list-style: none;
}
#edit{height:500px;width:500px;border:1px solid red;}
</style>
