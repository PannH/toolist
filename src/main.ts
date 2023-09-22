import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Categories from './views/Categories.vue';
import './styles/index.scss';

const router = createRouter({
   history: createWebHistory(),
   routes: [{
      path: '/',
      component: Home
   }, {
      path: '/categories',
      component: Categories
   }]
});

createApp(App)
   .use(router)
   .mount('#app');