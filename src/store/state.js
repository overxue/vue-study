import {playMode} from 'common/js/config'

const state = {
  // 歌手数据
  singer: {},
  // 是否正在播放
  playing: false,
  // 播放界面展开还是收起
  fullScreen: false,
  // 播放列表
  playlist: [],
  // 顺序列表
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  // 当前播放索引
  currentIndex: -1
}

export default state
