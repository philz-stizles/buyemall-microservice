import http from './http-common'

class CategoryDataService {
  constructor() {
    this.endpoint = '/category'
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

  create(data, token) {
    return http.post(this.endpoint, data, {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  update(id, data) {
    return http.put(`${this.endpoint}/${id}`, data)
  }

  delete(id) {
    return http.delete(`${this.endpoint}/${id}`)
  }
}

export default new CategoryDataService()
