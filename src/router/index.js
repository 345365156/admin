import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Layout from '../views/Layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/',
      component: Layout
      // redirect: 'dashboard',
      // children: [
      //   {
      //     path: 'dashboard',
      //     component: () => import('@/views/dashboard/index'),
      //     name: 'Dashboard',
      //     meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
      //   }
      // ]
    }
  ]
})
