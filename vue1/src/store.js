import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseAppLoading: false,
    microAppLoading: false
  },
  mutations: {
    setBaseAppLoading (state, v) { state.baseAppLoading = v },
    setMicroAppLoading (state, v) { state.microAppLoading = v }
  },
  actions: {
  },
  modules: {
  }
})
