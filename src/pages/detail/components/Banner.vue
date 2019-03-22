<template>
  <div>
    <div
      class="banner"
      @click="handleBannerClick">
      <img
        :src="bannerImg"
        class="banner-img">
      <div class="banner-info">
        <div class="banner-tittle">
          {{ sightNameData }}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ bannerImgsData.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        v-show="showGallary"
        :imgs="bannerImgs"
        @close="handleGallaryClose"
      />
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  props: {
    sightName: {
      type: String,
      default() {
        return ''
      }
    },
    bannerImg: {
      type: String,
      default() {
        return ''
      }
    },
    bannerImgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      showGallary: false,
      bannerImgsData: this.bannerImgs,
      sightNameData: this.sightName
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true
    },
    handleGallaryClose() {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './Banner.styl';
</style>
