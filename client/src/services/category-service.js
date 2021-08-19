import http from '../http-common'

class CategoryDataService {
  constructor() {
    this.endpoint = '/category'
  }

  getAll() {
    return http.get(this.endpoint)
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

export default new CategoryDataService()
