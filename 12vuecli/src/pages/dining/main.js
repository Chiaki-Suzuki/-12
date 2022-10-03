import Vue from 'vue'
import Dining from './Dining.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Dining),
}).$mount('#app')
