<template>

  <div class="bom">
<van-tabbar v-model="active">
  <van-tabbar-item @click="gt('/home')" >
    <span>主页</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? home.active : home.normal"
    >
  </van-tabbar-item>
  <van-tabbar-item  @click="gt('/like')" >
    <span>喜欢</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? like.active : like.normal"
      
    >
  </van-tabbar-item>
  <van-tabbar-item @click="gt('/history')" >
    <span>历史</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? history.active : history.normal"
    >
    </van-tabbar-item>
  <van-tabbar-item @click="gt('/set')" >
    <span>设置</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? set.active : set.normal"
    >
    </van-tabbar-item>
</van-tabbar>

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      active: 0,
      home: {
        normal: '../../static/pic/homenormal.png',
        active: '../../static/pic/homeactive.png'
      },
      like: {
        normal: '../../static/pic/likenormal.png',
        active: '../../static/pic/likeactive.png'
      },
      history: {
        normal: '../../static/pic/historynormal.png',
        active: '../../static/pic/historyactive.png'
      },
      set: {
        normal: '../../static/pic/setnormal.png',
        active: '../../static/pic/setactive.png'
      },
    }
  },
  computed:{
    
  },
  methods:{
    ...mapMutations(['playListnone']),
    gt(path){
      this.$router.replace(path)
      this.playListnone()
    }
  }
}
</script>

<style scoped>
.van-tabbar-item--active {
color:#d81e06;
}
.bom {
  height: 50px;
}

/* .set {
  background: url(../../../statics/pic/set.png) center center no-repeat;
} */
</style>
