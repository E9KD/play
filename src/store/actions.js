import {
  getSonginfo
} from '../api/index' //从index。js中引入请求getSonginfo



export default {
  async getSongname({
    commit,
    state
  }) {

    commit('changeUrl')
    const result = await getSonginfo(state.url) //将得到的结果放到一个变量里面
    if (result.error_code == 114) {
      return;
    } else {
      let songLength = result.data.length; //没有问题
      state.songName = []
      state.imageList = []
      state.songMp3list = []
      for (var i = 0; i < songLength; i++) {
        state.songName.push(result.data[i].song_name);
        state.imageList.push(result.data[i].pic_small);
        state.songMp3list.push(result.data[i].song_file);
      }
    }
  },
  changeLoopture({
    commit,
    state
  }) {
    state.singLoop = true
  },
  changeLoopfalse({
    commit,
    state
  }) {
    state.singLoop = false
  },
  getLikesong({
    commit,
    state
  }) {
    //音乐
    state.likeSonglist.push(state.songFilelink)
    //图片
    state.likeImagelist.push(state.imageList[state.songIndex])
    //名字
    state.likeSongnamelist.push(state.playSongname)
    commit('likeSongnumberchange')
    console.log(state.likeSonglist);
    console.log(state.likeImagelist);
    console.log(state.likeSongnamelist);
  },
  cleanLikesong({
    commit,
    state
  }) {
    //获得name，查找数组中对应index，删除链接和图片相应的index
    var likeSongindex = state.likeSongnamelist.indexOf(state.playSongname)
    state.likeSonglist.splice(likeSongindex, 1)
    state.likeImagelist.splice(likeSongindex, 1)
    state.likeSongnamelist.splice(likeSongindex, 1)
    commit('likeSongnumberchange')
    // console.log(state.likeSonglist);
    // console.log(state.likeImagelist);
    // console.log(state.likeSongnamelist);
  },
  testLike({
    commit,
    state
  }) {
    var likeSongistrue = state.likeSongnamelist.indexOf(state.playSongname)
    console.log(likeSongistrue);
    if (likeSongistrue != -1) {
      commit('haveLikesong')
    }else {
      commit('notLikesong')
    }
  },
  likeSongchange({commit,state}){
    commit('likeSongchange')
    commit('likeImagechange')
    commit('likeNamechange')
  }
}
