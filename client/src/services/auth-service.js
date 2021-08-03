import axios from 'axios'

const BASE_URL = process.env.VUE_APP_API_BASE_URL

class AuthService {
  logIn({ username, password }) {
    return axios
      .post(`${BASE_URL}/login`, { username, password })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logOut() {
    localStorage.removeItem('user')
  }

  signUp({ username, email, password }) {
    return axios.post(`${BASE_URL}/signup`, { username, email, password })
  }
}

export default new AuthService()
