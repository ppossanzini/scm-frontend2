import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import card from "@/components/card/card.vue";
Vue.component('card', card);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
