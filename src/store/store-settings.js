const state = {
  settings: {
    showDarkMode: false,
    budget: false,
    showAddExpense: false,
  }
}

const mutations = {
  setShowDarkMode(state, value) {
    state.settings.showDarkMode = value
  },
  setBudget(state, value) {
    state.settings.budget = value
  },
  setShowAddExpense(state) {
    state.settings.showAddExpense = !state.settings.showAddExpense
  },
}

const actions = {
  setShowDarkMode({ commit }, value) {
    commit('setShowDarkMode', value)
  },
  setBudget({ commit }, value) {
    commit('setBudget', value)
  },
  setShowAddExpense({ commit }) {
    commit('setShowAddExpense')
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