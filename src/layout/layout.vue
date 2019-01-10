<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        /*
        * 1. 如何根据数据来生成class
        * 2. vue name属性的使用
        *
        * */
        // name作用1: 打开开发者工具, 显示的是 wheelLayout
        // name作用2: 如果想知道layout组件用了什么组件, 通过 vm.$options.name 可以知道子组件的名字, 看sider
        name: "WheelLayout",
        data(){
            return {
                // layoutClass 的 key 作为className, 只要key对应的value是truely值即可
                layoutClass: {
                    hasSider: false,
                    rds: "fdsfdas"
                }
            }
        },
        mounted(){
            this.$children.forEach((vm)=>{
                if(vm.$options.name === "WheelSider"){
                    // 如果layout组件有sider组件, 给layout组件添加 hasSider className
                    // 如何给组件添加class, 这是一个例子
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .layout{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        &.hasSider {
            flex-direction: row;
        }
    }

</style>
