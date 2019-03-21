<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        v-for="item of list"
        :key="item.id"
        class="item border-bottom"
      >
        <div class="item-img-wrapper">
          <img
            :src="item.imgUrl"
            class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
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
@import './Weekend.styl';
</style>
