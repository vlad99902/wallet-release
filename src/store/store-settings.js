import Vue from 'vue'
import { uid, Notify } from 'quasar'
// import { firebaseDb, firebaseAuth } from "boot/firebase"
// import { showErrorMessage } from "src/functions/function-show-error-message"

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