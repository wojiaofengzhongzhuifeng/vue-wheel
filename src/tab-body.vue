<template>
    <div class="tabBody">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "wheelTabBody",
    }
</script>

<style lang="scss" scoped>
    .tabBody{
        margin-top: 16px;
        display: flex;
    }
</style>
