import { HeaderServices } from '@/services/index'

const state = {
  topnavbar: null
}

const mutations = {
  set_toptopnavbar (state, data) {
    state.topnavbar = data
  }
}

const actions = {
  get_topnavbar ({ commit }, langId) {
    return new Promise((resolve, reject) => {
      HeaderServices.getTopIcons(langId).then(resp => {
        commit('set_toptopnavbar', resp.topnavbar)
        resolve(resp)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default {
  state,
  actions,
  mutations
}
