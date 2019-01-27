<template>
    <div class="popover">
        <div @click="tr">
            <slot></slot>
        </div>
        <div class="popover-content" :class="classes" v-if="visible" ref="contentWrapper">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    /*
    * 1。 经验bug： 组件上级元素有overflow：hidden，popover content展示不了 => 解决方法： content 放到docuemnt.body，通过css来定位
    * 2。 经验bug： 如果出现滚动条，popover content 内容位置出错
    *
    * */
    export default {
        data(){
            return {
                visible: true
            }
        },
        props:{
            position:{
                type: String,
                default: "bottom"
            }
        },
        computed:{
            classes(){
                return this.position
            }
        },
        mounted() {
            document.body.appendChild(this.$refs.contentWrapper)
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/var";
    .popover{
        &-content{
            display: inline-flex;
            box-shadow: $box-shadow;
            min-width:150px;
            border-radius: 4px;
            padding: 5px 16px;
            position: relative;
            margin-top: 10px;
        }
        &-content::before{
            content: '';
            display: block;
            border-top: 7px solid transparent;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 7px solid rgba(0, 0, 0, 0.15);
            position: absolute;
        }
        &-content::after{
            content: '';
            display: block;
            border-top: 7px solid transparent;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            border-bottom: 7px solid white;
            position: absolute;
        }
    }
</style>
