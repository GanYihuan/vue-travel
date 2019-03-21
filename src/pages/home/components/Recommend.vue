<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- router-link 默认换成 a 标签 -->
      <router-link
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
        class="item border-bottom"
        tag="li"
      >
        <img
          :src="item.imgUrl"
          class="item-img">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import './Recommend.styl';
</style>
