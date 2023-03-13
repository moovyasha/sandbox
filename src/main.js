import { createApp } from 'vue'
import store from '@/api/store'
import App from './App.vue'
import Router from './router.js'

const app = createApp(App);
app.use(store);
app.use(Router);
app.mount('#app');
