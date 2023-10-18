import Vue from 'vue'
import App from './App.vue'
import { store } from '@/store/store'
// echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
