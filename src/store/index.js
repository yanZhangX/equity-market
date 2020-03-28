import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabIndex:0,
    currentIndex:1
  },
  mutations: {
    setTabIndex(state,params){
      console.log(params)
      state.tabIndex=params
      state.currentIndex=params+1
    }
  },
  actions: {
  },
  modules: {
  }
})
