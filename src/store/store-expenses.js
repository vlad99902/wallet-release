import Vue from 'vue'
import { uid, Notify } from 'quasar'
// import { firebaseDb, firebaseAuth } from "boot/firebase"
// import { showErrorMessage } from "src/functions/function-show-error-message"

const state = {
  expenses: {
    '2019/09/12' : {
      total: '1222',
      purchases: {
        'ID1': {
          name: 'Beer',
          description: 'something here',
          cost: '12222222',
          category: 1,
          time: '130000'
        }
      }
    },
    '2019/09/14': {
      total: '120',
      purchases: {
        'ID3': {
          name: 'McDonald and Burger King',
          description: 'something here',
          cost: '120',
          category: 3,
          time: '140000'
        },
        'ID4': {
          name: 'McDonald and Burger King2',
          description: 'something here',
          cost: '120',
          category: 3,
          time: '150000'
        }
      }
    },
    '2019/09/13': {
      total: '121',
      purchases: {
        'ID2': {
          name: 'Milk',
          description: 'something here',
          cost: '121',
          category: 2,
          time: '160000'
        }
      }
    },
  },
  analytics: {
    overallBudget: '',
    availableBudget: '',
    spentDay: '',
    dailyLimit: '',
    spentWeek: '',
    percentage: '',
    progress: ''
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
    if (state.expenses[payload.expense.date]) {
      let newTotal =  parseFloat(state.expenses[payload.expense.date].total) + parseFloat(payload.expense.cost)
      Vue.set(state.expenses[payload.expense.date].purchases, payload.id, payload.expense)
      Vue.set(state.expenses[payload.expense.date], 'total', newTotal)
    }
    else {
      let newPayload = { total: payload.expense.cost, purchases: {}}
      Vue.set(state.expenses, payload.expense.date, newPayload)
      Vue.set(state.expenses[payload.expense.date].purchases, payload.id, payload.expense)
    }
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
    
  },
}

const getters = {

  expensesSorted: (state) => {
    let expensesSorted = {},
        keysOrdered = Object.keys(state.expenses)

    keysOrdered.sort((a,b) => {
      if (a > b) return -1
      else if (a < b) return 1
      else return 0
    })

    keysOrdered.forEach ((key) => {
      expensesSorted[key] = state.expenses[key]
    })

    return expensesSorted
  },

  expenses: (state, getters) => {
    let expensesSorted = getters.expensesSorted
    return expensesSorted
    //return state.expenses
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}