const state = {
  status: '',
  token: localStorage.getItem('ekugellager_token') || '',
  user: JSON.parse(localStorage.getItem('user')) || null
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
    localStorage.setItem('ekugellager_token', data.token)
    localStorage.setItem('ekugellager_user', JSON.stringify(data.user))
  },
  auth_error (state) {
    state.status = 'error'
  },
  logout (state) {
    state.status = ''
    state.token = ''
    state.user = null
    localStorage.removeItem('ekugellager_token')
    localStorage.removeItem('ekugellager_user')
  }
}

const actions = {
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      commit('auth_success', { token: 'token', user: payload }) // for TEST
    })
  },
  register ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
    })
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      resolve()
    })
  }
}

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  user (state) {
    return state.user
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
