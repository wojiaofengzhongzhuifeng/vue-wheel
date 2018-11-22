<template>
    <svg class="w-icon" aria-hidden="true">
        <use :xlink:href="`#icon-${iconName}`"></use>
    </svg>
</template>

<script>
import "./svg"
export default {
    props:{
        iconName: {
            type: String,
        }
    }
}
</script>

<style lang="scss">
    .w-icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        color: var(--color-2);
    }
</style>
