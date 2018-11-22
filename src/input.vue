<template>
    <div class="input">
        <input type="text">
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $font-size: 12px;
    $font-color: #90a4ae;
    .input{
        font-size: $font-size;
        color: $font-color;
        > input{
            outline: none;
            height: $height;
            padding-left: 8px;
            color: inherit;
        }
    }
</style>
