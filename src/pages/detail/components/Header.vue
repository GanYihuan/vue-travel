<template>
  <div>
    <router-link
      v-show="showAbs"
      class="header-abs"
      tag="div"
      to="/"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      v-show="!showAbs"
      :style="opacityStyle"
      class="header-fixed"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity: opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    },
    activated() {
      window.addEventListener('scroll', this.handleScroll)
    },
    deativated() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import './Header.styl';
</style>
