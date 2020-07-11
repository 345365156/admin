import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout'

Vue.use(Router)

/**
 * 备注: sub-menu 只会当 children.length >= 1 时出现
 * 详情 见: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   如果设为 true, item 不会在 sidebar 组件中显示(默认为 false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * 不需要权限的基本页面
 * 所有角色都被授权访问
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/exercise',
    component: Layout,
    redirect: '/exercise/transform',
    name: 'Exercise',
    meta: { title: 'Exercise', icon: 'exercise' },
    children: [
      {
        path: 'transform',
        name: 'transform',
        component: () => import('@/views/exercise/transform'),
        meta: { title: 'Transform' }
      }, {
        path: 'distinct',
        name: 'distinct',
        component: () => import('@/views/exercise/distinct'),
        meta: { title: 'Distinct' }
      }, {
        path: 'watchArr',
        name: 'watchArr',
        component: () => import('@/views/exercise/watchArr'),
        meta: { title: 'WatchArr' }
      }
    ]
  },

  {
    path: '/openLayers',
    component: Layout,
    redirect: '/openLayers/drawMap',
    name: 'Open Layers',
    meta: { title: 'Open Layers', icon: 'openLayers' },
    children: [
      {
        path: 'drawMap',
        name: 'drawMap',
        component: () => import('@/views/openLayers/drawMap'),
        meta: { title: '地图' }
      }, {
        path: 'drawFeatures',
        name: 'drawFeatures',
        component: () => import('@/views/openLayers/drawFeatures'),
        meta: { title: 'DrawFeatures' }
      }, {
        path: 'drawShape',
        name: 'drawShape',
        component: () => import('@/views/openLayers/drawShape'),
        meta: { title: 'DrawShape' }
      }, {
        path: 'setPoint',
        name: 'setPoint',
        component: () => import('@/views/openLayers/setPoint'),
        meta: { title: '设置点位' }
      }, {
        path: 'markAnimation',
        name: 'markAnimation',
        component: () => import('@/views/openLayers/markAnimation'),
        meta: { title: 'MarkAnimation' }
      }, {
        path: 'yn',
        name: 'yn',
        component: () => import('@/views/openLayers/yn'),
        meta: { title: 'yn' }
      }
    ]
  },


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
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
