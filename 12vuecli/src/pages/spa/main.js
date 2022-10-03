import Vue from 'vue'
import Spa from './Spa.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Spa),
}).$mount('#app')
