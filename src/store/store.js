import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

/* vuex 仓库 */
export default new Vuex.Store({
  state,
  mutations,
  getters
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
// mutations: {
//   changeCity(state, city) {
//     state.city = city
//     try {
//       localStorage.city = city
//     } catch (e) {}
//   }
// }
// })
