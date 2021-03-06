import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    alias: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
