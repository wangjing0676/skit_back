import {createStore} from 'vuex'
export default createStore({
  state: {
    showTabar: localStorage.active || -1
  },
  getters: {

  },
  mutations: {
    updateTabar(state,showTabar) {
      state.showTabar = showTabar
    }
  },
  actions:{
    
  }
})