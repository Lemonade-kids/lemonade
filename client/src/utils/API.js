import axios from 'axios'

export default {

  newUser: function(userData) {
    // console.log('hit API 1')
    return axios.post('/api/user', userData)
  },
  login: function(userData) {
    return axios.post('/api/user/login', userData)
  }
}
  