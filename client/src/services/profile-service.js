import http from './http-common'

class ProfileDataService {
  constructor() {
    this.url = `${process.env.VUE_APP_API_BASE_URL}/profiles`
  }

  getAll() {
    return http.get(this.url)
  }

  get(id) {
    return http.get(`${this.url}/${id}`)
  }

  create(data) {
    return http.post(this.url, data)
  }

  update(id, data) {
    return http.put(`${this.url}/${id}`, data)
  }

  delete(id) {
    return http.delete(`${this.url}/${id}`)
  }
}

export default new ProfileDataService()
