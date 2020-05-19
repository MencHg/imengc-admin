import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth:null,
    token:null
  },
  getters:{
    auth:state=> state.auth,
    token:state=> state.token
  },
  mutations: {
    setAuth(state,auth){
      state.auth = auth
    },
    setToken(state,token){
      state.token = token
    }
  },
  actions: {
  },
  modules: {
  }
})
