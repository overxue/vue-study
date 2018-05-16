<template>
    <div>
      <banner></banner>
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

export default {
  name: 'Detail',
  components: {
    Banner,
    vHeader,
    List
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          'title': '成人三馆联票',
          children: [{
            'title': '三级'
          }]
        }, {
          'title': '成人五馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '特惠票'
      }]
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    height: 50rem
</style>
