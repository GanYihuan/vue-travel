<template>
  <div>
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-chilren" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	// 名称为了使用递归
	name: 'DetailList',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
@import './List.styl';
</style>
