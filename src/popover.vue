<template>
    <div class="popover" ref="popover">
        <div ref="toggleWrapper">
            <slot></slot>
        </div>
        <div class="popover-content" :class="classes" v-show="visible" ref="contentWrapper">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    /*
    * 1。 经验bug： 组件上级元素有overflow：hidden，popover content展示不了 => 解决方法： content 放到docuemnt.body，通过css来定位
    * 2。 经验bug： 如果出现滚动条，popover content 内容位置出错
    * 3。 给 popover 添加监听click事件，为什么要这样？ 3监听
    * */
    export default {
        data(){
            return {
                visible: false
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
            // 3监听： 为什么这样监听，为什么监听 popover 不是 toggleWrapper？？
            this.$refs.toggleWrapper.addEventListener('click', ()=>{
                if(this.visible){
                    this.hideContent()
                } else {
                    this.showContent()
                }
            })

        },
        methods:{
            hideContent(){
                this.visible = false
            },
            showContent(){
                this.visible = true
            }
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
