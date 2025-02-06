import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import TankView from '../views/TankView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: TankView,
    },
    {
      path: '/',
      name: 'Start Page',
      component: StartView,
    },
  ],
})

export default router
