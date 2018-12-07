import Toast from "./toast"


function createToast({Vue, propsData, showToastMessage}){
    // 动态创建组件
    let Constructor = Vue.extend(Toast); // 生成 Toast 组件构造函数
    let toast = new Constructor({
        propsData
    }); // 通过构造函数生成一个toast实例
    toast.$slots.default = [showToastMessage] // 想toast实例中的slot属性传递信息
    toast.$mount(); // toast实例渲染为文档之外的 dom 元素
    document.body.appendChild(toast.$el) // 必须使用原生 DOM API 把它插入文档中
    return toast;
}

let currentToast;


export default {
    install(Vue) {
        /*
        * 1. 下面的代码原本是在 toast 组件中, 那样侵入性太强(需要手动引入 Vue, 并且会强制在 Vue 中添加 $toast)
        *    使用 plugin 用户可以不使用 plugin , 这样就不会再 Vue 中添加 $toast
        *    对应文档 https://cn.vuejs.org/v2/guide/plugins.html 的 "添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现" 功能
        *
        * 2. 代码逻辑:
        *       - createToast 函数返回 toast 实例
        *       - 声明一个变量currentToast, 用于存储 toast 实例
        *       - 如果 currentToast 存在, 删除原来的toast + 生成新的 toast 设为currentToast
        *       - 如果 currentToast 不存在, 生成新的 toast 设为currentToast
        *
        * */
        Vue.prototype.$toast = function (options) {
            if(currentToast){
                currentToast.closed()
            }
            currentToast = createToast({Vue, propsData: options.propsData, showToastMessage: options.showMessage})
            /*
            上面的代码之前是这样的
            if(currentToast){
                currentToast.closed()
                currentToast = createToast(options)
            } else {
                currentToast = createToast(options)
            }
            */
        }
    }
}
