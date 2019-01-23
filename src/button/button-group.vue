<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
    .button-group{
        display: flex;
        & .button{
            border-radius: 0;
        }
        & .button:first-child{
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            margin-right:-1px;
        }
        & .button:last-child{
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            margin-left:-1px;
        }
        & > div:hover{
            z-index: 1;
            position: relative;
        }
    }
</style>
