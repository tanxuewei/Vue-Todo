<template>
  <div>
    <h3>{{ monthNames[month] }}</h3>
    <button @click="changeMonth('pre')">上个月</button>
    <button @click="changeMonth('next')">下个月</button>
    <ul>
      <li v-for="x in 7" 
          class="hd">{{ dayNames[x-1] }}</li>
      <li v-for="x in rows"
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
      rows: 0,
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
    getCurMonth (year, month) {
      let today = new Date()
      this.year = year || today.getFullYear()
      this.month = month || today.getMonth()
      this.date = today.getDate()
      this.dayCounts = getDayCountOfMonth(this.year, this.month)
      this.day = getFirstDayOfMonth(new Date(this.year + '-' + (this.month + 1) + '-' + this.date))
      this.rows = Math.ceil((this.dayCounts + this.day) / 7) * 7
    },
    changeMonth (type) {
      if (type === 'pre') {
        this.year = (this.month === 0 ? this.year - 1 : this.year)
        this.month = (this.month === 0 ? 11 : this.month - 1)
      } else {
        this.year = (this.month === 11 ? this.year + 1 : this.year)
        this.month = (this.month === 11 ? 0 : this.month + 1) 
      }
      this.getCurMonth(this.year, this.month)
    }
  }
}
</script>
<style lang="less" scoped>
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
