// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import router from './router/index'
import store from './store/store'
import '../static/css/com.css'
import ajax from './api/ajax'

Vue.use(Vant);


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  ajax
})
