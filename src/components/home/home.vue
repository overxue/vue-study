<template>
  <div>
    <v-header :city="city"></v-header>
    <header-swiper :list="swiperList"></header-swiper>
    <home-icons :list="iconList"></home-icons>
    <recommend :list="recommendList"></recommend>
    <wekkend :list="weekendList"></wekkend>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/header'
import HeaderSwiper from './components/HeaderSwiper'
import HomeIcons from './components/icons'
import Recommend from './components/recommend'
import Wekkend from './components/weekend'
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    'v-header': Header,
    HeaderSwiper,
    HomeIcons,
    Recommend,
    Wekkend
  },
  mounted () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  }
}
</script>

<style>
</style>
