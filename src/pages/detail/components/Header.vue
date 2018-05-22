<template>
  <div>
    <router-link
      class="header-abs"
      tag="div"
      to="/"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
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
    data () {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    unmounted () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        const top = document.documentElement.scrollTop
        if (top > 60) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          // key === value, just write one
          // this.opacityStyle = {opacity: opacity}
          this.opacityStyle = {opacity}
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  /*@import '~styles/varibles.styl'*/
  @import '../../../assets/styles/varibles.styl';
  @import "./Header.styl";
</style>
