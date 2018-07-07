<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
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
				/* dots */
				pagination: '.swiper-pagination',
				/* dots type */
				paginationType: 'fraction',
				/* 当swiper父元素改变时，swiper刷新 */
				observeParents: true,
				/* 当swiper父元素或自身dom改变时，swiper刷新 */
				observer: true
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
