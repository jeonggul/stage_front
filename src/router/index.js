import {createRouter, createWebHistory} from 'vue-router'
import main_project from '../views/main_project.vue'
import login from '@/views/login.vue'
import signup from '@/views/signup.vue'
import signup_details from '@/views/signup_details.vue'
import search_result from '@/views/search_result.vue'
import detail_page from '../views/detail_page.vue'

const routes = [
//  {path: '/', redirect: '/'},
  {path: '/', component: main_project},
  {path: '/login', component: login},
  {path: '/signup', component: signup},
  {path: '/signup_details', component: signup_details},
  {path: '/search_result', component: search_result},
  {path: '/detail_page',  component: detail_page}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
