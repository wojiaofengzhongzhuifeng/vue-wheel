<template>
    <div class="wrapper" :class="toastClass">
        <div class="toast" ref="toast">
            <span v-if="enAbleHtml" class="showMessage" v-html="$slots.default[0]"></span>
            <span v-else="!enAbleHtml" class="showMessage">
            <slot></slot>
        </span >
            <div v-if="closeButton" style="display: flex;">
                <div class="line"></div>
                <span class="closeButton" @click="onClickClose" ref="close">{{closeButton.text}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    /*
    * 笔记
    * 1. 对于通知类组件(少逻辑, 一次性使用, 只用来展示信息), 有两种方法可以实现组件
    *   - 提前写好通知类组件在页面, 并且隐藏它
    *   - 在合适的时机通过操作数据显示它
    *
    *   --（推荐）
    *   - 用户点击按钮的时候创建一个 Vue 实例
    *   - 用户点击另一个按钮的时候删除这个 Vue 实例
    *
    * 2. 组件的 prop 中有一个是回调A, 并且这个回调A可以调用 toast 组件内的函数 log
    *
    * 6. 函数的参数传递
    *
    * 7. 套路: 动画遇到bug, 新增一个div, 只用来居中
    *
    * 9. 规定 props 数据是规定的对象A
    * */

    /*
    * 实现思路  1思路
    * */

    // 配置 Vue 实例的对象参数
    export default {
        props: {
            autoCloseDelay:{
                type: Number,
                default: 3,
            },
            // 如果类型是 Object , 那么 default 必须是一个函数, 这个函数返回一个对象, 对象是原 default
            closeButton: {
                type: Object,
                validator(closeOption){
                    return typeof closeOption.text === "string" && typeof closeOption.callback === "function";
                },
            },
            enAbleHtml: {
                type: Boolean,
                default: false,
            },
            position: {
                type: String,
                default: "top",
                validator(position) {
                    return ["top", "bottom", "middle"].indexOf(position) >= 0
                }
            }
        },
        computed: {
            toastClass() {
                return [`position-${this.position}`]
            },
        },
        mounted: function () {
            this.autoCloseToast();
            // console.log(getComputedStyle(this.$refs.toast).height); // 在 mounted 时, dom 元素没有产生, 所以这里拿不到正常的数据
            this.upDateCloseStyle();
        },
        methods: {
            upDateCloseStyle() {
                // 解决 bug: 输入很多信息,  关闭按钮位置不对
                // 让 div.close 的 line-height 为 div.toast 的 height 即可
                this.$nextTick(() => {  // 在这里面, 拿到正常数据
                    const divStyle = this.$refs.toast.getBoundingClientRect();
                    // console.log(this.$refs.toast.style.height); // dom.style.height 拿的是内联样式, 而 toast 组件的 height 是内容填充而成的
                    const toastHeight = divStyle.height
                    const toastPaddingTop = parseInt(getComputedStyle(this.$refs.toast).paddingTop, 10) // parseInt("115px", 10) 居然可以转成数字 115 !
                    const toastPaddingBottom = parseInt(getComputedStyle(this.$refs.toast).paddingBottom, 10) // 获取 dom 所有 css 样式
                    const computedHeight = toastHeight - toastPaddingTop - toastPaddingBottom
                    if(this.closeButton){
                        this.$refs.close.style.lineHeight = `${computedHeight}px`
                    }
                })
            },
            autoCloseToast() {
                if (!this.closeButton) {
                    setTimeout(() => {
                        this.closed()
                    }, parseInt(this.autoCloseDelay) * 1000)
                }
            },
            closed() {
                // console.log(this); // this === vue 文档的 vm
                this.$el.remove(); // this.$el === 原生 dom 元素, dom 元素消失在页面
                this.$destroy(); // vue 实例消除掉
            },
            log() {
                console.log("点击关闭, 能执行 toast 组件的方法, 触发本方法的位置是在 props 中");
            },
            onClickClose() {
                this.closed();
                // 确保你传入的 closeButton.callback 是一个函数
                // 对参数的验证, 防御性编程
                if (typeof this.closeButton.callback === "function") {
                    this.closeButton.callback(this)  // prop 的回调函数执行组件内函数, toastPlugin.js 的
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/var";
    @keyframes showMiddle {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes showFromTop {
        0%{
            transform: translateY(-100px);
        }
        100%{
            transform: translateY(0);
        }
    }
    @keyframes showFromBottom {
        0%{
            transform: translateY(100px);
        }
        100%{
            transform: translateY(0);
        }
    }
    .wrapper {
        /*以下三个属性可以让div水平居中, .wrapper 的作用: 水平居中 + 决定 toast 的展示位置*/
        transform: translate(-50%);
        left: 50%;
        position: fixed;
        z-index: 100;
        .toast {
            font-size: 14px;
            color: $font-color;
            padding: 10px 16px;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
            background: #fff;
            display: flex;
            pointer-events: all;
            .closeButton {
                cursor: pointer;
                flex-shrink: 0; /*保证关闭按钮正常显示*/
            }
            .line {
                padding: 0 5px;
                border-left: 1px solid;
                margin-left: 10px;
            }
        }
        &.position-bottom {
            bottom: 10px;
            .toast {
                animation: showFromBottom 0.3s;
            }
        }
        &.position-middle {
            bottom: 50%;
            .toast {
                animation: showMiddle 0.3s;
            }
        }
        &.position-top {
            top: 10px;
            .toast {
                animation: showFromTop 0.3s;
            }
        }
    }


</style>
