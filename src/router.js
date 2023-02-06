import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'


const routes = [
  //массив, где каджый объект - новая страница
  {
    path: '/', //первый обязательный параметр путь - главная страница, стартовая
    component: Home //второй обязательный параметр, Home создаем сами, то как будет выглядеть стартовая страница
  },
  {
    path: '/todos', //регистрируем еще 1 путь
    component: () => import('./views/Todos.vue') //это lazy loading
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link'
})

export default router
