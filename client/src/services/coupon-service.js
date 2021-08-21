import http from './http-common'

class CouponDataService {
  constructor() {
    this.endpoint = `/coupons`
  }

  getFilteredList(filters) {
    return http.get(
      `${this.endpoint}?${Object.keys(filters).map(
        filter => `${filter}=${filters[filter]}`
      )}`
    )
  }

  get(id) {
    return http.get(`${this.endpoint}/${id}`)
  }

  create(data) {
    return http.post(this.endpoint, data)
  }

  update(id, data) {
    return http.put(`${this.endpoint}/${id}`, data)
  }

  delete(id) {
    return http.delete(`${this.endpoint}/${id}`)
  }
}

export default new CouponDataService()
