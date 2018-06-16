<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        class="item border-bottom"
        tag="li"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
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
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
/* @import '../../../assets/styles/varibles.styl'; */
@import '~styles/mixins.styl';
@import './Recommend.styl';
</style>
