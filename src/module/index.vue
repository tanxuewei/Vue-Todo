<template>
  <div>
    <date></date>
  </div>
</template>
<script>
import * as service from '@/service'
import date from '@/components/date-picker/date.vue'

export default {
  name: 'main',
  components: { date },
  data () {
    return {
      logList: []
    }
  },
  created () {
    this.getInit()
    this.getFunc({x: 1}, 4, 5, 6, 7)
  },
  methods: {
    getInit () {
      let a = 4
      for (let i=0; i<5; i++) {
        console.log(a)
      }
      for (let i=0; i<6; i++) {
        console.log(a)
      }
      console.log(typeof i)
    },
    getFunc (...y) {
      console.log(arguments.length)
      console.log(y)
    }
  }
}
</script>
<style lang="less">
li {
  list-style: none;
}
</style>
