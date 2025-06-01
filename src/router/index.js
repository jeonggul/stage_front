/*const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/detail',  //추가
      name: 'detail',
      component: () => import('../views/detail_page.vue'), //세부페이지
    },
  ],
})*/

import { createRouter, createWebHistory } from 'vue-router'
import Detail_page from '../views/detail_page.vue'

const routes = [
  {
    path: '/',
    name: 'detail_page',
    component: Detail_page
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router