<template>
  <div id="app">
    <!-- <my-button @click.native="buttonClick"></my-button> -->
    <router-view></router-view>
  </div>
</template>
<script>
import common from '@/less/common.less'
import myButton from '@/components/myButton.vue'

export default {
  name: 'app',
  components: {
    myButton
  },
  data () {
    return {
    }
  },
  methods: {
    buttonClick () {
    }
  }
}
</script>
<style scoped>

</style>