<template>
  <div class="goodsQuotation">
    <NavBar title="交易记录" fixed/>
    <div>
        <md-tab-bar
        v-model="current"
        :items="items"
        @change="onTabChange"
        ></md-tab-bar>
        <md-swiper
        ref="swiper"
        :autoplay="0"
        :is-prevent="false"
        :is-loop="false"
        :has-dots="false"
        @before-change="onSwiperChange"
        >
        <md-swiper-item class="swiper-wrap">
            <div class="record-item" v-for="(item,index) in history_list" :key="index">
                <div class="right-wrap" :style="{color:item.pre-item.now>0?'#1cbe51':'#f72838'}">
                    <div class="top-line">
                        <span>比特币</span>
                        <div class="status">
                            <img v-if="item.pre-item.now>0" src="@/assets/icons/mixin/icon_up.jpg" alt="">
                            <img v-else src="@/assets/icons/mixin/icon_down.jpg" alt="">
                            <span>买涨（￥100）</span>
                        </div>
                    </div>
                    <div class="mid-line">
                        <span class="pre-price">{{item.pre}}-</span><span>{{item.now}}</span>
                    </div>
                    <div class="bottom-line">{{item.date_time}}</div>
                </div>
                <div class="left-wrap">
                    <p class="detailed-num" :style="{color:item.pre-item.now>0?'#1cbe51':'#f72838'}">{{item.detailed}}</p>
                    <p>{{item.date_time}}</p>
                </div>
            </div>
        </md-swiper-item>
        <md-swiper-item class="swiper-wrap">
            <div class="record-item" v-for="(item,index) in history_list" :key="index">
                <div class="right-wrap" :style="{color:item.pre-item.now>0?'#1cbe51':'#f72838'}">
                    <div class="top-line">
                        <span>比特币</span>
                        <div class="status">
                            <img v-if="item.pre-item.now>0" src="@/assets/icons/mixin/icon_up.jpg" alt="">
                            <img v-else src="@/assets/icons/mixin/icon_down.jpg" alt="">
                            <span>买涨（￥100）</span>
                        </div>
                    </div>
                    <div class="mid-line">
                        <span class="pre-price">{{item.pre}}-</span><span>{{item.now}}</span>
                    </div>
                    <div class="bottom-line">{{item.date_time}}</div>
                </div>
                <div class="left-wrap">
                    <p class="detailed-num" :style="{color:item.pre-item.now>0?'#1cbe51':'#f72838'}">{{item.detailed}}</p>
                    <p>{{item.date_time}}</p>
                </div>
            </div>
        </md-swiper-item>
        </md-swiper>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/index"
import {TabBar, Swiper, SwiperItem} from 'mand-mobile'
export default {
  name: 'transRecord',
  components:{
        NavBar,
        [TabBar.name]: TabBar,
        [Swiper.name]: Swiper,
        [SwiperItem.name]: SwiperItem,
    },
  data(){
    return{
        current: 0,
        items: [{name: 0, label: '持仓明细'}, {name: 1, label: '历史明细'}],
        history_list:[
            {name:'比特币',is_limitup:true,pre:5449.2,now:5442.2,date_time:'2020-03-28 3:47:00',detailed:1880},
            {name:'比特币',is_limitup:true,pre:5449.2,now:1442.2,date_time:'2020-03-28 3:47:00',detailed:1880},
            {name:'比特币',is_limitup:true,pre:5449.2,now:5442.2,date_time:'2020-03-28 3:47:00',detailed:1880},
            {name:'比特币',is_limitup:true,pre:5449.2,now:6442.2,date_time:'2020-03-28 3:47:00',detailed:1880},
            {name:'比特币',is_limitup:true,pre:5449.2,now:7442.2,date_time:'2020-03-28 3:47:00',detailed:1880},
            {name:'比特币',is_limitup:true,pre:5449.2,now:1442.2,date_time:'2020-03-28 3:47:00',detailed:1880},
            {name:'比特币',is_limitup:true,pre:5449.2,now:5442.2,date_time:'2020-03-28 3:47:00',detailed:1880},
        ]
    }
  },
  created(){
    this.$store.commit("setTabIndex",1)
  },
   methods: {
    onSwiperChange(from, to) {
      this.current = to
    },
    onTabChange(item, index) {
      this.$refs.swiper.goto(index)
    },
  },
}
</script>
<style lang="less" scoped>
    @base-bg-color:#282828;
    .goodsQuotation{
        font-size: .3rem;
        min-height: 100%;
        background-color: @base-bg-color;
        padding-bottom: .9rem;
        .md-tab-bar{
            position: sticky;
            top: .74rem;
            z-index: 10;
            background-color: @base-bg-color;
        }
        .swiper-wrap{
            margin-top: .2rem;
            .record-item{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: .2rem .15rem;
                box-shadow: inset 0 4px 0 rgba( 0, 0, 0, 0.2),
                inset 0 -4px 0 rgba( 0, 0, 0, 0.2);
                color: #fff;
                .right-wrap{
                    .top-line{
                        display: flex;
                        align-items: flex-end;
                        span{
                            font-size: .36rem;
                        }
                        .status{
                            margin-left: 1rem;
                            img{
                                width: .25rem;
                                height: .25rem;
                                vertical-align: middle;
                            }
                            span{
                                font-size: .26rem;
                                margin-left: .1rem;
                            }
                        }
                    }
                    .mid-line{
                        .pre-price{
                            color: #fff;
                        }
                    }
                    .bottom-line{
                        font-size: .24rem;
                        color: #616161;
                    }
                }
                .left-wrap{
                    text-align: right;
                    .detailed-num{
                        font-size: .44rem;
                    }
                }
            }
        }
    }
</style>
<style lang="less">
.goodsQuotation{
    .md-tab-bar{
        padding-left: 0;
        padding-right: 0;
         box-shadow: inset 0 -1px 0 rgba( 0, 0, 0, 0.1), 
            inset 0 -4px 0 rgba( 0, 0, 0, 0.1);
        .md-tab-bar-item{
            &::after{
                content: '';
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                display: block;
                width: 4px;
                height: .5rem;
                background-color: #161616;
                z-index: 10;
                left: 0;
            }
            &.is-active{
                color: #d69a62;
            }
        }
        .md-tab-bar-ink{
            background-color: #d69a62;
        }
    }
}
</style>
