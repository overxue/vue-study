import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
import {commonParams, options} from './config'
Vue.use(VueJsonp)

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, options, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return Vue.jsonp(url, data)
}
