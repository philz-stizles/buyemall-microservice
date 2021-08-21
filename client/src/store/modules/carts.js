import CartService from '@/services/category-service'

export default {
  namespaced: true,
  state: {
    cart: {
      items: [],
      totalAmount: 0,
      totalItems: 0,
      totalProducts: 0,
    },
    isLoading: false,
    error: null,
  },
  mutations: {
    setIsLoading(state, data) {
      state.isLoading = data
    },
    setSelectedCart(state, data) {
      state.selectedCart = data
    },
    setCartFailure(state, data) {
      state.error = data
    },
  },
  actions: {
    create({ commit }, newEntity) {
      return CartService.create(newEntity).then(
        data => {
          // commit('setSelectedCart', data)
          return Promise.resolve(data)
        },
        error => {
          commit('categoryFailure')
          return Promise.reject(error)
        }
      )
    },
    update({ commit }, updatedEntity) {
      return CartService.update(updatedEntity).then(
        data => {
          // commit('setSelectedCart', data)
          return Promise.resolve(data)
        },
        error => {
          commit('categoryFailure')
          return Promise.reject(error)
        }
      )
    },
  },
  getters: {
    cart(state) {
      return state.cart
    },
    totalAmount(state) {
      return state.cart.totalAmount
    },
    totalItems(state) {
      return state.cart.totalItems
    },
    totalProducts(state) {
      return state.cart.totalProducts
    },
    isLoading(state) {
      return state.isLoading
    },
  },
}
