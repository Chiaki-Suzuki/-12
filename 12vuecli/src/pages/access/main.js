import Vue from 'vue'
import Access from './Access.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Access),
}).$mount('#app')
