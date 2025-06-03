import { createRouter, createWebHistory } from 'vue-router'
import main_project from '../views/main_project.vue'

const routes = [
  {
    path: '/',
    name: 'main_project',
    component: main_project
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router