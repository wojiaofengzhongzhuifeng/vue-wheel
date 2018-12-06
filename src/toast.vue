<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    /*
    * 笔记
    * 1. 对于通知类组件(少逻辑, 一次性使用, 只用来展示信息), 有两种方法可以实现组件
    *   - 提前写好通知类组件在页面, 并且隐藏它
    *   - 在合适的时机通过操作数据显示它
    *
    *   --
    *   - 用户点击按钮的时候创建一个 Vue 实例
    *   - 用户点击另一个按钮的时候删除这个 Vue 实例
    *
    * */
</script>

<style lang="scss" scoped>
</style>
