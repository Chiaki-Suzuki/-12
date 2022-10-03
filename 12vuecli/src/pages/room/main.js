import Vue from 'vue'
import Room from './Room.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Room),
}).$mount('#app')
