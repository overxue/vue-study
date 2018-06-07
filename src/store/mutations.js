import * as types from './mutation-types'

// mutation 文件用来修改
const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  }
}

export default mutations
