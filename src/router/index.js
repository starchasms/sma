import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/my',
    name: 'My',
    component: () => import("@/views/Mine/Mine.vue")
  },
  {
    path: '/furniture',
    name: 'Furniture',
    component: () => import("@/views/FurnitureManage.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
