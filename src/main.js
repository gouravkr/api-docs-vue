import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueSession from 'vue-session'
import axios from 'axios'
import JsonViewer from 'vue-json-viewer'

Vue.use(axios)
Vue.use(VueSession)
Vue.use(JsonViewer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
