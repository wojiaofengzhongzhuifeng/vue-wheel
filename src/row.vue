<template>
    <div class="row" :style="{marginLeft: (-parseInt(gutter / 2)+'px'),marginRight: (-parseInt(gutter / 2)+'px')}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            gutter: {
                type: String | Number,
                default: "0",
            }
        },
        mounted(){
            this.$children.forEach((vm)=>{
                vm.gutter = this.gutter
            })
        }
    }
</script>

<style lang="scss" scoped>
    .row{
        display: flex;
        border:1px solid red;
    }
</style>
