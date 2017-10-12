<template>
  <div id="app">
    <!-- <my-button @click.native="buttonClick"></my-button> -->
    <router-view></router-view>
  </div>
</template>
<script>
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
* {
  padding: 0;
  margin: 0;
}
body,html {width:100%;height:100%}
/* h1{margin-top:10rem;} */
.layer{width:100%;height:100%;position:fixed;top:0;left:0;z-index:99;background:rgba(0,0,0,.5)}
</style>
