import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../view/Index.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../view/Order.vue')
  },
  {
    path: '/searchOrder',
    name: 'SearchOrder',
    component: () => import('../view/SearchOrder.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../view/Product.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../view/Test.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router