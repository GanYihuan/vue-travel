<template>
  <div>
    <home-header/>
    <home-swiper :list="swiperList"/>
    <home-icons :list="iconList"/>
    <home-recommend :list="recommendList"/>
    <home-weekend :list="weekendList"/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios' // Ajax
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city']) // 将 vuex 共用数据 city 映射到 'currentCity' 当中
  },
  mounted() { // 组件被挂载的时候
    this.lastCity = this.city // 保存上一个数据 city 值
    this.getHomeInfo()
  },
  activated() { // activated: 当使用 keep-alive 时，App.vue 将附加组件激活 当页面重新显示的时候将运行
    if (this.lastCity !== this.city) {
      this.lastCity = this.city // save preCity 城市变化时, 重新调用 getHomeInfo() 发请求
      this.getHomeInfo()
    }
  },
  methods: {
    getHomeInfo() {
      axios
        .get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>
