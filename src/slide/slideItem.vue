<template>
    <transition name="slide">
        <div class="slide-wrapper" v-if="visible" :class="{reverse: reverse}" ref="slideItem">
            <slot></slot>
        </div>
    </transition>

</template>

<script>
    export default {
        props:{
            name:{
                type: String,
            }
        },
        computed:{
            visible(){
                return this.name === this.select;
            }
        },
        data(){
            return {
                select: undefined,
                reverse: undefined,
            }
        },
        updated() {
        }
    }
</script>

<style lang="scss" scoped>
    @import "../var";
    .slide-wrapper{
        .slide-wrapper.reverse{
        }
    }

    .slide-leave-active {
        position: absolute;
        left: 0; top: 0;
        width: 100%;
        height: 100%;
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 0.3s;
    }
    .slide-enter {
        transform: translateX(100%);
    }
    .slide-leave-to {
        transform: translateX(-100%) scale(0.5);
    }
    .slide-enter.reverse {
        transform: translateX(-100%);
    }

    .slide-leave-to.reverse {
        transform: translateX(100%) scale(0.5);
    }
</style>
