<template>
    <!--9监听2: 自定义组件内的所有事件，外部均不能监听， 除非你写 @click="$emit('click', $event)" -->
    <svg class="w-icon" aria-hidden="true" @click="$emit('click', $event)">
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
        color: inherit;
    }
</style>
