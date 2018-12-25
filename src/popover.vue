<template>
    <div class="popover" @click="xx">
        <div class="button" ref="button">
            <slot></slot>
        </div>
        <div class="popover-wrapper" v-if="showPopover" ref="content">
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
            }
        },
        data(){
            return {
                showPopover: false
            }
        },
        methods:{
            xx(e){
                if(e.target.classList.contains("button") || e.target.classList.contains("slot")){
                    this.showPopover = !this.showPopover;
                    if(this.showPopover){
                        setTimeout(()=>{
                            document.body.appendChild(this.$refs.content);
                            const {top, left, height, width} = this.$refs.button.getBoundingClientRect();
                            this.$refs.content.style.left = `${left}px`;
                            this.$refs.content.style.top = `${top}px`;
                        },0)
                    }


                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .popover{
        display: inline-block;
        position: relative;
    }
    .popover-wrapper{
        display: inline-block;
        padding: 5px;
        border: 1px solid grey;
        position: absolute;
        transform: translateY(-100%);
        .line{
            width: 100%;
            border: 1px solid grey;
            margin-bottom: 10px;
        }
    }
</style>
