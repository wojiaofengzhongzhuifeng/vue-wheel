<template>
    <div :class="`col-${span} offset-${offset}`" class="col">
        <slot>{{span}}</slot>
    </div>
</template>

<script>
    export default {
        props: {
            span: {
                type: String | Number,
                default: "12",
            },
            offset: {
                type: String | Number,
                default: "0",
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col{
        border: 1px solid green
    }

    /*为了生成以下css
    .col-1 {
        width: 4.16%
    }
    .col-2 {
        width: 8.13%
    }
    */
    $class: col-;
    @for $i from 0 through 24 {
        // for each $col_#{i}
        .#{$class}#{$i} {
            width: ($i / 24) * 100%;
        }
    }


    $class: offset-;
    @for $n from 0 through 24 {
        // for each $col_#{i}
        .#{$class}#{$n} {
            margin-left: ($n / 24) * 100%;
        }
    }


</style>
