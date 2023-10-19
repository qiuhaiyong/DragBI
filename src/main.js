import Vue from 'vue'
import App from './App.vue'
import { store } from '@/store/store'
// echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;
// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
