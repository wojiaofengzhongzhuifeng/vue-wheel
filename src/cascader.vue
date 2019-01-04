<template>
    <div class="cascader-wrapper">
        <div class="popover" @click="visibleCascader = !visibleCascader">
            {{showCascader}}

        </div>
        <cascader-item :items="source" v-if="visibleCascader" :height="height" :selected="selected" @update:selected="onUpdateSelected"></cascader-item>

    </div>
</template>

<script>
    /*
    * 1. 什么时候用递归？ 不知道需要循环几次
    * 2. 给递归的组件添加style  2添加
    * 3. vue 数组进行修改需要注意到的地方 3地方
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
            },
            selected:{
                type: Array,
                default: [],
            }
        },
        methods: {
            onUpdateSelected (newSelected) {
                this.$emit('update:selected', newSelected)
            }
        },
        computed:{
            showCascader(){
                let text = ""
                this&& this.selected&& this.selected.forEach((obj)=>{
                    text +=  obj.name + "/"
                })
                return text.slice(0, text.length- 1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .cascader-wrapper{
        position: relative;
        .popover{
            max-width:300px;
            height:32px;
            border:1px solid red;
            line-height: $line-height;
        }
        .selectArea{
            display: flex;
        }

    }
</style>
