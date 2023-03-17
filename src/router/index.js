import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'AllProducts', 
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ProfileView.vue')
  },
{
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/checkout',
    name: 'CheckoutView',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/login',
    name: 'loginView',  
    component: () => import('../views/loginView.vue')
  },
  {
    path: '/registerView',
    name: 'registerView',  
    component: () => import('../views/registerView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
