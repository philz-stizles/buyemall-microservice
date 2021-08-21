import { createStore } from 'vuex'
import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'
import auth from './modules/auth'
import categories from './modules/categories'
import subCategories from './modules/sub-categories'
import products from './modules/products'
import coupons from './modules/coupons'

export default createStore({
  state: {
    isDrawerOpen: false,
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
  modules: {
    auth,
    categories,
    subCategories,
    products,
    coupons,
  },
})
