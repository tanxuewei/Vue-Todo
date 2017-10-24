<template>
  <div>
    <ul class="m-menu">
      <li v-for="menu in menus"
          class="item-1">
        <a href="javascript:;" class="f-cb" @click="menu.state = !menu.state">
          <i class="iconfont icon-xihuan"></i>{{ menu.name }}<i class="iconfont icon-xiala1 f-fr" :class="{ 'transform': menu.state }"></i>
        </a>
        <transition name="fade">
        <ul class="item-ul" v-show="menu.state">
          <li v-for="child in menu.childrens"
              :key="child.id"
              class="item-2"
              :class="{ 'act': child.id== actId }"
              @click="actId = child.id">{{ child.name }}</li>
        </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      menus: [{
        name: '内容管理',
        icon: 'con',
        state: false,
        childrens: [{
          name: '嘿嘿嘿嘿',
          id: '0-1'
        }, {
          name: '哈哈哈哈',
          id: '0-2'
        }, {
          name: '好害怕啊',
          id: '0-3'
        }]
      }, {
        name: '用户管理',
        icon: 'con',
        state: false,
        childrens: [{
          name: '嘿嘿嘿嘿',
          id: '1-1'
        }, {
          name: '哈哈哈哈',
          id: '1-2'
        }, {
          name: '好害怕啊',
          id: '1-3'
        }]
      }, {
        name: '统计管理',
        icon: 'con',
        state: false,
        childrens: [{
          name: '嘿嘿嘿嘿',
          id: '2-1'
        }, {
          name: '哈哈哈哈',
          id: '2-2'
        }, {
          name: '好害怕啊',
          id: '2-3'
        }]
      }],
      actId: ''
    }
  },
  created () {

  },
  computed: {

  },
  methods: {

  }
}
</script>