/*eslint-disable*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count: 1,
  getters
}
const store = new Vuex.Store({
  state: state
})
const getters = {
  addEventLisenner(state) {
    return state.count
  }
}
export default store
