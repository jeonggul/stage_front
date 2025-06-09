import { createRouter, createWebHistory } from 'vue-router'

// 각 뷰는 지연 로딩으로 불러와 초기 로딩 속도를 개선합니다.
const routes = [
  {
    path: '/',
    component: () => import('@/views/main_project.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/signup',
    component: () => import('@/views/signup.vue'),
  },
  {
    path: '/signup_details',
    component: () => import('@/views/signup_details.vue'),
  },
  {
    path: '/search_result',
    component: () => import('@/views/search_result.vue'),
  },
  {
    path: '/detail_page',
    component: () => import('@/views/detail_page.vue'),
  },
  {
    path: '/cancel',
    component: () => import('@/views/cancel.vue'),
  },
  {
    path: '/default',
    component: () => import('@/views/default.vue'),
  },
  {
    path: '/detail',
    component: () => import('@/views/detail.vue'),
  },
  {
    path: '/reservation',
    component: () => import('@/views/reservation.vue'),
  },
  // 외국인 회원가입 페이지는 아직 준비 중입니다.
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
