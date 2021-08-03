import AuthService from '../services/auth.service'

const loggedInUser = JSON.parse(localStorage.getItem('user'))

export default {
  namespaced: true,
  state: loggedInUser
    ? { isAuthenticated: true, loggedInUser }
    : { isAuthenticated: false, loggedInUser: null },
  mutations: {
    loginSuccess(state, user) {
      state.isAuthenticated = true
      state.loggedInUser = user
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
    login({ commit }, credentials) {
      return AuthService.login(credentials).then(
        user => {
          commit('loginSuccess', user)
          return Promise.resolve(user)
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
  },
}
