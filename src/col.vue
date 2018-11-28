<template>
    <div :class="`span-${span} offset-${offset}`" class="col" :style="{paddingLeft: (parseInt(gutter / 2)+'px'),paddingRight: (parseInt(gutter / 2)+'px')}">
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
        },
        data(){
            return {
                gutter: {
                    type: String | Number,
                    default: 0,
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col{
    }

    /*为了生成以下css
    .col-1 {
        width: 4.16%
    }
    .col-2 {
        width: 8.13%
    }
    */
    $class: span-;
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
