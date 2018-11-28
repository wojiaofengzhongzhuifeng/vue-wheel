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
            colStyle: function(){
                return {
                    paddingLeft: (parseInt(this.gutter / 2)+'px'),
                    paddingRight: (parseInt(this.gutter / 2)+'px'),
                }
            },
            colClasses: function(){
                return [ this.offset && `offset-${this.offset}`, this.span && `span-${this.span}`]
            },
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


</style>
