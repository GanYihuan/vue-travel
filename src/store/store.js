import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})

// export default new Vuex.Store({
//   state: {
//     city: 'beijing'
//   },
//   actions: {
//     changeCity (ctx, city) {
//       ctx.commit('changeCity', city)
//     }
//   },
//   mutations: {
//     changeCity(state, city) {
//       state.city = city
//     }
//   }
// })

// Vuex流程: vuex.png
// List.vue
// state -> render -> vue components -> Dispatch
// store.js
// Actions -> commit -> Mutations -> Mutate