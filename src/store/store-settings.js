const state = {
  settings: {
    showDarkMode: false
  }
}

const mutations = {
  setShowDarkMode(state, value) {
    state.settings.showDarkMode = value
  }
}

const actions = {
  setShowDarkMode({ commit }, value) {
    commit('setShowDarkMode', value)
  }
}

const getters = {
  settings: state => {
    return state.settings
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}