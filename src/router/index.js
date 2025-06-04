import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue'
import signup from '@/views/signup.vue'
import signup_details from '@/views/signup_details.vue'
import search_result from '@/views/search_result.vue'
import signup_details_foreign from '@/views/signup_details_foreign.vue'

const routes = [
    {path:'/', redirect: '/login'},
    {path:'/login', component: login},
    {path: '/signup', component: signup},
    {path: '/signup_details', component: signup_details},
    {path:'/search_result', component:search_result},
    {path:'/signup_details_foreign', component: signup_details_foreign}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
