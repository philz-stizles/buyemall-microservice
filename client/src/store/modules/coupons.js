import CouponService from '@/services/coupon-service'

export default {
  namespaced: true,
  state: {
    coupons: [],
    selectedCoupon: null,
    isLoading: false,
    error: null,
  },
  mutations: {
    setCategories(state, data) {
      state.coupons = data
    },
    setIsLoading(state, data) {
      state.isLoading = data
    },
    setSelectedCoupon(state, data) {
      state.selectedCoupon = data
    },
    setCouponFailure(state, data) {
      state.error = data
    },
  },
  actions: {
    getFilteredList({ commit }, filters) {
      return CouponService.getFilteredList(filters).then(
        data => {
          commit('setCategories', data)
          return Promise.resolve(data)
        },
        error => {
          commit('couponFailure')
          return Promise.reject(error)
        }
      )
    },
    getCoupon({ commit }, id) {
      return CouponService.getFilteredList(id).then(
        data => {
          commit('setSelectedCoupon', data)
          return Promise.resolve(data)
        },
        error => {
          commit('couponFailure')
          return Promise.reject(error)
        }
      )
    },
    create({ commit }, newEntity) {
      return CouponService.create(newEntity).then(
        data => {
          // commit('setSelectedCoupon', data)
          return Promise.resolve(data)
        },
        error => {
          commit('couponFailure')
          return Promise.reject(error)
        }
      )
    },
    update({ commit }, updatedEntity) {
      return CouponService.update(updatedEntity).then(
        data => {
          // commit('setSelectedCoupon', data)
          return Promise.resolve(data)
        },
        error => {
          commit('couponFailure')
          return Promise.reject(error)
        }
      )
    },
  },
  getters: {
    coupons(state) {
      return state.coupons
    },
    isLoading(state) {
      return state.isLoading
    },
    selectedCoupon(state) {
      return state.selectedCoupon
    },
  },
}
