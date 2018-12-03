<template>
    <div :class="colClasses" class="col" :style="colStyle">
        <slot>{{span}}</slot>
    </div>
</template>

<script>
    export default {
        props: {
            span: {
                type: String | Number,
            },
            offset: {
                type: String | Number,
            }
        },
        computed:{
            colStyle(){
                const { gutter } = this
                return {
                    paddingLeft: (parseInt(gutter / 2)+'px'),
                    paddingRight: (parseInt(gutter / 2)+'px'),
                }
            },
            colClasses(){
                const { span, offset, align} = this
                return [ offset && `offset-${offset}`, span && `span-${span}`, align && `align-${align}`]
            },
        },
        data(){
            return {
                gutter: {
                    type: String | Number,
                    default: 0,
                },
                align: {
                    type: String,
                    default: "left",
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col{
        width:50%;
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
    .col.align-left > div{
        display: flex;
        justify-content: left;
    }
    .col.align-right > div{
        display: flex;
        justify-content: right;
    }
    .col.align-center > div{
        display: flex;
        justify-content: center;
    }


</style>
