<template>
    <div class="toast">
        <span v-if="enAbleHtml" class="showMessage" v-html="$slots.default[0]"></span>
        <span v-else="!enAbleHtml" class="showMessage">
            <slot></slot>
        </span>
        <span v-if="!autoClose" class="closeButton" @click="onClickClose">{{closeButton.text}}</span>
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
    * 2. 组件的 prop 中有一个是回调A, 并且这个回调A可以调用 toast 组件内的函数 log
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
                        text: "关闭",
                        callback: ()=>{
                            console.log("default");
                        }
                    }
                }
            },
            enAbleHtml:{
                type: Boolean,
                default: false,
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
            },
            log(){
                console.log("点击关闭, 能执行 toast 组件的方法, 触发本方法的位置是在 props 中");
            },
            onClickClose(){
                this.closed();
                // 确保你传入的 closeButton.callback 是一个函数
                // 对参数的验证, 防御性编程
                if(typeof this.closeButton.callback === "function"){
                    this.closeButton.callback(this)  // prop 的回调函数执行组件内函数, plugin.js 的
                }
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
