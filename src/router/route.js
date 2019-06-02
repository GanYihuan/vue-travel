import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
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
      path: '/detail/:id', // Dynamic routing: Passing parameters
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior(to, from, savedPosition) { // Path jump, the page is always at the top
    return {
      x: 0,
      y: 0
    }
  }
})
