import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Registration from '@/components/Registration'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/register',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
  mode: 'history'
})
