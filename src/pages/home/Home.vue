<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  // Ajax
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    data () {
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
    mounted () {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    // App.vue, when use keep-alive, will add-on activated
    // when page repeat will run
    activated () {
      if (this.lastCity !== this.city) {
        // save preCity
        this.lastCity = this.city
        this.getHomeInfo()
      }
    },
    methods: {
      getHomeInfo () {
        axios
          .get('/api/index.json?city=' + this.city)
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    }
  }
</script>
