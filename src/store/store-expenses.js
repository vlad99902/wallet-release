import Vue from 'vue'
import { uid, Notify } from 'quasar'
// import { firebaseDb, firebaseAuth } from "boot/firebase"
// import { showErrorMessage } from "src/functions/function-show-error-message"

const state = {
  expenses: {
    '2020-07-20' : {
      total: '351',
      counter: '3',
      purchases: {
        'ID1': {
          name: 'Cigarettes',
          description: '',
          cost: '145',
          category: 'Bad Habits',
          count: '1'
        },
        'ID2': {
          name: 'Rolls',
          description: '',
          cost: '150',
          category: 'Eating Out',
          count: '2'
        },
        'ID3': {
          name: 'Bus',
          description: '',
          cost: '56',
          category: 'Transport',
          count: '3'
        },
      }
    },
    '2020-07-21': {
      total: '159',
      counter: '3',
      purchases: {
        'ID4': {
          name: 'Milk',
          description: '',
          cost: '43',
          category: 'Foodstuff',
          count: '1'
        },
        'ID5': {
          name: 'Bus',
          description: '',
          cost: '28',
          category: 'Transport',
          count: '2'
        },
        'ID6': {
          name: 'Beer',
          description: '',
          cost: '85',
          category: 'Alcohol',
          count: '3'
        },
      }
    },
    '2020-07-22': {
      total: '231',
      counter: '2',
      purchases: {
        'ID7': {
          name: 'Bus x2',
          description: '',
          cost: '56',
          category: 'Transport',
          count: '1'
        },
        'ID8': {
          name: 'Rolls',
          description: '',
          cost: '175',
          category: 'Eating Out',
          count: '2'
        },
      }
    },
    '2020-07-23': {
      total: '467',
      counter: '6',
      purchases: {
        'ID9': {
          name: 'Bus x2',
          description: '',
          cost: '56',
          category: 'Transport',
          count: '1'
        },
        'ID10': {
          name: 'Meds',
          description: '',
          cost: '26',
          category: 'Meds',
          count: '2'
        },
        'ID11': {
          name: 'McDonalds Cheeseburger',
          description: '',
          cost: '50',
          category: 'Eating Out',
          count: '3'
        },
        'ID12': {
          name: 'Beer x2',
          description: '',
          cost: '140',
          category: 'Bad Habits',
          count: '4'
        },
        'ID13': {
          name: 'Cigarettes',
          description: '',
          cost: '145',
          category: 'Bad Habits',
          count: '5'
        },
        'ID14': {
          name: 'Gas',
          description: '',
          cost: '50',
          category: 'Transport',
          count: '6'
        },
      }
    },
    '2020-07-24': {
      total: '117',
      counter: '2',
      purchases: {
        'ID15': {
          name: 'Bus x3',
          description: '',
          cost: '84',
          category: 'Transport',
          count: '1'
        },
        'ID16': {
          name: 'Vologosha',
          description: '',
          cost: '33',
          category: 'Foodstuff',
          count: '2'
        },
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
    let date = payload.expense.date
    delete payload.expense.date
    if (state.expenses[date]) {
      let newTotal =  parseFloat(state.expenses[date].total) + parseFloat(payload.expense.cost)
      let newCounter = parseInt(state.expenses[date].counter) + parseInt('1')
      payload.expense.count = newCounter
      Vue.set(state.expenses[date].purchases, payload.id, payload.expense)
      Vue.set(state.expenses[date], 'total', newTotal)
      Vue.set(state.expenses[date], 'counter', newCounter)
    }
    else {
      let newPayload = { total: payload.expense.cost, counter: '1', purchases: {}}
      payload.expense.count = '1'
      Vue.set(state.expenses, date, newPayload)
      Vue.set(state.expenses[date].purchases, payload.id, payload.expense)
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