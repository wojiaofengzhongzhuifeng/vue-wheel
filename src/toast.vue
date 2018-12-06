<template>
    <div class="toast">
        <span class="showMessage">
            <slot></slot>
        </span>
        <span v-if="!autoClose" class="closeButton">{{closeButton.text}}</span>
    </div>
</template>

<script>
    /*
    * 笔记
    * 1. 对于通知类组件(少逻辑, 一次性使用, 只用来展示信息), 有两种方法可以实现组件
    *   - 提前写好通知类组件在页面, 并且隐藏它
    *   - 在合适的时机通过操作数据显示它
    *
    *   --
    *   - 用户点击按钮的时候创建一个 Vue 实例
    *   - 用户点击另一个按钮的时候删除这个 Vue 实例
    *
    * */

    // 配置 Vue 实例的对象参数
    export default {
        props: {
            autoClose: {
                type: Boolean,
                default: true,
            },
            autoCloseDelay: {
                type: String | Number,
                default: 3
            },
            // 如果类型是 Object , 那么 default 必须是一个函数, 这个函数返回一个对象, 对象是原 default
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: "关闭"
                    }
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.closed()
                }, parseInt(this.autoCloseDelay) * 1000)
            }
        },
        methods: {
            closed() {
                console.log(this); // this === vue 文档的 vm
                this.$el.remove(); // this.$el === 原生 dom 元素, dom 元素消失在页面
                this.$destroy(); // vue 实例消除掉
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-color: #90a4ae;
    .toast {
        font-size: 14px;
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translate(-50%);
        color: $font-color;
        padding: 10px 16px;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
        background: #fff;
        display: inline-block;
        pointer-events: all;
        .closeButton{
            padding-left: 10px;
            border-left: 1px solid;
            cursor: pointer;
        }
        .showMessage{
            padding-right:10px;
        }
    }
</style>
