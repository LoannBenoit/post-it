import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import { Test } from "../renderer/components/Test";

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App, Test },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

Vue.component('test', {
  name: 'test',
  template:  Test
})