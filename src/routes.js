// import vue-router functionality //
import { createRouter, createWebHistory } from 'vue-router';
import TheHero from './components/views/TheHero.vue'
import TheNews from './components/views/TheNews.vue'
import TheHelp from './components/views/TheHelp.vue'
import TheTariffs from './components/views/TheTariffs.vue'
import TheAbout from './components/views/TheAbout.vue'
import TheBilling from './components/views/TheBilling.vue'

const routes = [
  {
    path: '/main',
    component: TheHero,
  },
  {
    path: '/news',
    component: TheNews,
  },
  {
    path: '/help',
    component: TheHelp,
  },
  {
    path: '/tariffs',
    component: TheTariffs,
  },
  {
    path: '/about',
    component: TheAbout,
  },
  {
    path: '/login',
    component: TheBilling,
  },
  {
    path: '/users/:userId',
    component: TheBilling,
  }
]

const router = createRouter({
  history: createWebHistory(), // tell the browser to use built-in mechanism to manage history of your app //
  routes,
})

export default router;