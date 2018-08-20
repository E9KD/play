export default {
  changeWord(state, x) {
    state.x = x.replace(" ", "");

  },
  changeUrl(state) {
    state.url = state.urlHeader + state.x + state.urlParam
  },
  changeSongindex(state, x) {
    state.songIndex = x
  },
  cleanSongname(state) {
    state.songName = []
  },
  songMp3(state) {
    state.songFilelink = state.songMp3list[state.songIndex]
  },
  songNameclick(state,x){
    state.playSongname=x
  },
  playListnone(state) {
    state.playList = false
  },
  playListshow(state) {
    state.playList = true
  },
  homeIndexchange(state,x){
    state.homeIndex=x
    //将歌曲的name放到一个state中，然后我们有index。完成 哼
    state.playSongname=state.homeSongname[x]
  },
  homeSongchange(state){
    state.songFilelink=state.homeSonglist[state.homeIndex]
  },
  homeImagechange(state){
    state.imageList=state.homeSongimage
    state.songIndex=state.homeIndex
  },
  haveLikesong(state){
    state.isLikesong=true
  },
  notLikesong(state){
    state.isLikesong=false
  },
  playLikelist(state,x){
    state.likeIndex=x

  },
  likeSongchange(state){
    state.songFilelink=state.likeSonglist[state.likeIndex]
  },
  likeImagechange(state){
    state.imageList=state.likeImagelist
    state.songIndex=state.likeIndex
  },
  likeNamechange(state){
    state.playSongname=state.likeSongnamelist[state.likeIndex]
  },
  likeSongnumberchange(state){
    state.likeSongnumber=state.likeSongnamelist.length
  }
}
