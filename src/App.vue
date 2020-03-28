<template>
  <div id="app">
    <router-view/>
    <Tabbar v-if="$route.meta.tabbar"/>
  </div>
</template>
<script>
import Tabbar from "@/components/tabbar/index.vue"
  export default {
    components:{Tabbar}
  }
</script>
<style lang="less">
  @import './assets/style/resets.less';
  #app{
    width: 100%;
    height: 100%;
    background-color: @e-bg-base-color;
  }
</style>
