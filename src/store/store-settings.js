const state = {
  settings: {
    showDarkMode: false,
    budget: true,
    showBlur: false,
    editedCategory: ""
  }
};

const mutations = {
  setShowDarkMode(state, value) {
    state.settings.showDarkMode = value;
  },
  setBudget(state, value) {
    state.settings.budget = value;
  },
  setShowBlur(state) {
    state.settings.showBlur = !state.settings.showBlur;
  },
  setEditedCategory(state, value) {
    state.settings.editedCategory = value;
  }
};

const actions = {
  setShowDarkMode({ commit }, value) {
    commit("setShowDarkMode", value);
  },
  setBudget({ commit }, value) {
    commit("setBudget", value);
  },
  setShowBlur({ commit }) {
    commit("setShowBlur");
  },
  setEditedCategory({ commit }, value) {
    commit("setEditedCategory", value);
  }
};

const getters = {
  settings: state => {
    return state.settings;
  },
  editedCategory: state => {
    return state.settings.editedCategory;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
