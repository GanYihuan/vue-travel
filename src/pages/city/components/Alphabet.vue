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
    this.startY = this.$refs['A'][0].offsetTop // startY: 'A' Distance from the top of the parent element
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
        this.timer = setTimeout(() => { // Throttling function
          /*
          touches: Finger information
					e.touches[0].clientY: Click location to the top of the header
          79: City selection header height(Blue part)
          20: Height of each letter
          */
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20) // current touch letter index
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index]) // whitch letter been touch
          }
        }, 16) // The minimum interval is 16.7ms
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
