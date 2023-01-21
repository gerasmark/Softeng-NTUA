// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router'
import App from '../views/App.vue'

// @ts-ignore
// @ts-ignore
// @ts-ignore
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
