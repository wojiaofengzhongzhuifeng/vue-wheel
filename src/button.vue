<template>
    <button class="button" @click="$emit('click')">
        <div class="icon"  :class="{[iconPosition]: 1}" v-if="iconName">
            <w-icon :icon-name="iconName"  class="icon" v-if="iconName && !loading"></w-icon>
            <w-icon icon-name="loading" class="loading" v-if="loading" ></w-icon>
        </div>
        <div class="slot">
            <slot></slot>
        </div>
    </button>
</template>

<script>
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
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
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
        font-size: var(--font-size);
        line-height: var(--button-height);
        color: var(--color-2);
        background: var(--color-white);
        border: var(--button-border);
        padding: 0 1em;
        border-radius: 6px;
        outline: none;
        cursor: pointer;
        transition: all 0.3s;
        & .icon{
            height: var(--button-height)
        }
        & .icon.right{
            order: 1
        }
        & .icon .loading{
            animation: loadingCircle 1s infinite linear;
        }
        &:hover {
            border: var(--button-border-active);
            color: var(--color-3);
            z-index: 1;
            position: relative;
        }
    }

</style>
