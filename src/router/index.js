import { createRouter, createWebHistory } from 'vue-router'

import communities from '../views/communities.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/communities', name: 'communities', component: communities }],
})

export default router
