import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutaions'
import actions from './actions'
import getters from './getters'




Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})










// const store = new Vuex.Store({
//   state: {
//     url: '',
//     urlKeyword: '',
//     songLength:'',
//     i:''
//   },
//   mutations: {
//     changeKeyword(state,x) {//x就是传过来的数据

//     },
//   }

// })

// export default store
