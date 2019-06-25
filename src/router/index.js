import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Layout from '../views/Layout'

Vue.use(Router)

export const constantRoutes = [
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

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
