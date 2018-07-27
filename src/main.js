/*
The Vue build version to load with the `import` command
(runtime-only or standalone) has been set in webpack.base.conf with an alias.
*/
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
/* 移动端延迟300ms解决 */
import fastClick from 'fastclick'
import router from './router/route'
// import VueLazyload from 'vue-lazyload'
/* vuex */
import store from './store/store'
/* vue-awesome-swiper */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
/* vue-awesome-swiper */
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

/* Turn off the annoying Vue production tip */
Vue.config.productionTip = false
/* 移动端延迟300ms解决 */
fastClick.attach(document.body)
/* VueAwesomeSwiper */
Vue.use(VueAwesomeSwiper)
// Vue.use(VueLazyload, {
//   loading: require('common/image/default.png')
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
