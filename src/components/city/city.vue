<template>
    <div>
      <v-header></v-header>
      <search></search>
    </div>
</template>

<script>
import Header from './components/header'
import Search from './components/search'

export default {
  name: 'City',
  components: {
    'v-header': Header,
    Search
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
