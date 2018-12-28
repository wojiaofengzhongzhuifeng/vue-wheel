<template>
        <div class="popover" @click="onClickPopover" v-if="trigger === 'click'">
            <div class="button" ref="button">
                <slot></slot>
            </div>
            <div class="popover-wrapper" v-if="clickPopover" ref="content" :class="classes" @mouseleave="ddd">
                <div class="title">
                    {{title}}
                </div>
                <div class="line">
                </div>
                <slot name="content"></slot>
            </div>
        </div>

        <div class="popover" @mouseenter="showPopover"  @mouseleave="closePopover" v-else-if="trigger === 'hover'">
            <div class="button" ref="button">
                <slot></slot>
            </div>
            <div class="popover-wrapper" v-if="clickPopover" ref="content" :class="classes">
                <div class="title">
                    {{title}}
                </div>
                <div class="line">
                </div>
                <slot name="content"></slot>
            </div>
        </div>
</template>

<script>
    /*
    * 需求
    * 1. 点击之后弹出对话框。
    *
    * */
    /*
    * 知识点
    * 1. 点击popover以外的地方需要隐藏popover遇到的bug
    *   - 使用nextTick设置监听函数
    *   - 隐藏popover之后应该删除监听器
    * */
    export default {
        props:{
            title:{
                type: String,
            },
            content: {
                type: String,
            },
            trigger: {
                type: String,
                validator(value){
                    return ["click", "hover"].indexOf(value) >= 0
                },
                default: "click"
            },
            position:{
                type: String,
                validator(value){
                    return ["top", "bottom", "left", "right"].indexOf(value) >= 0
                },
                default: "top"
            },
        },
        data(){
            return {
                clickPopover: false
            }
        },
        computed:{
          classes(){
              return `position-${this.position}`
          }
        },
        methods:{
            ddd(){
                console.log("mouse移出去了");
            },
            onClickPopover(e){
                // 判断点击的是按钮
                if(this.$refs.button.contains(e.target)){
                    if(this.clickPopover){
                        this.closePopover()
                    } else {
                        this.showPopover()
                    }
                }
            },
            closePopover(){
                // 当trigger设为hover时，如果鼠标移到content上，content不隐藏
                // hover的时候，什么东西决定隐藏 content？
                // 1. 当鼠标移出button，可能显示，可能隐藏
                // 2. 当鼠标移入 content，一定显示 content。
                // 3. 当鼠标移出 content， 一定隐藏 content。
                this.clickPopover = false;
                document.body.removeEventListener("click", this.bindCloseFunToBody)
                if(this.trigger === "hover"){
                    setTimeout(()=>{
                        this.clickPopover = false;
                        document.body.removeEventListener("click", this.bindCloseFunToBody)
                    }, 2000)
                }
            },
            showPopover(){
                console.log("展示popover");
                this.clickPopover = true;
                this.$nextTick(()=>{
                    this.createPopover();
                    document.body.addEventListener("click", this.bindCloseFunToBody)
                },0)
            },
            bindCloseFunToBody(e) {
                if(!this.$refs.content.contains(e.target)){
                    this.closePopover()
                }
            },
            createPopover(){
                document.body.appendChild(this.$refs.content);
                this.$refs.content.querySelector(".popover-wrapper")
                const {top, left, width} = this.$refs.button.getBoundingClientRect();
                const activePosition = {
                    top:{
                        top:`${top + window.scrollY}px`,
                        left:`${left + window.scrollX}px`,
                    },
                    bottom:{
                        top:`${top + window.scrollY}px`,
                        left:`${left + window.scrollX}px`,
                    },
                    left:{
                        top:`${top + window.scrollY}px`,
                        left:`${left + window.scrollX}px`,
                    },
                    right:{
                        top:`${top + window.scrollY}px`,
                        left:`${left + width + window.scrollX}px`,
                    },
                };
                this.$refs.content.style.top = activePosition[this.position].top;
                this.$refs.content.style.left = activePosition[this.position].left;

            }
        },
    }
</script>

<style lang="scss" scoped>
    $border-radius: 2px;
    .popover{
        display: inline-block;
        position: relative;
    }
    .popover-wrapper{
        border-radius: $border-radius;
        display: inline-block;
        padding: 5px;
        border: 1px solid grey;
        position: absolute;
        box-shadow: 0 0 1px grey;
        max-width: 20em;
        word-break: break-all;
        .line{
            width: 100%;
            border: 1px solid grey;
            margin-bottom: 10px;
        }
        &::before, &::after{
            content: "";
            display: inline-block;
            border: 5px solid transparent;
        }
        &.position-top{
            transform: translateY(-100%);
            margin-top: -10px;
            &::before{
                border-top-color: grey;
                position: absolute;
                bottom: -11px;
                left: 10px;
            }
            &::after{
                border-top-color: white;
                position: absolute;
                bottom: -9px;
                left: 10px;
            }
        }
        &.position-bottom{
            margin-top: 40px;
            &::before{
                border-bottom-color: grey;
                position: absolute;
                top: -11px;
                left: 10px;
            }
            &::after{
                border-bottom-color: white;
                position: absolute;
                top: -9px;
                left: 10px;
            }
        }
        &.position-right{
            margin-left: 5px;
            &::before{
                border-right-color: grey;
                position: absolute;
                top: 4px;
                left: -11px;
            }
            &::after{
                border-right-color: white;
                position: absolute;
                top: 4px;
                left: -9px;
            }
        }
        &.position-left{
            transform: translateX(-100%);
            margin-left:-10px;
            &::before{
                border-left-color: grey;
                position: absolute;
                top: 4px;
                right: -11px;
            }
            &::after{
                border-left-color: white;
                position: absolute;
                top: 4px;
                right: -9px;
            }
        }



    }
</style>
