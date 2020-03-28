<template>
  <div class="nav-main">
      <div class="nav-bar" :class="{'navbar-fixed':isFixed}">
        <div class="nav-header" :style="{color:color}">
            <div class="nav-header-btns" @click="onClickLeft">
                <div v-if="leftIcon.length">
                    <md-icon :name="leftIcon" :color="color"></md-icon>
                </div>
                <div v-if="leftText.length" class="nav-btn-text" :class="{'nav-btn-icon-left':!leftIcon.length}">{{leftText}}</div>
                <slot name="left"></slot>
            </div>
            <div class="nav-container">
                <div v-if="title.length" class="nav-container-title">{{title}}</div>
                <!-- 标题插槽 -->
                <slot></slot>
            </div>
            <div></div>
        </div>
    </div>
  </div>
</template>

<script>
import {Icon} from "mand-mobile"
export default {
    name: 'tab-bar',
    components: {
        [Icon.name]: Icon,
    },
    props: {
        /**
         * 是否固定在顶部
         */
        fixed: {
            type: [Boolean, String],
            default: false
        },
        /**
         * 标题文字
         */
        title: {
            type: String,
            default: ''
        },
        /**
         * 左侧按钮文本
         */
        leftText: {
            type: String,
            default: ''
        },
        /**
         * 左侧按钮图标
         */
        leftIcon: {
            type: String,
            default: ''
        },
        /**
         * 按钮图标和文字颜色
         */
        color: {
            type: String,
            default: '#fff'
        },
    },
    computed: {
        isFixed() {
            return String(this.fixed) === 'true'
        },
    },
    methods:{
        onClickLeft() {
            this.$emit('clickLeft')
        },
    }
}

</script>

<style lang="less" scoped>
.nav-main{
    padding-bottom: .74rem;
}
    .nav-bar{
        display: block;
        position: relative;
        width: 100%;
        background-color: #000;
        overflow: hidden;
        div{
		    line-height:.74rem;
	    }
        .nav-header {
            display: flex;
            flex-direction: row;
            width: 100%;
            height:.74rem;
            line-height:.74rem;
            font-size: .26rem;
            .nav-header-btns{
                display:inline-flex;
                flex-wrap:nowrap;
                flex-shrink:0;
                width: 1.2rem;
                padding:0 .12rem;
                .md-icon{
                    font-size: .34rem;
                }
            }
            .nav-container{
                width:100%;
                margin:0 .1rem;
            }
            .nav-container-title{
                font-size:.3rem;
                text-align:center;
                padding-right: .6rem;
            }
        }
    }
    .navbar-fixed {
        position: fixed;
        z-index: 998;
    }
</style>

