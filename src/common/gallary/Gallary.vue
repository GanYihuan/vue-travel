<template>
  <div
    class="container"
    @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index">
          <img
            :src="item"
            class="gallary-img">
        </swiper-slide>
        <div
          slot="pagination"
          class="swiper-pagination"/>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination', // dots
        paginationType: 'fraction', // dots type
        observeParents: true, // 当 swiper 父元素改变时，swiper 刷新
        observer: true // 当 swiper 父元素或自身 dom 改变时，swiper 刷新
      }
    }
  },
  methods: {
    handleGallaryClick() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './Gallary.styl';
</style>
