<template>
    <div :class="colClasses" class="col" :style="colStyle">
        <slot>{{span}}</slot>
    </div>
</template>

<script>
    let validator = (obj)=>{
        // 确保obj的key是span或者offset, 否则报错
        let valid = true
        Object.keys(obj).forEach((key)=>{
            if(!(["span", "offset"].indexOf(key) > -1)){
                console.error(`col组件 ipad 属性错误, 输入了${key}, 只能在 span 和 offset 选择`)
                valid = false;
            }
        });
        return valid;
    }
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
                validator,
            },
            ipad: {
                type: Object,
                validator
            },
            narrowPc: {
                type: Object,
                validator
            },
            pc: {
                type: Object,
                validator
            },
            widthPc: {
                type: Object,
                validator
            },
            widthWidthPc: {
                type: Object,
                validator
            }
        },
        computed:{
            colStyle(){
                // 1传递数据 2子组件通过解构赋值拿到数据
                let { gutter } = this
                gutter = parseInt(gutter)
                return {
                    paddingLeft: (gutter / 2)+'px',
                    paddingRight: (gutter / 2)+'px',
                }
            },
            colClasses(){
                const { span, offset, align, phone, ipad, narrowPc, pc, widthPc, widthWidthPc} = this
                return [
                    offset && `offset-${offset}`,
                    span && `span-${span}`,
                    align && `align-${align}`,
                    phone && phone.span && `span-phone-${phone.span}`,
                    phone && phone.offset && `offset-phone-${phone.offset}`,
                    ipad && ipad.span && `span-ipad-${ipad.span}`,
                    ipad && ipad.offset && `offset-ipad-${ipad.offset}`,
                    narrowPc && narrowPc.span && `span-narrowPc-${narrowPc.span}`,
                    narrowPc && narrowPc.offset && `offset-narrowPc-${narrowPc.offset}`,
                    pc && pc.span && `span-pc-${pc.span}`,
                    pc && pc.offset && `offset-pc-${pc.offset}`,
                    widthPc && widthPc.span && `span-widthPc-${widthPc.span}`,
                    widthPc && widthPc.offset && `offset-widthPc-${widthPc.offset}`,
                    widthWidthPc && widthWidthPc.span && `span-widthWidthPc-${widthWidthPc.span}`,
                    widthWidthPc && widthWidthPc.offset && `offset-widthWidthPc-${widthWidthPc.offset}`,
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
        .#{$class}#{$i} {
            width: ($i / 24) * 100%;
        }
    }

    $class: offset-;
    @for $n from 0 through 24 {
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
    @media (min-width: 1600px) {
        $class: span-widthWidthPc-;
        @for $i from 0 through 24 {
            .#{$class}#{$i} {
                width: ($i / 24) * 100%;
            }
        }
        $class: offset-span-widthWidthPc--;
        @for $n from 0 through 24 {
            .#{$class}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (max-width: 1600px) {
        $class: span-widthPc-;
        @for $i from 0 through 24 {
            .#{$class}#{$i} {
                width: ($i / 24) * 100%;
            }
        }
        $class: offset-widthPc-;
        @for $n from 0 through 24 {
            .#{$class}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (max-width: 1200px) {
        $class: span-pc-;
        @for $i from 0 through 24 {
            .#{$class}#{$i} {
                width: ($i / 24) * 100%;
            }
        }
        $class: offset-pc-;
        @for $n from 0 through 24 {
            .#{$class}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (max-width: 992px) {
        $class: span-narrowPc-;
        @for $i from 0 through 24 {
            .#{$class}#{$i} {
                width: ($i / 24) * 100%;
            }
        }
        $class: offset-narrowPc-;
        @for $n from 0 through 24 {
            .#{$class}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (max-width: 768px) {
        $class: span-ipad-;
        @for $i from 0 through 24 {
            .#{$class}#{$i} {
                width: ($i / 24) * 100%;
            }
        }
        $class: offset-ipad-;
        @for $n from 0 through 24 {
            .#{$class}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
    @media (max-width: 576px) {
        $class: span-phone-;
        @for $i from 0 through 24 {
            .#{$class}#{$i} {
                width: ($i / 24) * 100%;
            }
        }
        $class: offset-phone-;
        @for $n from 0 through 24 {
            .#{$class}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }




</style>
