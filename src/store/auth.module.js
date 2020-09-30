import { UserServices } from '@/services/index'

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
  async login ({ commit }, payload) {
    return await UserServices.login(payload).then(resp => {
      if (resp.customer) {
        commit('auth_success', { token: resp.customer.secure_key, user: resp.customer })
      }
      return resp
    }).catch(err => {
      console.log(err)
      return err
    })
  },
  async register ({ commit }, payload) {
    return await UserServices.register(payload).then(resp => {
      if (resp.customer) {
        commit('auth_success', { token: resp.customer.secure_key, user: resp.customer })
      }
      return resp
    }).catch(err => {
      return err
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
  user (state) {
    return state.user
  },
  authStatus: state => state.status
}

export default {
  state,
  actions,
  mutations,
  getters
}
