import Vue from "vue";
import { uid } from "quasar";

const state = {
  categories: {
    //ID0 USED only for OTHER category
    ID0: {
      name: "Other",
      colorID: 'ID12',
      categoryStyle: {
        background: "#5C6670",
        color: "#FFFFFF"
      }
    },
    //id 'NO_BUDGED' used to check purchases without a budget
    NO_BUDGET: {
      name: "Out of budget",
      colorID: 'ID11',
      categoryStyle: {
        background: "#D8A69D",
        color: "#FFFFFF"
      }
    },
    ID1: {
      name: "Foodstuff",
      colorID: 'ID1',
      categoryStyle: {
        background: "#C9FFDE",
        color: "#15C759"
      }
    },
    ID2: {
      name: "Alcohol",
      colorID: 'ID2',
      categoryStyle: {
        background: "#FFE4BE",
        color: "#FE9400"
      }
    },
    ID3: {
      name: "Bad Habits",
      colorID: 'ID3',
      categoryStyle: {
        background: "#FFCC01",
        color: "#FFFFFF"
      }
    },
    ID4: {
      name: "Eating Out",
      colorID: 'ID4',
      categoryStyle: {
        background: "#FFDAD7",
        color: "#FE3D2E"
      }
    },
    ID5: {
      name: "Transport",
      colorID: 'ID5',
      categoryStyle: {
        background: "#D6EDFF",
        color: "#50ABF2"
      }
    },
  },
  colors: {
    ID12: {
      colorName: "Shuttle Gray",
      categoryStyle: {
        background: "#5C6670",
        color: "#FFFFFF"
      }
    },
    ID11: {
      colorName: "Cameo",
      categoryStyle: {
        background: "#D8A69D",
        color: "#FFFFFF"
      }
    },
    ID1: {
      colorName: "Malachite",
      categoryStyle: {
        background: "#C9FFDE",
        color: "#15C759"
      }
    },
    ID2: {
      colorName: "Pizazz",
      categoryStyle: {
        background: "#FFE4BE",
        color: "#FE9400"
      }
    },
    ID3: {
      colorName: "Supernova",
      categoryStyle: {
        background: "#FFCC01",
        color: "#FFFFFF"
      }
    },
    ID4: {
      colorName: "Red Orange",
      categoryStyle: {
        background: "#FFDAD7",
        color: "#FE3D2E"
      }
    },
    ID5: {
      colorName: "Picton Blue",
      categoryStyle: {
        background: "#D6EDFF",
        color: "#50ABF2"
      }
    },
    ID6: {
      colorName: "Dodger Blue",
      categoryStyle: {
        background: "#459EFF",
        color: "#FFFFFF"
      }
    },
    ID7: {
      colorName: "Indigo",
      categoryStyle: {
        background: "#D2D1FF",
        color: "#5756D5"
      }
    },
    ID8: {
      colorName: "Amaranth",
      categoryStyle: {
        background: "#EB4269",
        color: "#FFFFFF"
      }
    },
    ID9: {
      colorName: "Lavender",
      categoryStyle: {
        background: "#F4D8FF",
        color: "#BF77DB"
      }
    },
    ID10: {
      colorName: "Barley Corn",
      categoryStyle: {
        background: "#FFF1DC",
        color: "#9D8561"
      }
    }
  }
};

const mutations = {
  createCategory(state, payload) {
    Vue.set(state.categories, payload.id, payload.category);
  },
  updateCategory(state, payload) {
    Vue.set(state.categories, payload.id, payload.category);
  },
};

const actions = {
  createCategory({ commit }, payload) {
    Object.assign(
      payload.category.categoryStyle,
      state.colors[payload.category.colorID].categoryStyle
    );
    payload.id = uid();
    commit("createCategory", payload);
  },
  updateCategory({ commit }, payload) {
    Object.assign(
      payload.category.categoryStyle,
      state.colors[payload.category.colorID].categoryStyle
    );
    commit("updateCategory", payload);
  },
};

const getters = {
  categories: state => {
    return state.categories;
  },
  colors: state => {
    return state.colors;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
