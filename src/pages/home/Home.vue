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
/* Ajax */
import axios from 'axios'
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
		/* 将vuex共用数据city映射到'currentCity'当中 */
		...mapState(['city'])
	},
	/* 组件被挂载的时候 */
	mounted() {
    /* 保存上一个数据city值 */ 
		this.lastCity = this.city
		this.getHomeInfo()
	},
	/*
  activated: 当使用keep-alive时，App.vue将附加组件激活
	当页面重新显示的时候将运行
	deactivated(){}, 与activated相反
  */
	activated() {
		if (this.lastCity !== this.city) {
      /* save preCity */
      // 城市变化时, 重新调用 getHomeInfo() 发请求
			this.lastCity = this.city
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
