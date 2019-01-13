<template>
    <div class="w-nav-item" :class="activeClass" @click="onClickItem">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WheelNavItem",

        //5依赖注入2
        inject:["root"],

        created(){
            // 6区别2: 如果6区别1是 v-if =》 执行组件的created钩子函数
            // console.log("create");
            //5依赖注入3: 恰动的时候执行父组件函数
            this.root.addItem(this)
        },
        destroyed(){
            // 6区别2: 如果6区别1是 v-if =》 执行组件的destroyed钩子函数
            // console.log("destroyed");
        },
        props:{
            name:{
                type: String,
                required: true,
            }
        },
        data(){
            return {
                // 1父数据1: 在子组件的data中
                propSelected: false
            }
        },
        computed:{
            activeClass(){
                if(this.propSelected){
                    return "active"
                } else{
                    return ""
                }
            }
        },
        methods:{
            onClickItem(){
                this.root.namePath = []
                // 8子组件2： 子组件调用父组件的方法
                if(this.$parent.$options.name === "WheelNav"){
                    this.root.namePath = [this.name]
                } else {
                    this.$parent.updateNamePath()
                    this.root.namePath.push(this.name)
                }
                this.$emit("add:selected" ,this.name)

            }
        }
    }
</script>

<style lang="scss">
    @import "../../styles/var";
    .w-nav-item {
        padding: 10px 20px;
        position: relative;
        &.active {
            color: $font-color-active;
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 2px solid $font-color-active;
                width: 100%;
            }
        }
    }
    .w-sub-nav .w-nav-item {
        &.active {
            color: $font-color-active;
            background: $grey;
            &::after {
                display: none;
            }
        }
    }
</style>
