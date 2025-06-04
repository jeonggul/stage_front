import {createRouter, createWebHistory} from 'vue-router'
import main_project from '@/views/main_project.vue'
import login from '@/views/login.vue'
import signup from '@/views/signup.vue'
import signup_details from '@/views/signup_details.vue'
import search_result from '@/views/search_result.vue'
import detail_page from '@/views/detail_page.vue'
import cancel_page from '@/views/cancel.vue'
import default_page from '@/views/default.vue'
import detail_page2 from '@/views/detail.vue'
import reservation_page from '@/views/reservation.vue'
import signup_details_foreign from '@/views/signup_details_foreign.vue'

const routes = [
  {path: '/', component: main_project}, // 메인페이지
  {path: '/login', component: login},
  {path: '/signup', component: signup},
  {path: '/signup_details', component: signup_details},
  {path: '/search_result', component: search_result},
  {path: '/detail_page',  component: detail_page},
  {path: '/cancel',  component: cancel_page},
  {path: '/default',  component: default_page},
  {path: '/detail',  component: detail_page2},
  {path: '/reservation',  component: reservation_page},
   {path:'/signup_details_foreign', component: signup_details_foreign}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
