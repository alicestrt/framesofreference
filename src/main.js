import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import { VBPopover } from 'bootstrap-vue/es/directives'

import { BLink } from 'bootstrap-vue'
Vue.component('b-link', BLink)

import VueRouter from 'vue-router'
// Note: Vue automatically prefixes the directive name with 'v-'
Vue.directive('b-popover', VBPopover)


import SplashPage from './components/SplashPage'
import AboutPage from './components/AboutPage'
import VoicesPage from './components/VoicesPage'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: SplashPage },
    { path: '/about', component: AboutPage },
    { path: '/voices', component: VoicesPage},


  ]

})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
