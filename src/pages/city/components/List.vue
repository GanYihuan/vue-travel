<template>
  <div
    ref="wrapper"
    class="list"
  >
    <!-- outer <div></div> for better-scroll  -->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            v-for="item of hot"
            :key="item.id"
            class="button-wrapper"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <!-- cities it's object, so use (item, key) -->
      <!-- (item, key)-> key: A,B,C... :ref='A,B,C...' -->
      <div
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
        class="area">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            v-for="innerItem of item"
            :key="innerItem.id"
            class="item border-bottom"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    hot: {
      type: Array,
      default() {
        return []
      }
    },
    cities: {
      type: Object,
      default() {
        return {}
      }
    },
    letter: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
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
@import './List.styl';
</style>
