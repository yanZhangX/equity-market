<template>
  <div class="e-tabbar md-example-child md-example-child-tabs md-example-child-tab-bar-4">
    <md-tab-bar
      v-model="current"
      :items="items"
      :has-ink="false"
      @change="changeTab"
    >
      <template slot="item" slot-scope="{ item, currentName}">
        <div class="custom-item">
          <img class="item-img" :src="currentName==item.name ? item.active : item.normal">
          <div class="text">
            <span v-text="item.label"></span>
          </div>
        </div>
      </template>
    </md-tab-bar>
  </div>
</template>

<script>
import {TabBar} from 'mand-mobile'

export default {
  name: 'tab-bar',
  /* DELETE */
  title: '自定义内容',
  titleEnUS: 'Custom Item',
  /* DELETE */
  components: {
    [TabBar.name]: TabBar
  },
  data() {
    return {
      current: 1,
      items: [
        {
          name:1,
          normal: require("../../assets/icons/tabbar/icon_quotation.png"),
          active: require('../../assets/icons/tabbar/sel_quotation.png'),
          label: '商品行情',
          path:'/'
        },
         {
          name:2,
          normal: require("../../assets/icons/tabbar/icon_trans.png"),
          active: require('../../assets/icons/tabbar/sel_trans.png'),
          label: '交易记录',
          path:'/transRecord'
        },
         {
          name:3,
          normal: require("../../assets/icons/tabbar/icon_user.png"),
          active: require('../../assets/icons/tabbar/icon_user.png'),
          label: '商品行情',
          path:'/'
        },
      ],
    }
  },
  methods:{
    changeTab(item, index, prevIndex){
      this.$router.replace({path:item.path})
    }
  }
}

</script>

<style lang="less">
@import "../../assets/style/resets.less";
.e-tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  .md-tab-bar{
    padding-left: 0;
    padding-right: 0;
    background-color: @e-bg-tab-color;
    .md-tab-bar-item{
      min-height: .9rem;
        .custom-item{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        height:100%;
        flex:1;
        .item-img{
          width: .46rem;
          height: .4rem;
        }
        .text{
            font-size:.2rem;
        }
      }
    }
    .md-tab-bar-item.is-active{
      color: #d69a62;
    }
  }
}
  
  
</style>

