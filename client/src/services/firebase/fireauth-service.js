import axios from 'axios'

class AuthService {
  baseUrl = 'http://'

  logIn(credentials) {
    return axios.post('/login', { username, password }).then(response => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
  }

  logOut() {
    localStorage.removeItem('user')
  }

  async signUp(credentials) {
    const response = await fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        returnSecureToken: true,
      }),
    })

    if (response.ok) {
      const error = new Error(response.message || 'Failed to authenticate')
      throw error
    }

    const data = await response.json()

    console.log(data)
  }
}

export default new AuthService()
