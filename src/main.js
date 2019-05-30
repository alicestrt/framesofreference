import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCarBattery, faSeedling, faStroopwafel, faBrain, faStopwatch, faChartLine, faCode, faUserCheck, faSearchDollar, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { VBPopover } from 'bootstrap-vue/es/directives'

import VueRouter from 'vue-router'
// Note: Vue automatically prefixes the directive name with 'v-'
Vue.directive('b-popover', VBPopover)

library.add(faCarBattery, faSeedling, faStroopwafel, faStar, faStarHalfAlt, faBrain, faStopwatch, faChartLine, faCode, faUserCheck, faSearchDollar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import SplashPage from './components/SplashPage'
import ReviewPage from './components/ReviewPage'
import AboutPage from './components/AboutPage'
import GlossaryPage from './components/GlossaryPage'
import FullTextPage from './components/FullTextPage'
import VideoPage from './components/VideoPage'
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: SplashPage },
    { path: '/review', component: ReviewPage },
    { path: '/about', component: AboutPage },
    { path: '/glossary', component: GlossaryPage },
    { path: '/fulltext', component: FullTextPage },
    { path: '/video', component: VideoPage },
  ]

})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
