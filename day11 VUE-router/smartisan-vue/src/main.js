import Vue from 'vue'
import App from './App.vue'
import router from './router' //引入路由对象

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
