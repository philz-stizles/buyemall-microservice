import axios from 'axios'

class AuthService {
  baseUrl = `${process.env.VUE_APP_API_BASE_URL}/auth`

  signIn(credentials) {
    return axios.post(`${this.baseUrl}/signin`, credentials).then(response => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
  }

  logOut() {
    localStorage.removeItem('user')
  }

  signUp(credentials) {
    return axios.post(`${this.baseUrl}/signup`, credentials)
  }
}

export default new AuthService()
