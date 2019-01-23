<template>
    <div class="sticky-wrapper">
        <div class="sticky" ref="sticky">
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
            let domTop = this.offsetTop(this.$refs.sticky)
            window.addEventListener("scroll", ()=>{
                if(window.scrollY > domTop){
                    this.$refs.sticky.classList.add("fixed")
                } else {
                    this.$refs.sticky.classList.remove("fixed")
                }
            })
        },
        methods:{
            offsetTop(dom){
                let xx = dom.getBoundingClientRect()

                return xx.top + window.scrollY
            }
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
