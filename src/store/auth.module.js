const state = {
  status: '',
  token: localStorage.getItem('token') || '',
  user: {}
}

const mutations = {
  auth_request (state) {
    state.status = 'loading'
  },
  auth_success (state, data) {
    console.log('auth_success', data)
    state.status = 'success'
    state.token = data.token
    state.user = data.user
  },
  auth_error (state) {
    state.status = 'error'
  },
  logout (state) {
    state.status = ''
    state.token = ''
    state.user = {}
  }
}

const actions = {
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      commit('auth_success', { token: 'token', user: payload }) // for TEST
    // axios({url: 'http://localhost:3000/login', data: user, method: 'POST' })
    // .then(resp => {
    //   const token = resp.data.token
    //   const user = resp.data.user
    //   localStorage.setItem('token', token)
    //   axios.defaults.headers.common['Authorization'] = token
    //   commit('auth_success', token, user)
    //   resolve(resp)
    // })
    // .catch(err => {
    //   commit('auth_error')
    //   localStorage.removeItem('token')
    //   reject(err)
    // })
    })
  },
  register ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
    // axios({url: 'http://localhost:3000/register', data: user, method: 'POST' })
    // .then(resp => {
    //   const token = resp.data.token
    //   const user = resp.data.user
    //   localStorage.setItem('token', token)
    //   axios.defaults.headers.common['Authorization'] = token
    //   commit('auth_success', token, user)
    //   resolve(resp)
    // })
    // .catch(err => {
    //   commit('auth_error', err)
    //   localStorage.removeItem('token')
    //   reject(err)
    // })
    })
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      resolve()
    })
  }
}

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status
}

export default {
  state,
  actions,
  mutations,
  getters
}
