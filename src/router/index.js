import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/Login.vue';
import Docs from '@/views/Docs.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Docs,
    meta: { requiresAuth: true } // protect this route
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login' // fallback for unknown routes
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Simple route guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else if (to.path === '/login' && isAuthenticated) {
    next('/docs'); // redirect logged-in user away from login
  } else {
    next();
  }
});

export default router;
