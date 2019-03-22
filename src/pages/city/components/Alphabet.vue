<template>
  <ul class="list">
    <li
      v-for="item of letters"
      :key="item"
      :ref="item"
      class="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters() {
      const letters = []
      for (const i in this.cities) {
        letters.push(i)
      }
      return letters // [A, B, C ...]
    }
  },
  updated() { // virtual DMO re-render and patch
    this.startY = this.$refs['A'][0].offsetTop // startY: 'A' 距离父元素顶部距离
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
        this.timer = setTimeout(() => { // 节流函数
          /*
          touches: 手指信息
					e.touches[0].clientY: 点击位置到窗口顶部距离
					79: 城市选择头高度(蓝色部分), 20: 每个字母高度
          */
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20) // 第几个字母
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index]) // 点中的字母
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
