import { createRouter, createWebHistory } from 'vue-router'

import communities from '../views/communities.vue'
import Feed from '../views/Feed.vue'
import assignments from '../views/assignments.vue'
import events from '../views/events.vue'
import chats from '../views/chats.vue'
import profile from '../views/profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'feed', component: Feed },
    { path: '/communities', name: 'communities', component: communities },
    { path: '/assignments', name: 'assignments', component: assignments },
    { path: '/events', name: 'events', component: events },
    { path: '/chats', name: 'chats', component: chats },
    { path: '/profile', name: 'profile', component: profile },
  ],
})

export default router
