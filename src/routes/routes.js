// import vue-router functionality //
import { createRouter, createWebHistory } from 'vue-router';
import BillingPage from '@/pages/billing/BillingPage.vue'
import HeroPage from '@/pages/hero/HeroPage.vue'

const routes = [
  {
    path: '/',
    component: HeroPage,
  },
  {
    path: '/billing',
    component: BillingPage,
  }
]

const router = createRouter({
  history: createWebHistory(), // tell the browser to use built-in mechanism to manage history of your app //
  routes,
})

export default router;