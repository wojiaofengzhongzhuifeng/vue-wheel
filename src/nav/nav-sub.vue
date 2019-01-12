<template>
    <div class="w-nav-sub">
        <!--4slot1: 定义-->
        <span  @click="visible = !visible">
            <slot name="title"></slot>
        </span>
        <!--6区别1 v-if 与 v-show 替换-->
        <div class="w-nav-sub-popover" v-show="visible">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WheelNavSub",
        data(){
            return {
                visible: false
            }
        },
    }
</script>

<style lang="scss">
    .w-nav-sub{
        position: relative;
        > span{
            // 7面积
            padding: 0 10px;
            display: inline-block;
            vertical-align: top;
        }
        &-popover{
            border: 1px solid ;
            position: absolute;
            top: 100%;
            left: 0px;
            white-space: nowrap;
        }
    }
</style>
