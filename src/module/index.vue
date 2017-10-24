<template>
  <div>
    <t-menu></t-menu>
  </div>
</template>
<script>
import TMenu from '@/components/menu.vue'

export default {
  name: 'main',
  components: {
    TMenu
  },
  data () {
    return {
      logList: []
    }
  },
  created () {
    // this.getInit()
    // this.getFunc({x: 1}, 4, 5, 6, 7)
  },
  methods: {
    getInit () {
      let a = 4
      for (let i=0; i<5; i++) {
        setTimeout(function () {
          console.log(i)
        }, 1000)
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

</style>
