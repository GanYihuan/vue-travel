/*
The Vue build version to load with the `import` command
(runtime-only or standalone) has been set in webpack.base.conf with an alias.
*/
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastClick from 'fastclick' // 移动端延迟 300ms 解决
import router from './router/route'
// import VueLazyload from 'vue-lazyload'
/* vuex */
import store from './store/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

/* 关闭 Vue production tip */
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
// Vue.use(VueLazyload, {
//   loading: require('common/image/default.png')
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  render: h => h(App)
})
