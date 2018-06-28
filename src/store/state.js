import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

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
  currentIndex: -1,
  // 歌单
  disc: {},
  // 排行数据
  topList: {},
  // 搜索历史
  searchHistory: loadSearch(),
  // 播放历史
  playHistory: loadPlay(),
  // 喜欢的歌曲
  favoriteList: loadFavorite()
}

export default state
