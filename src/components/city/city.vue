<template>
    <div>
      <s-header></s-header>
      <search :cities="cities"></search>
      <list :cities="cities" :hotcities="hotcities" :letter="letter"></list>
      <alphabet :cities="cities" @change="handleLetterChange"></alphabet>
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
      hotcities: [],
      letter: ''
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
    },
    handleLetterChange (letter) {
      this.letter = letter
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
