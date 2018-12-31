<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
    /*
    * 1. 知识点
    *   - 父组件传递子组件数据 1传递数据
    *
    * */
    export default {
        props: {
            gutter: {
                type: String,
                default: "0px",
            },
            align: {
                type: String,
                validator: function (alignString) {
                    if(["left", "right", "center"].indexOf(alignString) > -1){
                        return true
                    } else {
                        console.error("align 在left , right, center选择")
                        return false
                    }
                }
            }
        },
        computed:{
            rowStyle(){
                let { gutter } = this
                gutter = parseInt(gutter)
                return {
                    marginLeft: -(gutter / 2)+'px',
                    marginRight: -(gutter / 2)+'px',
                }
            },
        },
        mounted(){
            // 1传递数据1 父组件传递数据给子组件
            this.$children.forEach((vm)=>{
                vm.gutter = this.gutter
                vm.align = this.align
            })
        }
    }
</script>

<style lang="scss" scoped>
    .row{
        display: flex;
    }
</style>
