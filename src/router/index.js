import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/module/index.vue'
import List from '@/module/list.vue'
import Game from '@/module/game.vue'
import DatePage from '@/module/date.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/date',
      name: 'date',
      component: DatePage
    }
  ]
})
