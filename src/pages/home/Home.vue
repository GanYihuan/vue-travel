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
    ...mapState(['city'])
  },
  mounted() {
    this.lastCity = this.city // Save previous data city value
    this.getHomeInfo()
  },
  activated() { // activated: when use keep-alive，App.vue Activate add-on Will run when the page is redisplayed
    if (this.lastCity !== this.city) {
      this.lastCity = this.city // save preCity When the city changes, invoked getHomeInfo()
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
