const state = {
  settings: {
    showDarkMode: false,
    budget: false
  }
}

const mutations = {
  setShowDarkMode(state, value) {
    state.settings.showDarkMode = value
  },
  setBudget(state, value) {
    state.settings.budget = value
  },
}

const actions = {
  setShowDarkMode({ commit }, value) {
    commit('setShowDarkMode', value)
  },
  setBudget({ commit }, value) {
    commit('setBudget', value)
  },
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