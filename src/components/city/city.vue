<template>
    <div>
      <s-header></s-header>
      <search></search>
      <list></list>
      <alphabet></alphabet>
    </div>
</template>

<script>
import SerachHeader from './components/sheader'
import Search from './components/search'
import List from './components/list'
import Alphabet from './components/alphabet'

export default {
  name: 'City',
  components: {
    's-header': SerachHeader,
    Search,
    List,
    Alphabet
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
