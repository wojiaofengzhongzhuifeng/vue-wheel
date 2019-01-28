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
    * 7。 问题：7next
    * 8.  优化： 使用对象来代替重复的if 8优化
    * 9.  需求： 使用防抖，可以让用户的鼠标达到content 9防抖
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
            },
            trigger:{
                type: String,
                default: "click",
            }
        },
        computed:{
            classes(){
                return this.position
            }
        },
        mounted() {
            if(this.trigger === "click"){
                // 3监听： 为什么这样监听，为什么监听 popover 不是 toggleWrapper？？
                this.$refs.toggleWrapper.addEventListener('click', this.onClickToggle)
            } else {
                this.$refs.toggleWrapper.addEventListener('mouseenter', this.onEnterToggle)
                this.$refs.toggleWrapper.addEventListener('mouseleave', this.onLeaveToggle)

                this.$refs.contentWrapper.addEventListener('mouseenter', this.onEnterContent)
                this.$refs.contentWrapper.addEventListener('mouseleave', this.onLeaveContent)
            }
        },
        beforeDestroy(){
            if(this.trigger === "click"){
                this.$refs.toggleWrapper.removeEventListener('click', this.onClickToggle)
            } else {
                this.$refs.toggleWrapper.removeEventListener('mouseenter', this.showContent)
                this.$refs.toggleWrapper.removeEventListener('mouseleave', this.hideContent)

                this.$refs.contentWrapper.removeEventListener('mouseenter', this.onEnterContent)
                this.$refs.contentWrapper.removeEventListener('mouseleave', this.onLeaveContent)
            }
        },
        methods:{
            onEnterToggle(){
                this.showContent()
            },
            // 9防抖1： 当进入 button 时，设置100ms后隐藏content
            onLeaveToggle(){
                this.timeId = setTimeout(()=>{
                    this.hideContent()
                }, 100)
            },
            // 9防抖2： 如果在100ms内进入 content，删除计时器（也就是不执行隐藏content）
            // 9防抖3： 如果在100ms外还没有进入 content（将鼠标移除button且不进入content，执行隐藏content）
            onEnterContent(){
                clearTimeout(this.timeId)
            },
            onLeaveContent(){
                this.hideContent()
            },

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
                // 7next： 为什么这里要next？？ 如果不next，
                // const {width:contentWidth} = contentWrapper.getBoundingClientRect()
                // width 是 0
                this.$nextTick(()=>{
                    this.positionContent()
                    document.body.addEventListener("click", this.onClickDocument)
                })

            },
            positionContent(){
                document.body.appendChild(this.$refs.contentWrapper)
                const {toggleWrapper,contentWrapper} = this.$refs
                const {top, left,height, width} = toggleWrapper.getBoundingClientRect()
                const {width:contentWidth} = contentWrapper.getBoundingClientRect()
                // 8优化前
                /*
                if(contentWrapper.classList.contains("top")){
                    contentWrapper.style.top = top - height +"px"
                    contentWrapper.style.left = left + "px"
                } else if (contentWrapper.classList.contains("bottom")){
                    contentWrapper.style.top = top + height +"px"
                    contentWrapper.style.left = left + "px"
                } else if (contentWrapper.classList.contains("right")){
                    contentWrapper.style.top = top + "px"
                    contentWrapper.style.left = left + width + "px"
                } else if (contentWrapper.classList.contains("left")){
                    contentWrapper.style.top = top + "px"
                    contentWrapper.style.left = left  - contentWidth + "px"
                }
                */

                // 8优化后
                const positionObj = {
                    top: {
                        top: top - height + window.scrollY +"px",
                        left: left + window.scrollX +"px"
                    },
                    bottom: {
                        top: top + height + window.scrollY +"px",
                        left: left +  window.scrollX + "px"
                    },
                    right: {
                        top: top + window.scrollY + "px",
                        left: left +  window.scrollX + width + "px"
                    },
                    left: {
                        top: top + window.scrollY + "px",
                        left: left  - contentWidth + window.scrollX + "px"
                    },
                }
                contentWrapper.style.top = positionObj[this.position].top
                contentWrapper.style.left = positionObj[this.position].left
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
            &::before{
                content: '';
                display: block;
                border-top: 7px solid transparent;
                border-left: 7px solid transparent;
                border-right: 7px solid transparent;
                border-bottom: 7px solid rgba(0, 0, 0, 0.15);
                position: absolute;
            }
            &::after{
                content: '';
                display: block;
                border-top: 7px solid transparent;
                border-left: 7px solid transparent;
                border-right: 7px solid transparent;
                border-bottom: 7px solid white;
                position: absolute;
            }
            &.bottom{
                margin-top: 10px;
            }
            &.bottom::after{
                bottom: 100%
            }
            &.bottom::before{
                bottom: 100%
            }
            &.top{
                margin-top: -10px;
            }
            &.top::after{
                border-top: 7px solid white;
                border-bottom: 7px solid transparent;
                top: 100%;
            }
            &.top::before{
                border-top: 7px solid rgba(0, 0, 0, 0.15);
                border-bottom: 7px solid transparent;
                top: 100%;
            }
            &.right{
                margin-left: 10px;
            }
            &.right::after{
                border-right: 7px solid white;
                border-bottom: 7px solid transparent;
                right:100%
            }
            &.right::before{
                border-right: 7px solid rgba(0, 0, 0, 0.15);
                border-bottom: 7px solid transparent;
                right:100%;
            }
            &.left{
                margin-left: -10px;
            }
            &.left::after{
                border-left: 7px solid white;
                border-bottom: 7px solid transparent;
                left:100%
            }
            &.left::before{
                border-left: 7px solid rgba(0, 0, 0, 0.15);
                border-bottom: 7px solid transparent;
                left:100%;
            }
        }
    }
</style>
