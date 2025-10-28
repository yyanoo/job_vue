import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/Index',
  },
  {
    path: '/Index',
    name: 'Index',
    component: () => import('../view/Index.vue')
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('../view/Order.vue')
  },
  {
    path: '/Ordercontroller',
    name: 'Ordercontroller',
    component: () => import('../view/Order_controller.vue')
  },
  {
    path: '/Product',
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