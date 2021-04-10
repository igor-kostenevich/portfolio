import { createStore } from 'vuex'

export default createStore({
  state: {
    currentLocale: 'ru',
    isChangeLocale: false
  },
  mutations: {
    changeLocale(state, payload) {
      state.currentLocale = payload
      state.isChangeLocale = !state.isChangeLocale
    }
  },
  actions: {},
  getters: {
    currentLocale(state) {
      return state.currentLocale
    },
    changeLocale(state) {
      return state.isChangeLocale
    }
  },
  modules: {}
})
