import Vue from 'vue'
import { uid, Notify } from 'quasar'
// import { firebaseDb, firebaseAuth } from "boot/firebase"
// import { showErrorMessage } from "src/functions/function-show-error-message"

const state = {
  expenses: {
    'ID1': {
      name: 'Beer',
      description: 'something here',
      date: '2019/05/12',
      cost: '12222222',
      category: 1
    },
    'ID2': {
      name: 'Milk',
      description: 'something here',
      date: '2019/05/12',
      cost: '121',
      category: 2
    },
    'ID3': {
      name: 'McDonald and Burger King',
      description: 'something here',
      date: '2019/05/12',
      cost: '120',
      category: 3
    }
  }
}

const mutations = {
  updateExpense(state, payload) {
    Object.assign(state.expenses[payload.id], payload.updates)
  },
  deleteExpense(state, id) {
    Vue.delete(state.expenses, id)
  },
  addExpense(state, payload) {
    Vue.set(state.expenses, payload.id, payload.expense)
  }
}

const actions = {
  updateExpense({ commit }, payload) {
    commit('updateExpense', payload)
  },
  deleteExpense({ commit }, id) {
    commit('deleteExpense', id)
  },
  addExpense({ commit }, expense) {
    let expenseId = uid()
    let payload = {
      id: expenseId,
      expense: expense
    }
    commit('addExpense', payload)
  }
}

const getters = {
  expenses: (state, getters) => {
    return state.expenses
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}