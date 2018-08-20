<template >


 <div ref="qqq" class="top">
   <van-nav-bar class="asd">
      <van-icon  slot="left"  class="logo icom" />
      <van-icon  slot="title" @click="researchClick" class="research icom" />
      <van-icon  slot="right" class="playing icom"  @click="showPLaypage" />
  </van-nav-bar>
  <form action="/">
    <van-search placeholder="搜索喜欢的歌曲..." class="qwe"  show-action  @cancel="onCancel" v-show="ishow"  v-model="keyword" @focus="getFocus" />
  </form>
    <div class="researchbox" v-show="isresearch">
      <ul class="songul">
        <li v-for="(songNamelist,songIndex) in songName" v-bind:key="songIndex" class="songlist" @click="songChoose(songIndex,songNamelist)">
          {{songNamelist}}
          </li>
      </ul> 
    </div>

    <div class="playbox" :style="{height:boxHeight,width:boxWidth}" id="playpage" v-show="ishowPLaypage" >
        <div class="wallpage" :style="{height:boxHeight,backgroundImage:'url(' + this.imageList[this.songIndex] + ')'}"></div>
        <h2 class="songname">{{playingSongname}}</h2>
        <div class="goback">
          <img src="../../static/pic/back.png" alt="" @click="goBack">
        </div>
        <div class="pic" :style="{backgroundImage:'url('+ this.imageList[this.songIndex]+')'}"></div>
        <div class="second">
            <img :src="like" alt="#" @click="changelike" class="like">
            <img src="../../static/pic/review.png" alt="#">
        </div>
        <div class="progressbar"></div>
        <div class="setlist">
            <img src="../../static/pic/list.png" alt="#" class="set" style="float:left;margin-left:3%;" @click="getTime">
            <img src="../../static/pic/prev.png" alt="#" class="set" style="margin-right:3%">
            <img :src="start" alt="#" @click="changestart" class="seta">
            <img src="../../static/pic/next.png" alt="#" class="set" style="margin-left:3%;">
            <img :src="loop" alt="#" @click="changeloop" class="set" style="float:right;margin-right:3%;">
        </div>
        <audio  ref="player"   style="display:none" :src="this.songFilelink" controls="controls">
