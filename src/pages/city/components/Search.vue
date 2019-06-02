<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      >
    </div>
    <div
      v-show="keyword"
      ref="search"
      class="search-content"
    >
      <ul>
        <li
          v-for="item of list"
          :key="item.id"
          class="search-item border-bottom"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>
        <li
          v-show="hasNoData"
          class="search-item border-bottom"
        >
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
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
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (!this.keyword) {
        this.list = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => { // Throttling function
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
							value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import './Search.styl';
</style>
