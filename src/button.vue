
<template>
    <button class="button">按钮</button>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .button {
        font-size: var(--font-size);
        line-height: var(--button-height);
        color: var(--color-2);
        background: var(--color-white);
        border: var(--button-border);
        padding: 0 1em;
        border-radius: 6px;
        outline:none;
        cursor: pointer;
        transition: all 0.3s;
        &:hover{
            border: var(--button-border-active);
            color: var(--color-3)
        }
        &:focus{
            border: var(--button-border-active);
            color: var(--color-3)
        }
    }

</style>