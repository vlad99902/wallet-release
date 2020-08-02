import Vue from 'vue'
import { uid, Notify, date } from 'quasar'
// import { firebaseDb, firebaseAuth } from "boot/firebase"
// import { showErrorMessage } from "src/functions/function-show-error-message"

const state = {
  expenses: {
    '2020-07-20' : {
      total: '351',
      counter: '3',
      currentOrder: 3,
      purchases: {
        'ID1': {
          name: 'Cigarettes',
          description: '',
          cost: '145',
          category: 'ID3',
          count: '1'
        },
        'ID2': {
          name: 'Rolls',
          description: '',
          cost: '150',
          category: 'ID4',
          count: '2'
        },
        'ID3': {
          name: 'Bus',
          description: '',
          cost: '56',
          category: 'ID5',
          count: '3'
        },
      }
    },
    '2020-07-21': {
      total: '159',
      counter: '3',
      currentOrder: 3,
      purchases: {
        'ID4': {
          name: 'Milk',
          description: '',
          cost: '43',
          category: 'ID1',
          count: '1'
        },
        'ID5': {
          name: 'Bus',
          description: '',
          cost: '28',
          category: 'ID5',
          count: '2'
        },
        'ID6': {
          name: 'Beer',
          description: '',
          cost: '85',
          category: 'ID2',
          count: '3'
        },
      }
    },
    '2020-07-22': {
      total: '231',
      counter: '2',
      currentOrder: 2,
      purchases: {
        'ID7': {
          name: 'Bus x2',
          description: '',
          cost: '56',
          category: 'ID5',
          count: '1'
        },
        'ID8': {
          name: 'Rolls',
          description: '',
          cost: '175',
          category: 'ID4',
          count: '2'
        },
      }
    },
    '2020-07-23': {
      total: '467',
      counter: '6',
      currentOrder: 6,
      purchases: {
        'ID9': {
          name: 'Bus x2',
          description: '',
          cost: '56',
          category: 'ID5',
          count: '1'
        },
        'ID10': {
          name: 'Meds',
          description: '',
          cost: '26',
          category: 'ID0',
          count: '2'
        },
        'ID11': {
          name: 'McDonalds',
          description: '',
          cost: '50',
          category: 'ID4',
          count: '3'
        },
        'ID12': {
          name: 'Beer x2',
          description: '',
          cost: '140',
          category: 'ID2',
          count: '4'
        },
        'ID13': {
          name: 'Cigarettes',
          description: '',
          cost: '145',
          category: 'ID3',
          count: '5'
        },
        'ID14': {
          name: 'Gas',
          description: '',
          cost: '50',
          category: 'ID5',
          count: '6'
        },
      }
    },
    '2020-07-24': {
      total: '117',
      counter: '2',
      currentOrder: 2,
      purchases: {
        'ID15': {
          name: 'Bus x3',
          description: '',
          cost: '84',
          category: 'ID5',
          count: '1'
        },
        'ID16': {
          name: 'Vologosha',
          description: '',
          cost: '33',
          category: 'ID1',
          count: '2'
        },
      }
    },
    '2020-07-25': {
      total: '136',
      counter: '3',
      currentOrder: 3,
      purchases: {
        'ID17': {
          name: 'Bus x2',
          description: '',
          cost: '56',
          category: 'ID5',
          count: '1'
        },
        'ID18': {
          name: 'Smetana',
          description: '',
          cost: '80',
          category: 'ID1',
          count: '2'
        },
        'ID19': {
          name: 'iPhone XR',
          description: '',
          cost: '50000',
          category: 'NO_BUDGET',
          count: '3'
        },
      }
    },
    '2020-07-26': {
      total: '566',
      counter: '4',
      currentOrder: 4,
      purchases: {
        'ID20': {
          name: 'Bus x2',
          description: '',
          cost: '56',
          category: 'ID5',
          count: '1'
        },
        'ID21': {
          name: 'Closing sole partnership',
          description: '',
          cost: '160',
          category: 'ID0',
          count: '2'
        },
        'ID22': {
          name: 'Rolls',
          description: '',
          cost: '150',
          category: 'ID4',
          count: '3'
        },
        'ID23': {
          name: 'iPhone Case',
          description: '',
          cost: '200',
          category: 'ID0',
          count: '4'
        },
      }
    },
    '2020-07-27': {
      total: '546.5',
      counter: '4',
      currentOrder: 4,
      purchases: {
        'ID24': {
          name: 'Bus x2',
          description: '',
          cost: '56',
          category: 'ID5',
          count: '1'
        },
        'ID25': {
          name: 'Meds',
          description: '',
          cost: '26',
          category: 'ID0',
          count: '2'
        },
        'ID26': {
          name: 'Matcha tea',
          description: 'Gift for my wife',
          cost: '180',
          category: 'ID4',
          count: '3'
        },
        'ID27': {
          name: 'Maxi',
          description: '',
          cost: '284.5',
          category: 'ID1',
          count: '4'
        },
      }
    },
    '2020-07-28': {
      total: '191',
      counter: '3',
      currentOrder: 3,
      purchases: {
        'ID28': {
          name: 'Bus x3',
          description: '',
          cost: '84',
          category: 'ID5',
          count: '1'
        },
        'ID29': {
          name: 'Vologosha',
          description: '',
          cost: '32',
          category: 'ID1',
          count: '2'
        },
        'ID30': {
          name: 'Magnit',
          description: '',
          cost: '75',
          category: 'ID4',
          count: '3'
        },
      }
    },
    '2020-07-29': {
      total: '56',
      counter: '1',
      currentOrder: 1,
      purchases: {
        'ID28': {
          name: 'Bus x2',
          description: '',
          cost: '56',
          category: 'ID5',
          count: '1'
        },
      }
    },
    '2020-07-30': {
      total: '647.5',
      counter: '7',
      currentOrder: 7,
      purchases: {
        'ID29': {
          name: 'Bus x2',
          description: '',
          cost: '56',
          category: 'ID5',
          count: '1'
        },
        'ID30': {
          name: 'Rent',
          description: '',
          cost: '5000',
          category: 'NO_BUDGET',
          count: '2'
        },
        'ID31': {
          name: 'Milk',
          description: '',
          cost: '76.5',
          category: 'ID1',
          count: '3'
        },
        'ID32': {
          name: 'Blades',
          description: '',
          cost: '90',
          category: 'ID0',
          count: '4'
        },
        'ID33': {
          name: 'Cigarettes',
          description: '',
          cost: '145',
          category: 'ID3',
          count: '5'
        },
        'ID34': {
          name: 'Home internet',
          description: '',
          cost: '130',
          category: 'ID0',
          count: '6'
        },
        'ID35': {
          name: 'Rolls',
          description: '',
          cost: '150',
          category: 'ID4',
          count: '7'
        },
      }
    },
    '2020-07-31': {
      total: '84',
      counter: '2',
      currentOrder: 2,
      purchases: {
        'ID36': {
          name: 'Bus x3',
          description: '',
          cost: '84',
          category: 'ID5',
          count: '1'
        },
        'ID37': {
          name: 'Meds',
          description: '',
          cost: '687',
          category: 'NO_BUDGET',
          count: '2'
        },
      }
    },
  },
  analytics: {
    overallBudget: 3000,
    availableBudget: '',
    spentBudget: '',
    period: 7,
    dailyLimit: '',
    spentThisWeek: 0,
    spentLastWeek: 0,
    firstDay: 1,
    percentage: '',
    progress: 0
  },
  todayExpenses: true
}

