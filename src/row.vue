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
            }
        },
        computed:{
          rowStyle: function(){
              return {
                  marginLeft: (-parseInt(this.gutter / 2)+'px'),
                  marginRight: (-parseInt(this.gutter / 2)+'px'),
              }
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
