import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/post-page/:id',
      name: 'PostPage',
      component: () => import('./pages/Post/index.vue'),
      props: true
    }
  ]
})
