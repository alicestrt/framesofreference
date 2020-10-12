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
import RezaNik from './components/RezaNik'
import EmmaFagan from './components/EmmaFagan'
import LukeMurphy from './components/LukeMurphy'
import DorothyCheung from './components/DorothyCheung'
import BeaPero from './components/BeaPero'
import FrancisMay from './components/FrancisMay'
import Veravanderburg from './components/Veravanderburg'
import JoannettevanderVeer from './components/JoannettevanderVeer'
import AudioTour from './components/AudioTour'
import introduction from './components/introduction'
import test from './components/test'
import ch1d from './components/ch1d'
import ch2j from './components/ch2j'
import ch3j from './components/ch3j'
import ch4b from './components/ch4b'
import ch5l from './components/ch5l'
import ch6r from './components/ch6r'
import conclusion from './components/conclusion'
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: SplashPage },
    { path: '/about', component: AboutPage },
    { path: '/voices', component: VoicesPage},
    { path: '/RezaNik', component: RezaNik},
    { path: '/EmmaFagan', component: EmmaFagan},
    { path: '/LukeMurphy', component: LukeMurphy},
    { path: '/DorothyCheung', component: DorothyCheung},
    { path: '/BeaPero', component: BeaPero},
    { path: '/FrancisMay', component: FrancisMay},
    { path: '/Veravanderburg', component: Veravanderburg},
    { path: '/JoannettevanderVeer', component: JoannettevanderVeer},
    { path: '/AudioTour', component: AudioTour},
    { path: '/introduction', component: introduction},
    { path: '/test', component: test},
    { path: '/ch1d', component: ch1d},
    { path: '/ch2j', component: ch2j},
    { path: '/ch3j', component: ch3j},
    { path: '/ch4b', component: ch4b},
    { path: '/ch5l', component: ch5l},
    { path: '/ch6r', component: ch6r},
    { path: '/conclusion', component: conclusion},

  ]

})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
