<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
</template>

<script>
export default {
    props:{
        icon: {
            type: String,
        }
    }
}
</script>

<style lang="scss">
</style>
