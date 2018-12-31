<template>
    <div class="tab" @click="test">
        <slot></slot>
    </div>
</template>

<script>
    /**
     * 笔记
     * 1. 一个组件如何使用两个插槽 1插槽
     * 2. tab的selected数据保存在app中， 如何修改selected数据？子组件（tab）不能修改父组件（app）的数据，子组件（tab）只能发出一个事件，通知父组件（app）修改
     * 3. 只有 class style 属性是追加， 其他属性都是覆盖 3追加
     * 4. eventHub + 依赖注入： 实现数据通信  4组件通信
     * 5. margin-left: auto 元素放到父元素右边 定格 http://js.jirengu.com/lozurujili/1/edit
     * 6.
     * */
    import Vue from "vue";
    export default {
        props: {
            selected: {
                type: String,
                required: true,
            },
            direction: {
                type: String,
                validator(value){
                    return ["horizontal", "vertical"].indexOf(value) >= 0
                }
            }
        },
        // 4组件通信1: 通过new Vue 生成一个vue实例， 目的是使用vue实例的eventHub对象
        data(){
            return {
                eventHubTest: new Vue(),
            }
        },
        // 4组件通信2: 在组件A中使用provide函数，返回数据event， 这样在组件A所有子组件均可拿到数据event
        provide(){
            return {
                eventHi: this.eventHubTest
            }
        },
        created() {
            // this.eventHubTest.$emit("update:selectedData", this.selected)
        },
        mounted() {
            // 在页面加载之后，需要把this.selected值对应的dom元素传出去
            this.$children.forEach((vm)=>{
                if(vm.$options.name === "wheelTabHead"){
                    vm.$children.forEach((item)=>{
                        if(item.$options.name === "wheelTabItem" && item.name === this.selected){
                            this.eventHubTest.$emit("update:selectedData", this.selected, item.$el)
                        }
                    })
                }
            })
        },
        methods:{
            test(){
                console.log(111123);
            }
        }
    }

</script>

<style lang="scss" scoped>
</style>
