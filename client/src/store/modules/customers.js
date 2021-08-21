import CategoryService from '@/services/category-service'

export default {
  namespaced: true,
  state: {
    categories: [],
    selectedCategory: null,
    isLoading: false,
    error: null,
  },
  mutations: {
    setCategories(state, data) {
      state.categories = data
    },
    setIsLoading(state, data) {
      state.isLoading = data
    },
    setSelectedCategory(state, data) {
      state.selectedCategory = data
    },
    setCategoryFailure(state, data) {
      state.error = data
    },
  },
  actions: {
    getFilteredList({ commit }, filters) {
      return CategoryService.getFilteredList(filters).then(
        data => {
          commit('setCategories', data)
          return Promise.resolve(data)
        },
        error => {
          commit('categoryFailure')
          return Promise.reject(error)
        }
      )
    },
    getCategory({ commit }, id) {
      return CategoryService.getFilteredList(id).then(
        data => {
          commit('setSelectedCategory', data)
          return Promise.resolve(data)
        },
        error => {
          commit('categoryFailure')
          return Promise.reject(error)
        }
      )
    },
    create({ commit }, newEntity) {
      return CategoryService.create(newEntity).then(
        data => {
          // commit('setSelectedCategory', data)
          return Promise.resolve(data)
        },
        error => {
          commit('categoryFailure')
          return Promise.reject(error)
        }
      )
    },
    update({ commit }, updatedEntity) {
      return CategoryService.update(updatedEntity).then(
        data => {
          // commit('setSelectedCategory', data)
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
    categories(state) {
      return state.categories
    },
    isLoading(state) {
      return state.isLoading
    },
    selectedCategory(state) {
      return state.selectedCategory
    },
  },
}
