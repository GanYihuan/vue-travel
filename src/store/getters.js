/* getters: 根据 state 算出新数据, 类似 computed */
export default {
  doubleCity(state) {
    return state.city + ' ' + state.city
  }
}
