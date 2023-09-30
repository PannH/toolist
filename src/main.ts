import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './styles/index.scss';
import App from './App.vue';
import Home from './views/Home.vue';
import Categories from './views/Categories.vue';
import Category from './views/Category.vue';
import Favorites from './views/Favorites.vue';
import Redirect from './views/Redirect.vue';
import NotFound from './views/NotFound.vue';

const router = createRouter({
   history: createWebHistory(),
   routes: [{
      path: '/',
      component: Home
   }, {
      path: '/categories',
      component: Categories
   }, {
      path: '/category/:slug',
      component: Category
   }, {
      path: '/favorites',
      component: Favorites
   }, {
      path: '/redirect',
      component: Redirect
   }, {
      path: '/not-found',
      component: NotFound
   }, {
      path: '/:pathMatch(.*)',
      redirect: '/not-found'
   }]
});

createApp(App)
   .use(router)
   .mount('#app');