<template>
    <div class="el-switch">
        <div @click="toggle(index)" class="switch-item" v-for="(item,index) in direction" :key="index">
            <span :class="{'chkOn':switch_index==index}">{{item}}</span>
        </div>
    </div>
</template>

<script>
     export default {
        name: 'switchComponent',
        props: {
          value: {
            type: Boolean,
            default: true
          },
          text: {
            type: String,
            default: ''
          }
        },
        data () {
            return {
                switch_index: 0
            }
        },
        computed: {
            direction () {
                if (this.text) {
                    return this.text.split('|')
                } else {
                    return []
                }
            }
        },
        watch: {
          value (val) {
            this.isChecked = val
          },
          isChecked(val) {
            this.$emit('change', val);
          }
        },
        methods: {
          toggle(index) {
            this.switch_index = index
          }
        }
    } 
</script>

<style lang="less" scoped>
.el-switch{
    display: flex;
    align-items: center;
    flex-grow:0;
    flex-shrink:0;
    width: 2.1rem;
    height: .7rem;
    line-height: .7rem;
    border-radius: .2rem;
    background-color: #171719;
    overflow: hidden;
    .switch-item{
        flex: 0 0 50%;
        color: #fff;
        font-size: .3rem;
        text-align: center;
    }
    .chkOn{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: .2rem;
        background-color: #333237;
        color: #bea514;
    }
}
</style>