import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: { title: '首页', icon: 'House' },
    },
    {
      path: '/skit',
      name: 'skit',
      component: () => import('@/views/skit/index.vue'),
      meta: { title: '首页', icon: 'House' },
    },
    {
      path: '/recharge',
      component: () => import('@/views/recharge/index.vue'),
      meta: { title: '充值管理', icon: 'House' },
    },
    {
      path: '/rechargeWeekList',
      component: () => import('@/views/recharge/weekList.vue'),
      meta: { title: '充值管理', icon: 'House' },
    },
    {
      path: '/rechargeMonthList',
      component: () => import('@/views/recharge/monthList.vue'),
      meta: { title: '充值管理', icon: 'House' },
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
      meta: {
        title: '404',
        keepAlive: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})
export default router
