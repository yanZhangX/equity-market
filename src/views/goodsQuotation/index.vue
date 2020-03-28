<template>
  <div class="goodsQuotation">
    <NavBar title="商品行情" fixed/>
    <table class="goods-table" width="100%">
      <tr>
        <th>商品名称</th>
        <th>现价</th>
        <th>最低</th>
        <th>最高</th>
      </tr>
      <tr v-for="(item,index) in goods_list" :key="index" :style="{color:item.is_limitup?'#f72838':'#1cbe51'}" @click="toKLine">
        <td class="goods_name">{{item.name}}</td>
        <td>
          <div class="current"  :style="{backgroundColor:item.is_limitup?'#f72838':'#1cbe51'}">{{item.current_price}}</div>
        </td>
        <td>{{item.minimum}}</td>
        <td>{{item.highest}}</td>
      </tr>
  </table>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/index"
export default {
  name: 'goodsQuotation',
  components:{NavBar},
  data(){
    return{
      goods_list:[
      {name:'比特币',current_price:6282.26,minimum:23.26,highest:61212.26,is_limitup:true},
      {name:'莱特币',current_price:88.26,minimum:11.1,highest:100.2,is_limitup:false},
      {name:'小黄金',current_price:6282.26,minimum:6282.26,highest:6282.26,is_limitup:true},
      {name:'英镑/美元',current_price:6282.26,minimum:6282.26,highest:6282.26,is_limitup:false},
      {name:'欧元/英镑',current_price:6282.26,minimum:6282.26,highest:6282.26,is_limitup:true},
      ]
    }
  },
  methods:{
    toKLine(){
      this.$router.push({path:"/kLine"})
    }
  }
}
</script>
<style lang="less" scoped>
  .goodsQuotation{
    min-height: 100%;
    font-size: .3rem;
    .goods-table{
      background-color: #11141d;
      color: #fff;
      font-size: .3em;
      tr{
        height: .6rem;
        line-height: .6rem;
        border-bottom: .01rem solid rgba(191,191,191,.2);
        &:nth-of-type(1){
          background-color: #262834;
        }
        th{
          font-size: .24rem;
          color: #535560;
        }
        td{
          font-size: .24rem;
          padding: .1rem 0;
        }
        .goods_name{
          font-size: .28rem;
          color:#fff;
        }
        .current{
          height: .56rem;
          margin: 0 auto;
          border-radius: .1rem;
          color: #fff;
          font-size: .24rem;
        }
      }
    }
  }
</style>
