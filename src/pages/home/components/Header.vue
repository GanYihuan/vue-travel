<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- {{this.$store.state.city}} -->
        {{ city }}
        <!-- {{this.doubleCity}} -->
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']), // 将 vuex 共用数据 city 映射到 'city' 当中: city: city
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
/* scoped 只用于此组件 */
@import '~styles/varibles.styl';
@import './Header.styl';
</style>
