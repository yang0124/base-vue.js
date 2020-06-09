import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css';
import '../node_modules/animate.css/animate.min.css';
import router from "./router";
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

// 初始化用户登录状态
let token = localStorage.getItem('token');
console.log(token)
if(token){
  store.commit('loginMut')
}

// 全局挂载axios方法
let instance = axios.create({
  baseURL:'http://localhost:3000/'
})
Vue.prototype.$axios = instance;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
