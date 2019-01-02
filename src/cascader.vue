<template>
    <div class="cascader-wrapper">
        <div v-for="item in source">
            {{item.value}}
            {{item.children}}
        </div>
    </div>
</template>

<script>
    /*
    * cascader-item组件用于递归展示value
    * */
    export default {
        props:{
            source: {
                type: Array,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
