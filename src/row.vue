<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            gutter: {
                type: String | Number,
                default: "0",
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
                const { gutter } = this
                return {
                    marginLeft: (-parseInt(gutter / 2)+'px'),
                    marginRight: (-parseInt(gutter / 2)+'px'),
                }
            },
            alignStyle(){
                const {align} = this
                return align
            }
        },
        mounted(){
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
