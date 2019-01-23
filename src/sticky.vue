<template>
    <div class="sticky-wrapper" ref="stickyWrapper">
        <div class="sticky" ref="sticky" >
            <slot></slot>
        </div>
    </div>
</template>

<script>
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
            let {height, top} = this.$refs.sticky.getBoundingClientRect()
            let offsetTop = top + window.scrollY

            window.addEventListener("scroll", ()=>{
                if(window.scrollY > offsetTop){
                    this.$refs.sticky.classList.add("fixed")
                    this.$refs.stickyWrapper.style.height = height + "px"
                } else {
                    this.$refs.sticky.classList.remove("fixed")
                }
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
