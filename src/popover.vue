<template>
    <div class="popover" @click.stop="sss" >
        <slot></slot>
        <div class="popover-wrapper" v-if="showPopover" @click.stop>
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
            sss(){
                if(this.trigger === "click"){
                    this.showPopover  = !this.showPopover
                    if(this.showPopover){
                        this.$nextTick(()=>{
                            // 点击popover以外的地方应该隐藏popover

                            let xx = ()=>{
                                console.log("你点击了popover以外的地方");
                                this.showPopover = false;
                                document.removeEventListener("click", xx)

                            }

                            document.addEventListener("click", xx)
                        })
                    }
                }
            },

        }
    }
</script>

<style lang="scss" scoped>
    .popover{
        display: inline-block;
        position: relative;
        border:1px solid red;
        .popover-wrapper{
            display: inline-block;
            padding: 5px;
            border: 1px solid grey;
            position: absolute;
        }
        .line{
            width: 100%;
            border: 1px solid grey;
            margin-bottom: 10px;
        }
    }
</style>
