// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'jquery'
import router from './router'
import store from '@/vuex'

Vue.config.productionTip = false

Vue.prototype.$fitbit = {
  token: window.localStorage.getItem('fitbitOauthToken'),
  expiresIn: window.localStorage.getItem('fitbitOauthExpiresIn'),
  accountUserId: window.localStorage.getItem('fitbitOauthAccountUserId'),
  isLoggedIn: window.localStorage.getItem('fitbitOauthToken') !== undefined
}

import axios from 'axios'
Vue.prototype.$axios = axios

if (Vue.prototype.$fitbit.token !== undefined) {
  Vue.prototype.$axios.defaults.headers.common = {
    'Authorization': 'Bearer ' + Vue.prototype.$fitbit.token
  }
}

// my styles
import './assets/scss/app.scss'
import 'font-awesome/css/font-awesome.min.css'

// uikit
import 'uikit'
import 'uikit/dist/js/uikit-icons'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
