<template>
    <div>
      <banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></banner>
      <v-header></v-header>
      <div class="content">
        <list :list="list"></list>
      </div>
    </div>
</template>

<script>
import Banner from './components/banner'
import vHeader from './components/vheader'
import List from './components/list'
import axios from 'axios'

export default {
  name: 'Detail',
  methods: {
    getDetailInfo () {
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
      })
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  components: {
    Banner,
    vHeader,
    List
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    height: 50rem
</style>
