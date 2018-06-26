import {mapGetters, mapMutations, mapActions} from 'vuex'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

export const playlistMixin = {
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  mounted () {
    this.handlePlayList(this.playlist)
  },
  activated () {
    this.handlePlayList(this.playlist)
  },
  watch: {
    playlist (newWal) {
      this.handlePlayList(newWal)
    }
  },
  methods: {
    handlePlayList () {
      throw new Error('component must implement handlePlaylist method')
    }
  }
}

export const playerMixin = {
  computed: {
    iconMode () {
      return this.mode === playMode.sequence ? 'icon-sequence' : this.mode === playMode.loop ? 'icon-loop' : 'icon-random'
    },
    ...mapGetters([
      'sequenceList',
      'currentSong',
      'playlist',
      'mode'
    ])
  },
  methods: {
    changeMode () {
      const mode = (this.mode + 1) % 3
      this.setPlayMode(mode)
      let list = null
      if (mode === playMode.random) {
        list = shuffle(this.sequenceList)
      } else {
        list = this.sequenceList
      }
      this.resetCurrentIndex(list)
      this.setPlaylist(list)
    },
    resetCurrentIndex (list) {
      let index = list.findIndex((item) => {
        return item.id === this.currentSong.id
      })
      this.setCurrentIndex(index)
    },
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN',
      setPlayingState: 'SET_PLAY_STATE',
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setPlayMode: 'SET_PLAY_MODE',
      setPlaylist: 'SET_PLAYLIST'
    })
  }
}

export const searchMixin = {
  data () {
    return {
      query: ''
    }
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  methods: {
    onQueryChange (query) {
      this.query = query
    },
    blurInput () {
      this.$refs.searchBox.blur()
    },
    saveSearch () {
      this.saveSearchHistory(this.query)
    },
    addQuery (query) {
      this.$refs.searchBox.setQuery(query)
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory'
    ])
  }
}
