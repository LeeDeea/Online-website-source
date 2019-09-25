import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import store from './store'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
