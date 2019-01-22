import Vue from 'vue'
import Router from 'vue-router'

import { MAIN_PAGE, SECOND_PAGE } from './config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: MAIN_PAGE,
      name: 'MainPage',
      component: () => import('@/pages/MainPage')
    },
    {
      path: SECOND_PAGE,
      name: 'SecondPage',
      component: () => import('@/pages/Post')
    }
  ]
})