const mutations = {
  updateExpense(state, payload) {
    Object.assign(state.expenses[payload.id], payload.updates)
  },
  deleteExpense(state, payload) {
    if (state.expenses[payload.date]){

      //set new total
      //if category != 'NO_BUDGET'
      if (state.expenses[payload.date].purchases[payload.id].category != 'NO_BUDGET') {
        let newTotal =  parseFloat(state.expenses[payload.date].total) - parseFloat(state.expenses[payload.date].purchases[payload.id].cost)
        Vue.set(state.expenses[payload.date], 'total', newTotal)
      }

      //set counter--
      let newCounter = parseInt(state.expenses[payload.date].counter) - parseInt('1')
      Vue.set(state.expenses[payload.date], 'counter', newCounter)
    }

    //delete this expense
    Vue.delete(state.expenses[payload.date].purchases, payload.id)

    //if no more expenses in this date
    if (state.expenses[payload.date].counter == parseInt('0')) {
      Vue.delete(state.expenses, payload.date)
    }
  },
  addExpense(state, payload) {
    let date = payload.expense.date
    delete payload.expense.date
    //if already exists this date
    if (state.expenses[date]) {

      //check if tag Out of budget
      if (payload.expense.category !== 'NO_BUDGET') {
        let newTotal =  parseFloat(state.expenses[date].total) + parseFloat(payload.expense.cost)
        Vue.set(state.expenses[date], 'total', newTotal)
      }

      let newCounter = parseInt(state.expenses[date].counter) + parseInt('1')
      let newOrder = state.expenses[date].currentOrder + 1
      payload.expense.count = newOrder
      Vue.set(state.expenses[date].purchases, payload.id, payload.expense)
      Vue.set(state.expenses[date], 'counter', newCounter)
      Vue.set(state.expenses[date], 'currentOrder', newOrder)
    }
    else {
      let newPayload;

      //check for out of budget tag
      if (payload.expense.category === 'NO_BUDGET'){
        newPayload = { total: '0', counter: '1', currentOrder: 1, purchases: {}}
      }
      else {
        newPayload = { total: payload.expense.cost, counter: '1', currentOrder: 1, purchases: {}}
      }
      
      payload.expense.count = '1'
      Vue.set(state.expenses, date, newPayload)
      Vue.set(state.expenses[date].purchases, payload.id, payload.expense)
    }
  },
  calcSpentThisWeek(state, newSpentThisWeek) {
    Vue.set(state.analytics, 'spentThisWeek', newSpentThisWeek)
  },
  calcSpentLastWeek(state, newSpentLastWeek) {
    Vue.set(state.analytics, 'spentLastWeek', newSpentLastWeek)
  },

  setTodayExpenses(state, value) {
    Vue.set(state, 'todayExpenses', value)
  },

  setFirstDay(state, value) {
    Vue.set(state.analytics, 'firstDay', value)
  },
  setPeriod(state, value) {
    Vue.set(state.analytics, 'period', value)
  },

  //////////////////////
  //mutations for budget
  //////////////////////

  setSpentBudget(state, value) {
    Vue.set(state.analytics, 'spentBudget', value)
  },

  setAvailableBudget(state, value) {
    Vue.set(state.analytics, 'availableBudget', value)
  },

  setDailyLimit(state, value) {
    Vue.set(state.analytics, 'dailyLimit', value)
  },

  setProgress(state, value) {
    Vue.set(state.analytics, 'progress', value)
  },

  setBudget(state, value) {
    Vue.set(state.analytics, 'overallBudget', value)
  }

}

