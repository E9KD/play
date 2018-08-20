<template>
  <div id="appbox">
    <topcomps></topcomps>
    <maincomps></maincomps>
    <bomcomps></bomcomps>

  </div>
</template>

<script>
import topcomps from '../src/components/top.vue'
import bomcomps from '../src/components/bottom.vue'
import maincomps from '../src/components/main.vue'
export default {
  components:{
    topcomps,
    bomcomps, 
    maincomps
  }
};
</script>

<style scoped>
/* #appbox {
  height: 100%;
  width: 100%;
  background-color: #eee;
  margin: 0 auto;

} */

</style>
