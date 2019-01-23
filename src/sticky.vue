<template>
    <div class="sticky-wrapper" :style="{height, width, left}">
        <div class="sticky" ref="sticky" >
            <slot></slot>
        </div>
    </div>
</template>

<script>
    /*
    *1. 使用 getBoundingClientRect 获取img出错，因为img是异步加载的，会导致height 1height
    *2. 数字初始值为undefined 2初始
    *3. 在mounted 添加副作用代码（如添加事件监听）， 应该在beforeDestroyed 时删除（移除事件监听） 3副作用
    * */
    export default {
        data(){
            return {
                // 2初始1
                height:undefined,
                width: undefined,
                left: undefined
            }
        },
        props:{
            top:{
                type: Number,
                default: 0
            },
        },
        mounted() {
            let {top} = this.$refs.sticky.getBoundingClientRect()
            // 1height1： 因为img是远程加载， 所以此时获取的height是错误的
            // let {top} = this.$refs.sticky.getBoundingClientRect()
            this.offsetTop = top + window.scrollY
            //3副作用2： 使用bind获取 onListenerWindowScroll 函数（但是不加上这段代码，this也没出问题呀？）
            this.onListenerWindowScroll = this._onListenerWindowScroll.bind(this)
            //3副作用3：添加
            window.addEventListener("scroll", this.onListenerWindowScroll)

        },
        beforeDestroy(){
            // this._onListenerWindowScroll()
            //3副作用4：移除
            window.removeEventListener("scroll", this.onListenerWindowScroll)

        },
        methods:{
            //3副作用1： 将原代码放到methods上， 函数用下划线开头
            _onListenerWindowScroll(){
                if(window.scrollY + this.top > this.offsetTop){
                    // 1height2: 获取img的时机换到： 当sticky组件变成fixed之前，去获取img的height
                    let {height, width, left} = this.$refs.sticky.getBoundingClientRect()
                    this.height = height + "px"
                    this.width = width + "px"
                    this.left = left + "px"

                    this.$refs.sticky.classList.add("fixed")
                    this.$refs.sticky.style.top = `${this.top}px`
                } else {
                    this.$refs.sticky.classList.remove("fixed")
                }
            },

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
