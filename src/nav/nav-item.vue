<template>
    <div class="w-nav-item" :class="activeClass" @click.stop="onClickItem">
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
            console.log("create");
            //5依赖注入3: 恰动的时候执行父组件函数
            this.root.addItem(this)
        },
        destroyed(){
            // 6区别2: 如果6区别1是 v-if =》 执行组件的destroyed钩子函数
            console.log("destroyed");
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
                this.$emit("add:selected" ,this.name)
            }
        }
    }
</script>

<style lang="scss">
    .w-nav-item{
        padding: 10px;
        &.active{
            background: red;
        }
    }
</style>
