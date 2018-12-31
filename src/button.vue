<template>
    <button class="button" @click="$emit('click', $event)">
        <!--1class 2-->
        <div class="icon"  :class="className" v-if="iconName || loading">
            <w-icon :icon-name="iconName"  class="icon" v-if="iconName && !loading"></w-icon>
            <w-icon icon-name="loading" class="loading" v-if="loading" ></w-icon>
        </div>
        <div class="slot">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    /*
    * 知识点： 如何根据props设置class？ 1class
    * */
    import Icon from "./icon"
    export default {
        components:{
            'w-icon': Icon,
        },
        props: {
            iconName: {
                type: String,
            },
            loading: {
                type: Boolean,
                default: false,
            },
            iconPosition: {
                type: String,
                default: "left",
                validator: function (value) {
                    if(['right', 'left'].indexOf(value) === -1){
                        // 输错了
                        value = value === "" ? "空字符串" : value
                        console.warn(`输入的字符串有误, 只能在 left 和 right 选一个, 你输的是${value}`)
                    }
                    return true

                }
            }
        },
        computed:{
            // 1class 1
            className(){
                return [`${this.iconPosition}`]
            }
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $color-white: #ffffff;
    $color-white: #ffffff;
    $color-1: #fbfbfb;
    $color-2: #90a4ae;
    $color-3: rgb(66,133,244);
    $button-height: 32px;
    $font-size: 14px;
    $button-border: 1px solid $color-2;
    $button-border-active: 1px solid $color-2;
    $font-family: PingFangSC-Regular;
    @keyframes loadingCircle {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }
    }
    .button {
        display: flex;
        font-size: $font-size;
        line-height: $button-height;
        color: $color-2;
        background: $color-white;
        border: $button-border;
        padding: 0 1em;
        border-radius: 6px;
        outline: none;
        cursor: pointer;
        transition: all 0.3s;
        & .icon{
            height: $button-height
        }
        & .icon.right{
            order: 1
        }
        & .icon .loading{
            animation: loadingCircle 1s infinite linear;
        }
        &:hover {
            border: $button-border-active;
            color: $color-3;
            z-index: 1;
            position: relative;
        }
    }

</style>
