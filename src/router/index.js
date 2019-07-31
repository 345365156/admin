import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Layout from '../views/Layout'

Vue.use(Router)

/**
 * 注: sub-menu 只有在子路由的长度 >= 1 时显示
 * 详情见: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   如果设为 true, 此项不会在侧边栏展示(默认为 false)
 * alwaysShow: true               如果设为 true, 此项总会显示在根菜单
 *                                如果没有设置 alwaysShow, 当item有超过一个子路由时,
 *                                将会变为 nested mode, 否则不展示在根菜单
 * redirect: noRedirect           如果设置 noRedirect 在 breadcrumb 中将不会重定向
 * name:'router-name'             用于 <keep-alive> 中 (必填!!!)
 * meta : {
  roles: ['admin','editor']       设置有权限的角色 (可以设置多个角色)
    title: 'title'                显示在 sidebar 和 breadcrumb 中的文字 (必填)
    icon: 'svg-name'              显示在 sidebar 的图标名
    breadcrumb: false             如果设为 false, 此项将会在 breadcrumb 中隐藏 (默认为 true)
    activeMenu: '/example/list'   如果设置路径, sidebar 会将设置路径的路由项高亮
  }
 */


/**
 * constantRoutes
 * 基础页面，没有权限限制，所有的角色都被许可
 */
export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
  },
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard' }
      }
    ]
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
