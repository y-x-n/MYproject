import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: () => import('@/view/login/index'),
      hidden: true
    },
  ]
})
