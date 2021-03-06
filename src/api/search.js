import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
import {commonParams, options} from './config'
Vue.use(VueJsonp)

export function getHotKey () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, options, commonParams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })
  return Vue.jsonp(url, data)
}

export function search (query, page, zhida, perpage) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  const data = Object.assign({}, options, commonParams, {
    w: query,
    p: page,
    catZhida: zhida ? 1 : 0,
    zhidaqu: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage,
    n: perpage,
    remoteplace: 'txt.mqq.all',
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })
  return Vue.jsonp(url, data)
}
