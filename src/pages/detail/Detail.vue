<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    >
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  // 缓存, 递归
	name: 'Detail',
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data() {
		return {
			sightName: '',
			bannerImg: '',
			gallaryImgs: [],
			list: []
		}
  },
  // 发ajax请求, 只会执行一次
	mounted() {
		this.getDetailInfo()
	},
	methods: {
		getDetailInfo() {
			axios
				.get('/api/detail.json', {
					params: {
						// 获取路由参数
						id: this.$route.params.id
					}
				})
				.then(this.handleGetDataSucc)
		},
		handleGetDataSucc(res) {
			res = res.data
			if (res.ret && res.data) {
				const data = res.data
				this.sightName = data.sightName
				this.bannerImg = data.bannerImg
				this.gallaryImgs = data.gallaryImgs
				this.list = data.categoryList
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
@import './Detail.styl';
</style>
