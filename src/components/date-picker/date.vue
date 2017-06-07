<template>
  <div>
    <h3>{{ monthNames[month] }}</h3>
    <ul>
      <li v-for="x in 7" 
          class="hd">{{ dayNames[x-1] }}</li>
      <li v-for="x in 35"
          class="bd">
        <span v-if="x > day && (x - day <= dayCounts)">{{ x - day }}</span>
        </li>
    </ul>
  </div>
</template>
<script>
import { getDayCountOfMonth, getFirstDayOfMonth } from './utils/util'

export default {
  name: 'date',
  data () {
    return {
      year: 0,
      month: 0,
      date: 0,
      day: 0,
      dayCounts: 0,
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
    }
  },
  created () {
    this.getCurMonth()
  },
  computed: {

  },
  methods: {
    getCurMonth () {
      let today = new Date()
      this.year = today.getFullYear()
      this.month = today.getMonth()
      this.date = today.getDate()
      this.dayCounts = getDayCountOfMonth(this.year, this.month)
      this.day = getFirstDayOfMonth(today)
    }
  }
}
</script>
<style lang="less">
h3 {
  text-align: center;
}
ul {
  li {
    float: left;
    width: 14%;
    height: 60px;
    border: 1px solid #ccc;
    padding: 10px;
    box-sizing: border-box;
    &:hover {
      background: #ccc;
    }
    &.hd {
      text-align: center;
      line-height: 40px;
      color: #FF625B;
    }
    &.bd {
      height: 100px;
    }
  }
}
</style>
