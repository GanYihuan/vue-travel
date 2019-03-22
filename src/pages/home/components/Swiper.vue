<template>
  <div class="wrapper">
    <swiper
      v-if="showSwiper"
      :options="swiperOption">
      <swiper-slide
        v-for="item of list"
        :key="item.id">
        <img
          :src="item.imgUrl"
          class="swiper-img">
      </swiper-slide>
      <div
        slot="pagination"
        class="swiper-pagination"/>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './Swiper.styl';
</style>
