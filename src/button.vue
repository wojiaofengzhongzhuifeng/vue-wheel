<template>
    <div>
        <button class="button">
            <svg class="icon" aria-hidden="true" v-if="icon" :class="{[iconPosition]: 1}">
                <use :xlink:href="`#icon-${icon}`"></use>
            </svg>
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
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
        }
    }
</script>

<style lang="scss">
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
    }

</style>
