/*eslint-disable*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const loadingShows = true

const store = new Vuex.Store({
  state: {
    count: 1,
    loadingShow: true
  },
  actions: {
    changeLoadingShow(newValue, loadingShow) {
      newValue.commit('changeLoadingShow', loadingShow)
    },
    changecount(newValue, count) {
      newValue.commit('changecount', count)
    }
  },
  mutations: {
    changeLoadingShow(state, loadingShow) {
      state.loadingShow = loadingShow
      // try {
      //   localStorage.loadingShow = loadingShow
      // } catch (e) {}
    },
    changecount(state, count) {
      state.count = count
    }
  },
  getters: {
    getterCount(state) {
      return state.count;
    }
  }
})

export default store
