<template>
    <div>
      <banner></banner>
      <v-header></v-header>
      <div class="content"></div>
    </div>
</template>

<script>
import Banner from './components/banner'
import vHeader from './components/vheader'

export default {
  name: 'Detail',
  components: {
    Banner,
    vHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    height: 50rem
</style>
