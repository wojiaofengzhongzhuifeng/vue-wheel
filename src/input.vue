<template>
    <div class="input">
        <input type="text"
               :disabled="disabled === true"
               @change="$emit('change', $event)"
               @input="$emit('input', $event)"
               @focus="$emit('focus', $event)"
               @blur="$emit('blur', $event)"
               :value="value"
               :readonly="value"
        >
        <template v-if="icon">
            <w-icon :icon-name="icon.name"></w-icon>
            <span>{{icon.message}}</span>
        </template>
    </div>
</template>

<script>
    /*
    * 1. 知识
    *   - @change="$emit('change', $event)" 这个为什么要这样写？？
    *     如果不写，那么在使用 input 组件的时候：<w-input @change="fffff"/> , 是无法监听change事件的。因为你
    *
    * */
    import Icon from "./icon"
    export default {
        components:{
            'w-icon': Icon,
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            icon: {
                type: Object || null,
                default: null,
            },
            value: {
            }

        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $font-size: 12px;
    $font-color: #90a4ae;
    $color-blue: rgb(66, 133, 244);
    $color-red: rgb(219, 68, 55);
    $color-yellow: rgb(244, 160, 0);
    $color-green: rgb(15, 157, 88);
    $border-radius: 5px;
    .input {
        font-size: $font-size;
        color: $font-color;
        > input {
            transition: all 0.3s;
            outline: none;
            height: $height;
            padding-left: 8px;
            color: inherit;
            border: 1px solid $font-color;
            border-radius: $border-radius;
            &[disabled]{
                cursor: not-allowed;
            }
        }
        > input:hover {
            border-color: $color-blue;
        }
        > input:hover[disabled]{
            border-color: #90a4ae;
        }
        > input:focus {
            box-shadow: 0 0 0 2px rgba(24, 144, 255, .2);
        }

    }
</style>
