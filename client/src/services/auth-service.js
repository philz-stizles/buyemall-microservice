import axios from 'axios'

class AuthService {
  baseUrl = `${process.env.VUE_APP_API_BASE_URL}/auth`

  signIn(credentials) {
    return axios
      .post(`${this.baseUrl}/signinWithToken`, credentials)
      .then(response => {
        console.log(response.data)
        if (response.data.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data.data))
        }

        return response.data.data
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
