import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store';
import axios from 'axios'

Vue.config.productionTip = false
//set dafault configration for axios baseURL
axios.defaults.baseURL = 'http://vuelara_managementsys.test/api/'
Vue.prototype.$eventHub = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
