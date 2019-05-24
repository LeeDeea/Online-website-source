import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index.vue'
import login from '@/pages/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/index',
    name: 'Index',
    component: Index
  }, {
    path: '/',
    name: 'login',
    component: login
  }]
})
