import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
let instance = axios.create({
  // baseURL:'http://rap2api.taobao.org/app/mock/239427/get/', //在测试自己的mock接口时
  // baseURL:'http://m.maoyan.com', //如果你访问的是自家的服务器地址
  baseURL:'/',   //如果你访问的是别人的有跨域限制的接口
})

Vue.prototype.$axios = instance

new Vue({
  render: h => h(App),
}).$mount('#app')
