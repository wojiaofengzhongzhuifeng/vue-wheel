<template>
    <div class="tabHead">
        <slot></slot>
        <!--1插槽-->
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
    $line-height: 40px;
    .tabHead{
        display: flex;
        height: $line-height;
        line-height: $line-height;
        justify-content: flex-start;
        >.actions-wrapper{
            /*定格*/
            margin-left: auto;
        }
    }
</style>
