// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import 'styles/reset.css'
import 'styles/border.css'
import 'swiper/dist/css/swiper.css'
import './common/stylus/index.styl'


Vue.prototype.$http = axios;
Vue.prototype.$qs = qs;
Vue.prototype.global = {}

Vue.config.productionTip = false
// 解决300毫秒延迟问题
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

export default Vue
