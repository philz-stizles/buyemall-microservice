import SubCategoryService from '@/services/sub-category-service'

export default {
  namespaced: true,
  state: {
    subCategories: [],
    selectedSubCategory: null,
    isLoading: false,
    error: null,
  },
  mutations: {
    setSubCategories(state, data) {
      state.subCategories = data
    },
    setIsLoading(state, data) {
      state.isLoading = data
    },
    setSelectedCategory(state, data) {
      state.selectedSubCategory = data
    },
    setSubCategoryFailure(state, data) {
      state.error = data
    },
  },
  actions: {
    getFilteredList({ commit }, filters) {
      return SubCategoryService.getFilteredList(filters).then(
        data => {
          commit('setSubCategories', data)
          return Promise.resolve(data)
        },
        error => {
          commit('subCategoryFailure')
          return Promise.reject(error)
        }
      )
    },
    getCategory({ commit }, id) {
      return SubCategoryService.getFilteredList(id).then(
        data => {
          commit('setSelectedSubCategory', data)
          return Promise.resolve(data)
        },
        error => {
          commit('categoryFailure')
          return Promise.reject(error)
        }
      )
    },
    create({ commit }, newEntity) {
      return SubCategoryService.create(newEntity).then(
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
      return SubCategoryService.update(updatedEntity).then(
        data => {
          // commit('setSelectedCategory', data)
          return Promise.resolve(data)
        },
        error => {
          commit('subCategoryFailure')
          return Promise.reject(error)
        }
      )
    },
  },
  getters: {
    subCategories(state) {
      return state.subCategories
    },
    isLoading(state) {
      return state.isLoading
    },
    selectedSubCategory(state) {
      return state.selectedSubCategory
    },
  },
}
