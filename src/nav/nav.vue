<template>
    <div class="w-nav">
        <slot></slot>
    </div>
</template>

<script>
    /*
    * 1。 父传子数据 1父数据
    * 2。 子传父数据(响应式) 2子数据 =》 通过computed
    * 3。 父监听子组件 3监听
    * */
    export default {
        name: "WheelNav",
        props:{
            selected:{
                type: Array,
            },
            multiple:{
                type: Boolean,
            }
        },
        computed:{
            //2子数据1: navitem组件的name数据传给nav组件， 并且selectedItems总能拿到最新的数据（响应式）
            selectedItems(){
                return this.$children.filter(vm=>vm.$options.name ==="WheelNavItem")
            }
        },
        mounted() {
            this.selectedItems.forEach((vm)=>{
                if(this.selected.indexOf(vm.name) >= 0){
                    console.log(vm);
                    //1父数据2： 父组件传递子组件数据
                    vm.propSelected = true
                } else{
                    vm.propSelected = false
                }
            })
            // 3监听1：在js中，监听子组件发出的事件
            this.selectedItems.forEach((vm)=>{
                vm.$on("add:selected", (selected)=>{

                    if(this.multiple){
                        let copy = JSON.parse(JSON.stringify(this.selected))
                        copy.push(selected)
                        copy = Array.from(new Set(copy))
                        this.$emit("update:selected", copy)
                    } else {
                        this.$emit("update:selected", [selected])

                    }
                })
            })
        },
        updated() {
            this.selectedItems.forEach((vm)=>{
                if(this.selected.indexOf(vm.name) >= 0){
                    //1父数据2： 父组件传递子组件数据
                    vm.propSelected = true
                } else{
                    vm.propSelected = false
                }
            })
        }

    }
</script>

<style lang="scss">
    .w-nav{
        display: flex;
        border:1px solid red;
    }
</style>
