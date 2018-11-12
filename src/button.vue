
<template>
    <div>
        <button class="button">
            <div>
                <slot></slot>
            </div>
            <svg class="icon" aria-hidden="true" v-show="1">
                <use :xlink:href="`#icon-${icon}`"></use>
            </svg>
        </button>
    </div>
</template>

<script>
    export default {
        props: ["icon", "iconPosition"],
    }
</script>

<style lang="scss">
    .button {
        display: flex;
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
        > svg{
            height: var(--button-height)
        }
    }

</style>
