import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pages',
    name: 'pages',
    component: () => import('../views/PagesView.vue')
  },
  {
    path: '/membership',
    name: 'membership',
    component: () => import('../views/MembershipView.vue')
  },
  {
    path: '/lessons',
    name: 'lessons',
    component: () => import('../views/LessonsView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
