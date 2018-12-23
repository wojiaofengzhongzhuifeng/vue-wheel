<template>
    <div class="tab">
        <slot></slot>
    </div>
</template>

<script>
    /**
     * 笔记
     * 1. 一个组件如何使用两个插槽 1插槽
     * 2.tab的selected数据保存在app中， 如何修改selected数据？子组件（tab）不能修改父组件（app）的数据，子组件（tab）只能发出一个事件，通知父组件（app）修改
     *
     */
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
        created() {
            // this.$emit("update: selected", "xxx")
        }
    }

</script>

<style lang="scss" scoped>
</style>
