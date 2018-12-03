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
            },
            phone: {
                type: Object,
                validator(obj){
                    // 确保obj的key是span或者offset, 否则报错
                    let valid = true
                    Object.keys(obj).forEach((key)=>{
                        if(!(["span", "offset"].indexOf(key) > -1)){
                            console.error(`col组件错误, 输入了${key}, 只能在span 和offset选择`)
                            valid = false;
                        }
                    });
                    return valid;
                }
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
                console.log(this.phone);
                const { span, offset, align, phone} = this
                return [
                    offset && `offset-${offset}`,
                    span && `span-${span}`,
                    align && `align-${align}`,
                    phone.span && `span-phone-${phone.span}`,
                    phone.offset && `offset-phone-${phone.offset}`,
                ]
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
    .span-0{
        display: none;
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
    @media (max-width: 576px) {
        .span-phone-11{
            background: red;
        }
    }



</style>
