<template>
  <div>
    <v-header></v-header>
    <header-swiper></header-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/header'
import HeaderSwiper from './components/HeaderSwiper'
import HomeIcons from './components/icons'

export default {
  name: 'Home',
  components: {
    'v-header': Header,
    HeaderSwiper,
    HomeIcons
  }
}
</script>

<style>
</style>
