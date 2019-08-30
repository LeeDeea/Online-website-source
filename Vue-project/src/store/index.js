/*eslint-disable*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  count: 1,
  level: 1,
  getters
}
const store = new Vuex.Store({
  loadingShow: true
})

export default store
