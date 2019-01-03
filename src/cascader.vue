<template>
    <div class="cascader-wrapper">
        <div class="popover" @click="visibleCascader = !visibleCascader"></div>
        <cascader-item :items="source" v-if="visibleCascader" :height="height"></cascader-item>

    </div>
</template>

<script>
    /*
    * 1. 什么时候用递归？ 不知道需要循环几次
    * 2. 给递归的组件添加style  2添加
    * */
    import CascaderItem from "./cascader-item"
    export default {
        components:{
            "cascader-item":CascaderItem,
        },
        data(){
            return {
                visibleCascader: false
            }
        },
        props:{
            source: {
                type: Array,
            },
            height:{
                type: String,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cascader-wrapper{
        position: relative;
        .popover{
            width:100px;
            height:32px;
            border:1px solid red;
        }
        .selectArea{
            display: flex;
        }

    }
</style>
