<template>
    <div class="sticky-wrapper" ref="stickyWrapper">
        <div class="sticky" ref="sticky" >
            <slot></slot>
        </div>
    </div>
</template>

<script>
    /*
    *1. 使用 getBoundingClientRect 获取img出错，因为img是异步加载的，会导致height 1height
    * */
    export default {
        props:{
            top:{
                type: Number
            },
            bottom:{
                type: Number
            }
        },
        mounted() {
            this.$nextTick(()=>{
                let {top} = this.$refs.sticky.getBoundingClientRect()
                // 1height1： 因为img是远程加载， 所以此时获取的height是错误的
                // let {top} = this.$refs.sticky.getBoundingClientRect()
                let offsetTop = top + window.scrollY

                window.addEventListener("scroll", ()=>{
                    if(window.scrollY > offsetTop){
                        // 1height2: 获取img的时机换到： 当sticky组件变成fixed之前，去获取img的height
                        let {height} = this.$refs.sticky.getBoundingClientRect()
                        this.$refs.sticky.classList.add("fixed")
                        this.$refs.stickyWrapper.style.height = height + "px"
                    } else {
                        this.$refs.sticky.classList.remove("fixed")
                    }
                })
            })

        },
        methods:{
        },
    }
</script>

<style lang="scss" scoped>
    @import "../styles/var";
    .sticky{
        &.fixed{
            position: fixed;
            top: 0;
        }
    }
</style>
