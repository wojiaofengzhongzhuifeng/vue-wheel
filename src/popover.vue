<template>
    <div class="popover" ref="popover">
        <div ref="toggleWrapper">
            <slot></slot>
        </div>
        <!--4报错-->
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
    * 4。 改成 v-if 会报错， 怎么解决？？？ 4报错
    * 5。 好习惯： addeventlistener之后，需要removeeventlistener，需要思考时机
    * 6。 问题： onClickDocument 函数需要参数 e ，但是我并没有传
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
            this.$refs.toggleWrapper.addEventListener('click', this.onClickToggle)
        },
        beforeDestroy(){
            this.$refs.toggleWrapper.removeEventListener('click', this.onClickToggle)
        },
        methods:{
            onClickToggle(){
                if(this.visible){
                    this.hideContent()
                } else {
                    this.showContent()
                }
            },
            onClickDocument(e){
                if(this.$refs.toggleWrapper === e.target || this.$refs.toggleWrapper.contains(e.target)){ return }
                if(this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target)){return }
                this.hideContent()
            },
            hideContent(){
                this.visible = false
                document.body.removeEventListener("click", this.onClickDocument)

            },
            showContent(){
                this.visible = true

                this.positionContent()

                document.body.addEventListener("click", this.onClickDocument)

            },
            positionContent(){
                document.body.appendChild(this.$refs.contentWrapper)
                const {toggleWrapper,contentWrapper} = this.$refs
                const {top, left,height} = toggleWrapper.getBoundingClientRect()
                contentWrapper.style.top = top + height + "px"
                contentWrapper.style.left = left + "px"
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/var";
    .popover{
        display: inline-flex;
        &-content{
            z-index: 1;
            background: white;
            display: inline-flex;
            box-shadow: $box-shadow;
            min-width:150px;
            border-radius: 4px;
            padding: 5px 16px;
            position: absolute;
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
        &-content.bottom::before{
            top: -13px;
            left: 23px;
        }
        &-content.bottom::after{
            top: -13px;
            left: 23px;
        }
    }
</style>
