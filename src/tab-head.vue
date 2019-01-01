<template>
    <div class="tabHead">
        <slot></slot>
        <div class="line">

        </div>
    </div>
</template>

<script>
export default {
    inject:["eventBus"],
    mounted() {
        // this.eventBus.$on("toSon", )
    }
}
</script>

<style lang="scss" scoped>
    $border-color: rgb(235, 237, 240);
    .tabHead{
        border-bottom:1px solid $border-color;
        display: flex;
        position: relative;
        .line{
            position: absolute;
            width:100px;
            height:2px;
            border:1px solid red;
            bottom: 0;
        }
    }
</style>
