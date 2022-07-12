import Vue from 'vue'
import VueRouter from 'vue-router'
import menu from '../views/menu.vue'

Vue.use(VueRouter)

const routes = [
  {
    title: "首页",
    path: '/',
    name: 'menu',
    component: menu,
    children: [
      {
        title: "概要",
        path: '/outline',
        name: '/outline',
        icon: "el-icon-menu",
        component: () => import('@/components/outline/index.vue')
      },
      {
        title: "数据分析",
        path: '/dataAnalysis',
        name: 'dataAnalysis',
        icon: "el-icon-location",
        component: () => import('@/components/common/index.vue'),
        children: [
          {
            title: "表格",
            path: '/table',
            name: 'table',
            icon: "el-icon-platform-eleme",
            component: () => import('@/components/table/index.vue')
          },
          {
            title: "图表",
            path: '/echearts',
            name: 'echearts',
            icon: "el-icon-platform-eleme",
            component: () => import('@/components/echearts/index.vue')
          },
        ]
      },
      {
        title: "设置",
        path: '/setUp',
        name: 'setUp',
        icon: "el-icon-s-tools",
        component: () => import('@/components/setUp/index.vue')
      },
      {
        title: "关于",
        path: '/about',
        name: 'about',
        icon: "el-icon-s-promotion",
        component: () => import('@/components/about/index.vue')
      },
    ]
  },
  {
    path: '/404',
    name: '/404',
    component: () =>
      import('../components/404/index.vue')
  },
  {
    path: '*',
    beforeEnter: (to, from, next) => {
      next('/404')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
