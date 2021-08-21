import ProductService from '@/services/category-service'

export default {
  namespaced: true,
  state: {
    products: [],
    selectedProduct: null,
    isLoading: false,
    error: null,
  },
  mutations: {
    setProducts(state, data) {
      state.products = data
    },
    setIsLoading(state, data) {
      state.isLoading = data
    },
    setSelectedProduct(state, data) {
      state.selectedProduct = data
    },
    setProductFailure(state, data) {
      state.error = data
    },
  },
  actions: {
    getFilteredList({ commit }, filters) {
      return ProductService.getFilteredList(filters).then(
        data => {
          commit('setProducts', data)
          return Promise.resolve(data)
        },
        error => {
          commit('categoryFailure')
          return Promise.reject(error)
        }
      )
    },
    getProduct({ commit }, id) {
      return ProductService.getFilteredList(id).then(
        data => {
          commit('setSelectedProduct', data)
          return Promise.resolve(data)
        },
        error => {
          commit('categoryFailure')
          return Promise.reject(error)
        }
      )
    },
    create({ commit }, newEntity) {
      return ProductService.create(newEntity).then(
        data => {
          // commit('setSelectedProduct', data)
          return Promise.resolve(data)
        },
        error => {
          commit('categoryFailure')
          return Promise.reject(error)
        }
      )
    },
    update({ commit }, updatedEntity) {
      return ProductService.update(updatedEntity).then(
        data => {
          // commit('setSelectedProduct', data)
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
    products(state) {
      return state.products
    },
    isLoading(state) {
      return state.isLoading
    },
    selectedProduct(state) {
      return state.selectedProduct
    },
  },
}
