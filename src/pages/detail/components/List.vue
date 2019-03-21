<template>
  <div>
    <div
      v-for="(item, index) of list"
      :key="index"
      class="item"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"/>
        {{ item.title }}
      </div>
      <div
        v-if="item.children"
        class="item-chilren">
        <!-- detail-list 名称为了使用递归 -->
        <detail-list :list="item.children"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /*
  递归: 组件自身调用自身
  名称为了使用递归
  */
  name: 'DetailList',
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
@import './List.styl';
</style>
