<template>
    <div class="w-nav-item" :class="activeClass" @click="onClickItem">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WheelNavItem",
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
