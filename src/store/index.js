import Vue from 'vue'
import Vuex from 'vuex'
//validation
import Vuelidate from 'vuelidate'


// import example from './module-example'
import expenses from './store-expenses'
import settings from './store-settings'

Vue.use(Vuex)
Vue.use(Vuelidate)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      expenses,
      settings
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
