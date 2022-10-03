import Vue from 'vue'
import Price from './Price.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Price),
}).$mount('#app')
