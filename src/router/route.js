import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id', // 动态路由: 传递参数
    name: 'Detail',
    component: Detail
  }
  ],
  scrollBehavior(to, from, savedPosition) { // 路径跳转，页面始终位于顶部
    return {
      x: 0,
      y: 0
    }
  }
})
