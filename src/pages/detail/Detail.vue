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
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail', // cache, Recursive
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
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo() {
      axios
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id // Get routing parameters
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
