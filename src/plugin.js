export default {
    install(Vue) {
        // 下面的代码原本是在 toast 组件中, 那样侵入性太强(需要手动引入 Vue, 并且会强制在 Vue 中添加 $toast)
        // 使用 plugin 用户可以不使用 plugin , 这样就不会再 Vue 中添加 $toast
        // 对应文档 https://cn.vuejs.org/v2/guide/plugins.html 的 "添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现" 功能
        Vue.prototype.$toast = function (showToastMessage) {
            console.log(showToastMessage)
        }
    }
}
