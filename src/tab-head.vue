<template>
    <div class="tabHead">
        <slot></slot>
        <div class="line" ref="line">

        </div>
    </div>
</template>

<script>
export default {
    name: "wheelTabHead",
    inject:["eventBus"],
    mounted() {
        this.eventBus.$on("toParent", (selectTab, el)=>{
            const {width, height, top, left, right, } = el.getBoundingClientRect()
            console.log(left);
            this.$refs.line.style.left = (left - 100) + "px";
        })
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
            border:1px solid #1890ff;
            bottom: 0;
        }
    }
</style>
