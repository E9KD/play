<template >
   <div>
     <div class="swipe">
       <van-swipe :autoplay="3000">
          <van-swipe-item class="asd">
            <img src="../../static/pic/thatgirl.jpg" alt="" class="swipeimg" @click="playRecommend(9)" > 
          </van-swipe-item>
          <van-swipe-item class="asd">
            <img src="../../static/pic/gallows.jpg" alt="" class="swipeimg" @click="playRecommend(10)">
          </van-swipe-item>
          <van-swipe-item class="asd"> 
            <img src="../../static/pic/hope.jpg" alt="" class="swipeimg" @click="playRecommend(11)">
          </van-swipe-item>
      </van-swipe>
     </div>
      <div class="recommend">
        <h2 class="title">推荐歌曲</h2>
        <van-row gutter="5" class="recommendlist">
          <van-col span="8">
            <img src="../../static/pic/HandClap.jpg" alt="" @click="playRecommend(0)">
            <p class="name">HandClap</p>
          </van-col>
          <van-col span="8">
            <img src="../../static/pic/Havana.jpg" alt="" @click="playRecommend(1)">
            <p class="name">Havana</p>
          </van-col>
          <van-col span="8">
            <img src="../../static/pic/takefight.jpg" alt="" @click="playRecommend(2)">
            <p class="name">Take Fight</p>
          </van-col>
        </van-row>
        <van-row gutter="5" class="secondlist recommendlist">
          <van-col span="8">
              <img src="../../static/pic/lucky.jpg" alt="" @click="playRecommend(3)">
              <p class="name">小幸运</p>
          </van-col>
          <van-col span="8">
              <img src="../../static/pic/jay.jpg" alt="" @click="playRecommend(4)">
              <p class="name">告白气球</p>
          </van-col>
          <van-col span="8">
              <img src="../../static/pic/little.jpg" alt="" @click="playRecommend(5)">
              <p class="name">佛系少女</p>
          </van-col>
        </van-row>
        <van-row gutter="5" class="secondlist recommendlist">
          <van-col span="8">
              <img src="../../static/pic/chengdu.jpg" alt="" @click="playRecommend(6)">
              <p class="name">成都</p>
          </van-col>
          <van-col span="8">
              <img src="../../static/pic/xiazhi.jpg" alt="" @click="playRecommend(7)">
              <p class="name">追光者</p>
          </van-col>
          <van-col span="8">
              <img src="../../static/pic/no.jpg" alt="" @click="playRecommend(8)">
              <p class="name">我们不一样</p>
          </van-col>
        </van-row>
      </div>
      <div class="newsong"></div>
   </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(['testLike']),
    ...mapMutations(["homeIndexchange"]),
    playRecommend(index) {
      this.homeIndexchange(index);
      this.testLike()
    }
  },
  computed: {
    ...mapState(["homeIndex"])
  }
};
</script>

<style scoped>
.name {
  margin: 3% 0 10% 0px;
}
/* .secondlist {
  margin-top: 6%;
} */

.swipeimg {
  height: 200px;
  width: 100%;
}
img {
  width: 100%;
  /* height: 200px; */
}
.recommendlist {
  width: 100%;
}
</style>
