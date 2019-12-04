// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import store from './store'
import 'swiper'
// Vue.config.productionTip = false
/* eslint-disable no-new */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import   Axios  from  'axios'
import $ from "jquery"
import router from './router'
import App from './App'
Vue.prototype.$http=Axios
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
