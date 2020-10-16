import { CartServices } from '@/services/index'

const state = {
  cart: ''
}

const mutations = {
  get_cart_details (state, data) {
    state.cart = data.cart
  },
  add_to_cart (state, data) {
    state.cart = data.cart
  },
  update_in_cart (state, data) {
    state.cart = data.cart
  },
  remove_from_cart (state, data) {
    state.cart = data.cart
  }
}

const actions = {
  async getCartDetails ({ commit }, payload) {
    return await CartServices.getCartDetails(payload).then(res => {
      if (res.errors === null) {
        commit('get_cart_details', { cart: res.cart })
      }
      return res
    }).catch(err => {
      console.log(err)
      return err
    })
  },
  async addToCart ({ commit }, payload) {
    return await CartServices.addToCart(payload).then(res => {
      if (res.errors === null) {
        commit('add_to_cart', { cart: res.cart })
      }
      return res
    }).catch(err => {
      console.log(err)
      return err
    })
  },
  async updateInCart ({ commit }, payload) {
    return await CartServices.updateInCart(payload).then(res => {
      if (res.errors === null) {
        commit('update_in_cart', { cart: res.cart })
      }
      return res
    }).catch(err => {
      console.log(err)
      return err
    })
  },
  async removeFromCart ({ commit }, payload) {
    return await CartServices.removeFromCart(payload).then(res => {
      if (res.errors === null) {
      }
      return res
    }).catch(err => {
      console.log(err)
      return err
    })
  }
}

const getters = {
  cart (state) {
    return state.cart
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
