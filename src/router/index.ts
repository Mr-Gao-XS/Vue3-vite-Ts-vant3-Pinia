import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


// 路由规则
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    redirect: '/home',
    children: [
      { path: '', redirect: '/home' },
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          icon: 'home-o',
        },
        component: () => import('@/views/home/Home.vue')
      },
      {
        path: '/test',
        name: 'test',
        meta: {
          title: '演示',
          icon: 'apps-o',
        },
        component: () => import('@/views/test/Test.vue')
      },
      {
        path: '/mine',
        name: 'mine',
        meta: {
          title: '我的',
          icon: 'user-o',
        },
        component: () => import('@/views/mine/Mine.vue')
      }

    ]
  }
]

const router = createRouter({
  // vueRouter@3版本的mode改成了history，hash模式配置createWebHashHistory，history模式配置createWebHistory
  history: createWebHashHistory(),
  routes
})

export default router
