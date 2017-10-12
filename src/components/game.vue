<template>
  <div>
    <p>时间：{{ time }}</p>
    <p>比赛结果: {{ result }}</p>
    <p>中国队得分: {{ team.china }}</p>
    <p><button @click="team.china++">中国队进球</button></p>
    <p>韩国队得分: {{ team.korea }}</p>
    <p><button @click="team.korea++">韩国队进球</button></p>
  </div>
</template>
<script>
export default {
  name: 'game',
  data () {
    return {
      time: 0,
      team: {
        china: 0,
        korea: 0
      }
    }
  },
  created () {
    let time = setInterval(() => {
      this.time++
      if (this.time == 90) {
        clearInterval(time)
      }
    }, 1000)
  },
  computed: {
    result () {
      if (this.time < 90) {
        if (this.team.china > this.team.korea) {
          return '中国队领先'
        } else if (this.team.china < this.team.korea) {
          return '韩国队领先'
        } else {
          return '双方僵持'
        }
      } else {
        if (this.team.china > this.team.korea) {
          return '中国队赢'
        } else if (this.team.china < this.team.korea) {
          return '韩国队赢'
        } else {
          return '平局'
        }
      }
    }
  },
  methods: {

  }
}
</script>
<style lang="less">
</style>
