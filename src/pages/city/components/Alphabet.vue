<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
	name: 'CityAlphabet',
	props: {
		cities: Object
	},
	computed: {
		letters() {
			const letters = []
			for (let i in this.cities) {
				letters.push(i)
			}
			// [A, B, C ...]
			return letters
		}
	},
	data() {
		return {
			touchStatus: false,
			startY: 0,
			timer: null
		}
	},
	updated() {
		/* startY: 'A' 距离父元素顶部距离 */
		this.startY = this.$refs['A'][0].offsetTop
	},
	methods: {
		handleLetterClick(e) {
			this.$emit('change', e.target.innerText)
		},
		handleTouchStart() {
			this.touchStatus = true
		},
		handleTouchMove(e) {
			if (this.touchStatus) {
				if (this.timer) {
					clearTimeout(this.timer)
				}
				/* 节流功能 */
				this.timer = setTimeout(() => {
          /*
          touches: 手指信息
					e.touches[0].clientY: 点击位置到窗口顶部距离
					79: 城市选择头高度
          */
					const touchY = e.touches[0].clientY - 79
					const index = Math.floor((touchY - this.startY) / 20)
					if (index >= 0 && index < this.letters.length) {
						this.$emit('change', this.letters[index])
					}
				}, 16)
			}
		},
		handleTouchEnd() {
			this.touchStatus = false
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import './Alphabet.styl';
</style>
