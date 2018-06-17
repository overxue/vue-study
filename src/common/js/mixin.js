import {mapGetters} from 'vuex'

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
