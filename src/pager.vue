<template>
    <div class="pager-wrapper">
        test
    </div>
</template>

<script>
    export default {
        props:{
            totalPage:{
                type: Number,
            },
            currentPage:{
                type: Number,
                default:1
            },
            hideIfOnePage:{
                type: Boolean,
                default: true,
            }
        },

    }
</script>

<style lang="scss" scoped>
    @import "../styles/var";
</style>
