import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product-list',
      name: 'ProductList',
      component: () => import('../views/ProductList.vue'),
    },
    {
      path: '/product-form',
      name: 'ProductForm',
      component: () => import('../views/ProductForm.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    }
    
    
  ]
  
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken') !== null;
  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router
