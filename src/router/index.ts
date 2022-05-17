import { createRouter, createWebHashHistory } from 'vue-router'


// 路由规则
const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children: [
      { path: '', redirect: '/home' },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/Home.vue')
      },
      {
        path: '/mine',
        name: 'mine',
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
