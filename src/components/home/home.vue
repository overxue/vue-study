<template>
  <div>
    <v-header></v-header>
    <header-swiper></header-swiper>
    <home-icons></home-icons>
    <recommend></recommend>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/header'
import HeaderSwiper from './components/HeaderSwiper'
import HomeIcons from './components/icons'
import Recommend from './components/recommend'

export default {
  name: 'Home',
  components: {
    'v-header': Header,
    HeaderSwiper,
    HomeIcons,
    Recommend
  }
}
</script>

<style>
</style>
