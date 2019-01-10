<template>
    <div class="slide-wrapper" @mouseenter="pauseAutoPlay" @mouseleave="startAutoPlay">
        <div class="slide-wrapper-window" @touchstart="onTouchStart" @touchend="onTouchEnd">
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
    * - 动画暂停，继续的思路只有一个 === 关闭计时器 5暂停
    * - 移动端触摸 6移动
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
                //5暂停1: 保存计时器的id
                timeId: undefined,
                startTouchX: undefined,
                startTouchY: undefined,
                endTouchX: undefined,
                endTouchY: undefined,
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
                // if(this.timeId){return }
                let showIndex = this.allItemName.indexOf(this.select)

                let run = ()=>{
                    showIndex++
                    if(showIndex === this.allItemName.length){
                        showIndex = 0
                    }
                    this.updateSelect(this.allItemName[showIndex])
                    // 5暂停2： 保存每一个计时器
                    this.timeId = setTimeout(run, 3000)
                }
                run()
            },
            updateSelect(name){
                this.lastSelectItem = this.selectItem
                this.$emit("update:select", name)

            },
            pauseAutoPlay(){
                // 5暂停4：在鼠标进入，暂停动画
                this.pause()
            },
            startAutoPlay(){
                // 5暂停5：在鼠标离开，开始动画
                this.playAuto()
            },
            pause(){
                // 5暂停3：暂停计时器
                window.clearTimeout(this.timeId)
                this.timeId = undefined
            },
            updateChildrenSelect(){
                this.$children.forEach((vm)=>{

                    let reverse
                    reverse = this.selectItem <= this.lastSelectItem;

                    if(this.timeId){
                        //自动播放，需要判断
                        if(this.lastSelectItem === this.allItemName.length - 1 && this.selectItem === 0){
                            reverse = false
                        }
                    }


                    vm.reverse = reverse
                    this.$nextTick(()=>{
                        vm.select = this.select || this.$children[0].name

                    })
                })

            },
            onTouchEnd(e){
                console.log(e);
                this.pause()
                console.log("抹完了");
                this.endTouchX = e.changedTouches[0].clientX
                this.endTouchY = e.changedTouches[0].clientY
                if(this.endTouchX > this.startTouchX){


                    console.log("shang");
                    console.log(this.select);
                    let index = this.allItemName.indexOf(this.select)
                    this.updateSelect(this.allItemName[index - 1])
                } else {
                    console.log("xia");
                    let index = this.allItemName.indexOf(this.select)
                    this.updateSelect(this.allItemName[index + 1])
                }
            },
            onTouchStart(e){
                this.pause()
                this.startTouchX  = e.touches[0].clientX
                this.startTouchY  = e.touches[0].clientY
                console.log("开始摸");
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
            display: flex;
            justify-content: center;
            padding-top:1em;
            .dot{
                margin:0 1em;
                width:1.2em;
                height:1.2em;
                display: inline-flex;
                justify-content: center;
                align-content: center;
                border:1px solid black;
                border-radius: 50%;
                &.active{
                    background: red;
                }
            }
        }
    }
</style>
