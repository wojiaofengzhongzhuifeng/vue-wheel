<template>
    <div>
        <button class="button">
            <w-icon :icon-name="iconName"  class="icon" :class="{[iconPosition]: 1}" v-if="iconName && !loading"></w-icon>
            <w-icon icon-name="loading" class="loading" v-if="loading" :class="{[iconPosition]: 1}"></w-icon>
            <div class="slot">
                <slot></slot>
            </div>
        </button>
    </div>
</template>

<script>
    export default {
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

<style lang="scss">
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
        &:hover {
            border: var(--button-border-active);
            color: var(--color-3)
        }
        &:focus {
            border: var(--button-border-active);
            color: var(--color-3)
        }
        > svg {
            height: var(--button-height)
        }
        > .right {
            order: 1
        }
        > .left {
        }
        > .loading{
            animation: loadingCircle 1s infinite linear;
        }
    }

</style>
