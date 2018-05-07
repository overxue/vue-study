<template>
  <div>
    <v-header></v-header>
    <header-swiper></header-swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/header'
import HeaderSwiper from './components/HeaderSwiper'

export default {
  name: 'Home',
  components: {
    'v-header': Header,
    HeaderSwiper
  }
}
</script>

<style>
</style>
