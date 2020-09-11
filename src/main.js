import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.scss'
import 'font-awesome/css/font-awesome.min.css'
import { i18n } from './lang/i18n.js'
import { Trans } from './lang/Translation'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import VueZipCodeInput from 'vue-zipcode-input'
Vue.component('VuePhoneNumberInput', VuePhoneNumberInput)
Vue.component('VueZipCodeInput', VueZipCodeInput)
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default)
Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
