import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import './static/css/style.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import App from './App.vue'
import gobal from './gobal/config'
import AxiosPlgin from './gobal/AxiosPlugin'
import store from './store'

Vue.prototype.$g = gobal
Vue.config.productionTip = false

Vue.use(VueOnsen)
Vue.use(AxiosPlgin)
VueOnsen.platform.select('ios')

new Vue({
  el: '#app',
  template: '#app',
  store,
  render: h => h(App)
}).$mount('#app')
