import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import OAuthCallback from '@/components/OAuthCallback'

Vue.use(Router)

export default new Router({
  beforeEach (to, from, next) {
    if (to.path !== '/login' && (Vue.prototype.$fitbit.token === undefined || Vue.prototype.$fitbit.token === null)) {
      next('/login')
    }
    next()
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/oauth-callback/:token/:expiresIn/:accountUserId',
      name: 'OAuth Callback Token',
      component: OAuthCallback
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
