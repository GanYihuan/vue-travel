<template>
  <div>
    <detail-banner
      :sight-name="sightName"
      :banner-img="bannerImg"
      :banner-imgs="gallaryImgs"
    />
    <detail-header/>
    <div class="content">
      <detail-list :list="list"/>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail', // 缓存, 递归
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
  mounted() {
    this.getDetailInfo() // 发 ajax 请求, 只会执行一次
  },
  methods: {
    getDetailInfo() {
      axios
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id // 获取路由参数
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
