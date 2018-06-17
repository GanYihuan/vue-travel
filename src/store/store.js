import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  // getters: 根据 state 算出新数据
  getters: {
    doubleCity(state) {
      return state.city + ' ' + state.city
    }
  }
})

// let defaultCity = '上海'
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch(e) {}
// export default new Vuex.Store({
//   state: {
//     city: defaultCity
//   },
//   getters: {
//     doubleCity (state) {
//       return state.city + ' ' + state.city
//     }
//   }
//   actions: {
//     changeCity (ctx, city) {
//       ctx.commit('changeCity', city)
//     }
//   },
//   mutations: {
//     changeCity(state, city) {
//       state.city = city
//       try {
//         localStorage.city = city
//       } catch (e) {}
//     }
//   }
// })

// Vuex流程: vuex.png
// List.vue
// state -> render -> vue components -> Dispatch
// store.js
// Actions -> commit -> Mutations -> Mutate
