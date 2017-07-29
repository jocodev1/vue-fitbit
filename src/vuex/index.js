import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fitbit: {
      user: {}
    }
  },
  getters: {
    fitbit: state => {
      return state.fitbit
    }
  },
  mutations: {
    setFitbitUser (state, user) {
      state.fitbit.user = user
    }
  },
  actions: {
    fetchProfile ({ commit }, fitbit) {
      Vue.prototype.$axios({
        url: 'https://api.fitbit.com/1/user/' + fitbit.accountUserId + '/profile.json',
        method: 'GET'
      }).then(function (response) {
        commit('setFitbitUser', response.data.user)
      }).catch(function (error) {
        console.log(error.response)
      })
    }
  }
})
