import { createStore } from 'vuex'
import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'
import category from './modules/category'
import auth from './modules/auth'

export default createStore({
  state: {},
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
  modules: {
    auth,
    category,
  },
})