const actions = {
  updateExpense({ commit }, payload) {
    commit('updateExpense', payload)
  },
  deleteExpense({ commit, dispatch }, payload) {
    commit('deleteExpense', payload)
    dispatch('calcSpentThisWeek')
    dispatch('checkTodayExpenses')
    dispatch('calcSpentBudget')
  },
  addExpense({ commit, dispatch }, expense) {
    let expenseId = uid()
    let payload = {
      id: expenseId,
      expense: expense
    }
    commit('addExpense', payload)
    dispatch('calcSpentThisWeek')
    dispatch('checkTodayExpenses')
    dispatch('calcSpentBudget')
    
  },
  calcSpentThisWeek({ commit }) {
    let timeStamp = Date.now()

    //figuring out how much days already past from the start of the week with offset
    let dayNumber = parseInt(date.formatDate(timeStamp, 'd')) - parseInt(state.analytics.firstDay) + 1
    if (dayNumber <= 0) dayNumber = 7 + dayNumber

    //counting all expenses within that amount of days
    let newSpentThisWeek = 0
    for (let i = 0; i < dayNumber; i++) {
      if (typeof state.expenses[date.formatDate(date.subtractFromDate(timeStamp, { hours: 24*i }), 'YYYY-MM-DD')] != "undefined") {
        newSpentThisWeek = newSpentThisWeek + parseFloat(state.expenses[date.formatDate(date.subtractFromDate(timeStamp, { hours: 24*i }), 'YYYY-MM-DD')].total)
      }
    }

    //counting all expenses on the last week within that amount of days
    let newSpentLastWeek = 0
    for (let i = 0; i < dayNumber; i++) {
      if (typeof state.expenses[date.formatDate(date.subtractFromDate(timeStamp, { hours: 168+24*i }), 'YYYY-MM-DD')] != "undefined") {
        newSpentLastWeek = newSpentLastWeek + parseFloat(state.expenses[date.formatDate(date.subtractFromDate(timeStamp, { hours: 168+24*i }), 'YYYY-MM-DD')].total)
      }
    }

    commit('calcSpentThisWeek', newSpentThisWeek)

    // if there're no expenses last week we returning null else we find the difference for analytics
    if (newSpentLastWeek === 0) newSpentLastWeek = null
    else newSpentLastWeek -= newSpentThisWeek
    
    commit('calcSpentLastWeek', newSpentLastWeek)
  },

  checkTodayExpenses ({ commit }) {
    let timeStamp = Date.now()
    timeStamp = date.formatDate(timeStamp, 'YYYY-MM-DD')

    if (typeof state.expenses[timeStamp] != "undefined") {
      commit('setTodayExpenses', true)
    }
    else {
      commit('setTodayExpenses', false)
    }
  },

  setFirstDay ({ commit, dispatch }, value) {
    commit('setFirstDay', value)
    dispatch('calcSpentThisWeek')
  },
  setPeriod ({ commit }, value) {
    commit('setPeriod', value)
  },

  ////////////////////
  //actions for budget
  ////////////////////

  calcSpentBudget({ commit, dispatch }) {
    if (state.analytics.period === 1) {

    }
    else if (state.analytics.period === 7) {
      //just need to make sure that spentThisWeek is being calculated earlier
      commit('setSpentBudget', state.analytics.spentThisWeek)
      dispatch('calcAvailableBudget')
      dispatch('calcDailyLimit')
      dispatch('calcProgress')
    }
  },

  calcAvailableBudget({ commit }) {
    let newAvailableBudget = state.analytics.overallBudget - state.analytics.spentBudget
    commit('setAvailableBudget', newAvailableBudget)
  },

  calcDailyLimit({ commit }) {
    if (state.analytics.period === 1) {

    }
    else if (state.analytics.period === 7) {
      let timeStamp = Date.now()
      //figuring out how much days already past from the start of the week with offset
      let dayNumber = parseInt(date.formatDate(timeStamp, 'd')) - parseInt(state.analytics.firstDay) + 1
      if (dayNumber <= 0) dayNumber = 7 + dayNumber
      dayNumber = 7 - dayNumber + 1
      let newDailyLimit = state.analytics.availableBudget / dayNumber
      commit('setDailyLimit', newDailyLimit)
    }
  },

  calcProgress({ commit }) {
    let newProgress = state.analytics.availableBudget / state.analytics.overallBudget
    newProgress = Math.round((newProgress + Number.EPSILON) * 100) / 100
    commit('setProgress', newProgress)
  },

  setBudget({ commit, dispatch }, value) {
    commit('setBudget', value)
    dispatch('calcSpentBudget')
  }
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
  },
  spentThisWeek: (state) => {
    return state.analytics.spentThisWeek
  },
  spentLastWeek: (state) => {
    return state.analytics.spentLastWeek
  },
  spentBudget: (state) => {
    return state.analytics.spentBudget
  },
  availableBudget: (state) => {
    return state.analytics.availableBudget
  },
  overallBudget: (state) => {
    return state.analytics.overallBudget
  },
  dailyLimit: (state) => {
    return state.analytics.dailyLimit
  },
  progress: (state) => {
    return state.analytics.progress
  },
  todayExpenses: (state) => {
    return state.todayExpenses
  },
  firstDay: (state) => {
    return state.analytics.firstDay
  },
  period: (state) => {
    return state.analytics.period
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}