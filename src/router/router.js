import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Order',
    component: () => import('../view/Order.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router