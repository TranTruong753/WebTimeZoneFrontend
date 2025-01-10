import { createRouter, createWebHistory } from 'vue-router'
import user from './user.route'
import other from './other.route'



const routes = [...user,...other];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
