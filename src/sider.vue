<template>
    <transition name="slide">
        <div class="sider" :class="siderClass">
            <slot></slot>
            <button class="close" @click="closeSider">close</button>
        </div>
    </transition>

</template>

<script>
    export default {
        name: "WheelSider",
        data(){
            return {
                siderClass:{
                    hideSider: false,
                }
            }
        },
        methods:{
            closeSider(){
                this.siderClass.hideSider = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sider{
        background: #3ba0e9;
        position: relative;
        .close{
            position: absolute;
            right:0;
        }
        &.hideSider{
            display: none;
        }
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 5s;
    }
    .slide-enter, .slide-leave-to{
        margin-left: -150px
    }
</style>
