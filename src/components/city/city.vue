<template>
    <div>
      <s-header></s-header>
      <search></search>
      <list :cities="cities" :hotcities="hotcities"></list>
      <alphabet :cities="cities"></alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import SerachHeader from './components/sheader'
import Search from './components/search'
import List from './components/list'
import Alphabet from './components/alphabet'

export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotcities: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleGetCityInfo)
    },
    handleGetCityInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotcities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  },
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
