import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/pages/AppHome.vue')
  },
  {
    path: '/write',
    name: 'Write',
    component: () => import('../components/pages/AppWrite.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../components/pages/AppDetail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/pages/AppLogin.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/pages/AppRegister.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
