<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1603/4e/4ec01cc307848a5890.water.jpg_600x330_a501dc5a.jpg" />
      <div class="banner-info">
        <div class="banner-title">钟山风景区(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe616;</span>
          39
        </div>
      </div>
    </div>
    <gallary :imgs="imgs" v-show="showGallary" @close="close"></gallary>
  </div>
</template>

<script>
import Gallary from 'common/gallary/gallary'

export default {
  name: 'Banner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1601/93/93fc9519bd1959b890.img.jpg_r_800x800_5e2b70dc.jpg', 'http://img1.qunarzz.com/sight/p0/1601/fa/fa06b4e074adc78690.img.jpg_r_800x800_6ee16631.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    close () {
      this.showGallary = false
    }
  },
  components: {
    Gallary
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        margin-top: .14rem
        padding: 0 .4rem
        height: .32rem
        line-height: .32rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
