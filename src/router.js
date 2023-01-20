import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router) //регистрируем Router как плагин

export default new Router({
    //передаем сюда объект
    mode: 'history', //слеши в пути????
    routes: [ //массив, где каджый объект - новая страница
        {
            path: '/', //первый обязательный параметр путь - главная страница
            component: Home, //второй обязательный параметр, Home создаем сами  
        },
        {
            path: '/todos', //регистрируем еще 1 путь
            component: () => import('./views/Todos.vue') //это lazy loading
        }
    ]
})