import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts //挂载到Vue实例上面

Vue.config.productionTip = false


Vue.use(Element, { size: 'small', zIndex: 3000 });

router.beforeEach((to, form, next) => {
  if (to.path == "/") {
    next("/outline")
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


