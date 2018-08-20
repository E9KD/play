<template >

    <div>
        <h2 class="title">喜欢的音乐 共 {{this.likeSongnumber}} 首</h2>
        <div class="likelist">
            <div v-for="(item,index) in this.likeSongnamelist" :key="index.id" class="list" @click="playLikesong(index)">
                <i class="i index">{{index+1}}</i>
                <i class="i">{{ item }}</i>
                <img src="../../static/pic/playlikeclick.png" alt="" srcset="" class="likeicon" @click.stop="islike">
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    data(){
        return{
            // likeSongmun:0,
        }
    },
    methods:{
        ...mapMutations(['playLikelist']),
        ...mapActions(['cleanLikesong']),
        islike(){
            this.cleanLikesong()
        },
        playLikesong(index){
            this.playLikelist(index)
        }
    },
    computed:{
        ...mapState(['likeSongnamelist','likeSongnumber']),
    },
    // watch:{
    //     likeSongnumber(){
    //         this.likeSongmun=this.likeSongnumber
    //     }
    // }
}
</script>

<style scoped>
.list {
    width: 90%;
    border-bottom: 1px solid #999;
    margin: 0 5% 0 5%;
    padding: 3% 0;
}
.i {
    margin-left: 10%;
    font-size: 17px;
    
}
.likeicon {
    width: 30px;
    height: 30px;
    margin-right: 10%;
    float: right;
}
.index {
    color: tomato;
}
.title {
    margin-left: 5%;
}
</style>
