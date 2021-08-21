import AuthService from '@/services/auth-service'

const loginCredentials = JSON.parse(localStorage.getItem('user'))

export default {
  namespaced: true,
  state: loginCredentials
    ? {
        isAuthenticated: true,
        loggedInUser: loginCredentials.user,
        token: loginCredentials.token,
        expiration: loginCredentials.expirations,
      }
    : {
        isAuthenticated: false,
        loggedInUser: null,
        token: null,
        expiration: null,
      },
  mutations: {
    loginSuccess(state, { user, token, expiration }) {
      state.isAuthenticated = true
      state.loggedInUser = user
      state.token = token
      state.expiration = expiration
    },
    loginFailure(state) {
      state.isAuthenticated = false
      state.loggedInUser = null
    },
    logout(state) {
      state.isAuthenticated = false
      state.loggedInUser = null
    },
    registerSuccess(state) {
      state.isAuthenticated = false
    },
    registerFailure(state) {
      state.isAuthenticated = false
    },
  },
  actions: {
    signIn({ commit }, credentials) {
      return AuthService.signIn(credentials).then(
        data => {
          console.log(data)
          commit('loginSuccess', data)
          return Promise.resolve(data)
        },
        error => {
          commit('loginFailure')
          return Promise.reject(error)
        }
      )
    },
    logOut({ commit }) {
      AuthService.logOut()
      commit('logout')
    },
    signUp({ commit }, credentials) {
      console.log(credentials)
      return AuthService.signUp(credentials).then(
        response => {
          commit('registerSuccess')
          return Promise.resolve(response.data)
        },
        error => {
          commit('registerFailure')
          return Promise.reject(error)
        }
      )
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated
    },
    getToken(state) {
      return state.token
    },
  },
}
