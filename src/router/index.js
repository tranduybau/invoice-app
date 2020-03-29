import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
  },
  {
    path: '/detail/:id',
    name: 'DetailInvoice',
    component: () => import('../views/ShowDetailInvoice'),
  },
  {
    path: '/edit/:id',
    name: 'EditInvoice',
    component: () => import('../views/FormInvoice'),
    meta: { requiresAuth: true },
  },
  {
    path: '/create-new-invoice',
    name: 'NewInvoice',
    component: () => import('../views/FormInvoice'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register'),
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
