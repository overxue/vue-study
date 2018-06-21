import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
import {commonParams, options} from './config'
Vue.use(VueJsonp)

export function getTopList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'

  const data = Object.assign({}, options, commonParams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return Vue.jsonp(url, data)
}

export function getMusicList (topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

  const data = Object.assign({}, options, commonParams, {
    topid,
    needNewCode: 1,
    uin: 0,
    tpl: 3,
    page: 'detail',
    type: 'top',
    platform: 'h5'
  })
  return Vue.jsonp(url, data)
}
