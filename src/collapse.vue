<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    /*
    * .sync实现：子组件（collapse）修改父组件（app）的数据     其实没有，本质上还是子组件发送一个事件，通知父组件修改自身数据 1双向绑定
    * */
    import Vue from "vue"
    export default {
        props:{
            selected:{
                type: Array,
            },
            single:{
                type: Boolean,
            }
        },
        data(){
            return {
                eventBus: new Vue()
            }
        },
        provide(){
            return {
                eventBus: this.eventBus,
            }
        },
        mounted(){
            this.eventBus.$emit("toSon", this.selected)

            this.eventBus.$on("toParent", (data)=>{
                let copyProps = JSON.parse(JSON.stringify(this.selected))
                // 处理数据
                if(data.visible){
                    let showArray = []
                    if(this.single){
                        showArray[0] = data.itemKey
                    } else {
                        copyProps.push(data.itemKey)
                        showArray = [...new Set(copyProps)]
                    }

                    this.eventBus.$emit("toSon", showArray)
                    // 1双向绑定1： 触发事件update:selected，将修改后的数据（showArray）传给父组件（app），由父组件修改
                    this.$emit('update:selected', showArray)

                } else {
                    copyProps = copyProps.filter(item => item !== data.itemKey)
                    this.eventBus.$emit("toSon", copyProps)

                    this.$emit('update:selected', copyProps)
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import "./var";
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>
