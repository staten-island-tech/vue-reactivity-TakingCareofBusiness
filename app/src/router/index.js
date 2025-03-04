import { createRouter, createWebHistory } from 'vue-router'
import FishView from '../views/FishView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Fish View',
      component: FishView,
    },
  ],
})

export default router
