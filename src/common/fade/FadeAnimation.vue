<template>
  <transition>
    <slot/>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
@import './FadeAnimation.styl';
</style>
