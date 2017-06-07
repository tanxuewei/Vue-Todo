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
  },
  methods: {
    
  }
}
</script>
<style lang="less">
li {
  list-style: none;
}
</style>
