<template>
    <div class="slide-wrapper" @mouseenter="pauseAutoPlay" @mouseleave="startAutoPlay">
        <div class="slide-wrapper-window">
            <slot></slot>
        </div>
        <div class="dots">
            <span class="dot" v-for="(name, index) in allItemName" @click="clickUpdateSelect(name)" :class="{active: name === select}">
                {{index + 1}}
            </span>
        </div>
    </div>
</template>

<script>
    /*
    * - 使用组件代替div 1代替
    * - 父组件传值给子组件：最简单的是在html中传props， 还有就是通过子组件的data 2传值
    * - 使用css 完成slide动画切换 3切换
    * - demo slide slideitem 组件如何建立数据流通
    *
    * */
    export default {
        props:{
            select:{
                type: String,
            },
            autoPlay:{
                type: Boolean,
                default: true,
            }
        },
        data(){
            return {
                allItemName: [],
                lastSelectItem: undefined,
            }
        },
        computed:{
            selectItem(){
                return this.allItemName.indexOf(this.select)
            }
        },
        mounted() {
            //1代替2: this.$children 表示vue对象， 而非dom
            this.allItemName = this.$children.map((vm)=>vm.name)

            this.updateChildrenSelect()

            if(this.autoPlay){
                this.playAuto()
            }

        },
        updated() {
            // 将select传给item
            this.updateChildrenSelect()
        },
        methods:{
            playAuto(){
                let showIndex = this.allItemName.indexOf(this.select)

                let run = ()=>{
                    showIndex++
                    if(showIndex === this.allItemName.length){
                        showIndex = 0
                    }
                    this.updateSelect(this.allItemName[showIndex])
                    setTimeout(run, 3000)
                }
                run()
            },
            updateSelect(name){
                this.lastSelectItem = this.selectItem
                this.$emit("update:select", name)

            },
            pauseAutoPlay(){
                console.log("pause");
                this.$emit("update:autoPlay", false)
            },
            startAutoPlay(){
                console.log("start");
                this.$emit("update:autoPlay", true)

            },
            updateChildrenSelect(){
                this.$children.forEach((vm)=>{

                    let reverse
                    if(this.selectItem > this.lastSelectItem){
                        reverse = false
                    } else {
                        reverse = true
                    }
                    vm.reverse = reverse
                    this.$nextTick(()=>{
                        vm.select = this.select || this.$children[0].name

                    })
                })

            },
            clickUpdateSelect(name){
                this.updateSelect(name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./var";
    .slide-wrapper{
        .slide-wrapper-window{
            /*3切换1： 设置window position*/
            position: relative;
        }
        .dots{
            .dot{
                width:1em;
                height:1em;
                border:1px solid red;
                &.active{
                    background: red;
                }
            }
        }
    }
</style>
