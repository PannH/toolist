import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './styles/index.scss';
import App from './App.vue';
import Home from './views/Home.vue';
import Categories from './views/Categories.vue';
import Category from './views/Category.vue';

const router = createRouter({
   history: createWebHistory(),
   routes: [{
      path: '/',
      component: Home
   }, {
      path: '/categories',
      component: Categories
   }, {
      path: '/categories/:slug',
      component: Category
   }]
});

createApp(App)
   .use(router)
   .mount('#app');