<template>
    <div class="tabItem">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            disabled: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
