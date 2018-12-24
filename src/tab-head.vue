<template>
    <div class="tabHead">
        <slot></slot>
        <!--1插槽-->
        <div class="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wheelTabHead",
        inject: ["eventHi"],
        created() {
            this.eventHi.$on("update:selectedData", (value, $el)=>{
                console.log("head", value, $el);
                const {width, height, top, left} = $el.getBoundingClientRect();
                console.log(width, height, top, left);
            })
        }
    }
</script>

<style lang="scss" scoped>
    $line-height: 40px;
    $font-color: #90a4ae;
    $grey: #666666;
    $color-blue: rgb(66, 133, 244);
    $color-red: rgb(219, 68, 55);
    $color-yellow: rgb(244, 160, 0);
    $color-green: rgb(15, 157, 88);
    .tabHead{
        display: flex;
        height: $line-height;
        line-height: $line-height;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $grey;
        >.line{
            position: absolute;
            border:1px solid $color-blue;
            bottom:0;
            width:100px;
        }
        >.actions-wrapper{
            /*定格*/
            margin-left: auto;
        }
    }
</style>