</audio>
    </div>
 </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      playingSongname: "",
      keyword: "",
      ishow: false,
      songLength: "",
      isresearch: false,
      boxHeight: "",
      boxWidth: "",
      active: 0,
      like: "../../static/pic/playlike.png",
      start: "../../static/pic/start.png",
      loop: "../../static/pic/loop.png",
      ishowPLaypage: false
      // audio: Audio
    };
  },
  created() {
    this.changeHeight();
  },
  methods: {
    goBack() {
      this.ishowPLaypage = false;
      document.documentElement.style.overflowY = "visible";
    },
    showPLaypage() {
      if (this.playList) {
        this.playListnone();
        this.ishowPLaypage = false;
        document.documentElement.style.overflowY = "visible";
      } else {
        this.playListshow();
        this.ishowPLaypage = true;
        document.documentElement.style.overflowY = "hidden";
      }
      // this.ishowPLaypage=!this.ishowPLaypage
    },
    getFocus() {
      this.isresearch = true;
      this.cleanSongname();
    },
    songChoose(songIndex, songNamelist) {
      //拿到点击歌曲的index
      this.isresearch = false;
      this.ishow = false;
      this.keyword = "";
      this.changeSongindex(songIndex); //改变state里面的songindex的值
      this.songMp3();
      this.songNameclick(songNamelist);
      this.ishowPLaypage = true;
      this.playListshow();
      this.testLike();
      setTimeout(() => {
        this.start = "../../static/pic/stop.png";
        this.$refs.player.play();
      }, 500);
    },
    researchClick() {
      this.ishow = !this.ishow;
    },
    onCancel() {
      this.ishow = false;
    },
    ...mapMutations([
      "changeKeyword",
      "changeWord",
      "changeSongindex",
      "cleanSongname",
      "songMp3",
      "autoPlaytrue",
      "autoPlayfalse"
    ]),
    changeHeight() {
      this.boxHeight = window.innerHeight + "px";
      this.boxWidth = window.innerWidth + "px";
    },
    changelike() {
      if (this.like == "../../static/pic/playlike.png") {
        this.like = "../../static/pic/playlikeclick.png";
        this.getLikesong();
      } else {
        this.like = "../../static/pic/playlike.png";
        this.cleanLikesong();
      }
    },
    changestart() {
      if (this.start == "../../static/pic/start.png") {
        this.start = "../../static/pic/stop.png";
        this.$refs.player.play();
        console.log("asdasdasd");
      } else {
        this.start = "../../static/pic/start.png";
        this.$refs.player.pause();
      }
    },
    changeloop() {
      if (this.loop == "../../static/pic/loop.png") {
        this.loop = "../../static/pic/singleloop.png";
        this.$refs.player.loop = true;
      } else {
        this.loop = "../../static/pic/loop.png";
        this.$refs.player.loop = false;
      }
    },
    getTime() {
      console.log(this.$refs.player.duration);
    },
    ...mapActions([
      "changLoopture",
      "changeLoopfalse",
      "getSongname",
      "getLikesong",
      "cleanLikesong",
      'likeSongchange',
      "testLike"
    ]),
    ...mapMutations([
      "playListnone",
      "playListshow",
      "homeSongchange",
      "homeImagechange",
      "songNameclick",
      'likeImagechange'
    ])
  },
  computed: {
    ...mapState([
      "keywordurl",
      "songName",
      "ccc",
      "imageList",
      "songIndex",
      "songFilelink",
      "playList",
      "homeIndex",
      "homeSongimage",
      "playSongname",
      "isLikesong",
      "likeIndex"
    ])
  },
  watch: {
    likeIndex() {
      this.likeSongchange()
      setTimeout(() => {
        this.start = "../../static/pic/stop.png";
        this.
        this.$refs.player.play();
      }, 500);
    },
    playSongname() {
      this.playingSongname = this.playSongname;
      if (this.isLikesong) {
        this.like = "../../static/pic/playlikeclick.png";
      } else {
        this.like = "../../static/pic/playlike.png";
      }
    },
    keyword(x) {
      if (x.length == 0) {
        this.isresearch = false;
        // this.songName = [];
      } else {
        this.isresearch = true;
        setTimeout(() => {
          this.changeWord(x);
          this.getSongname();
        }, 1300);
      }
    },
    playList() {
      if (this.playList == false) {
        this.ishowPLaypage = false;
      }
    },
    homeIndex() {
      this.homeSongchange();
      this.homeImagechange();
      setTimeout(() => {
        this.start = "../../static/pic/stop.png";
        this.$refs.player.play();
      }, 500);
    }
  }
};
</script>       

<style scoped>
.zxc {
  width: 50px;
  height: 50px;
  background-color: red;
}
.qwe {
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 100;
}
.icom {
  display: inline-block;
  width: 32px;
  height: 32px;
}
.researchbox {
  position: absolute;
  top: 46px;
  left: 0px;
  width: 100%;
  background-color: #eee;
  z-index: 999;
}
.logo {
  background: url(../../static/pic/logo.png) center center no-repeat;
}
.playing {
  background: url(../../static/pic/playj.png) center center no-repeat;
}
.research {
  background: url(../../static/pic/research.png) center center no-repeat;
}
.songul {
  height: 780px;
  overflow: hidden;
}
.songlist {
  background: url(../../static/pic/findsmall.png) left center no-repeat;
  font-size: 13px;
  padding: 10px 0;
  padding-left: 20px;
  margin: 0 15px;
  border-bottom: 1px solid #999;
}
.playbox {
  position: fixed;
  z-index: 99;
  background-color: #eee;
  top: 0px;
  left: 0px;
}
.wallpage {
  filter: blur(50px);
  background-position: center 43%;
  background-size: cover;
  background-repeat: no-repeat;
}
.goback {
  position: absolute;
  left: 2%;
  top: 2%;
}
.pic {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -120%);
  background-color: black;
  height: 150px;
  width: 150px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 150px;
}
.secondcom {
  display: inline-block;
  height: 32px;
  width: 32px;
}
.second {
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, 0);
  background-color: transparent;
  width: 100%;
  text-align: center;
}
.like {
  margin-right: 15%;
}
.setlist {
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: 2%;
  transform: translate(-50%, 0);
  text-align: center;
}
.set {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.seta {
  width: 45px;
  height: 45px;
  vertical-align: middle;
}
.songname {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0);
  font-size: 20px;
}
</style>
