// 所有组件的入口
import Vue from "vue"
import Button from "./button.vue"
import Icon from "./icon"


Vue.component("w-button", Button)
Vue.component("w-icon", Icon)

new Vue({
    el: "#app",
    data:{
        loading1: false
    }
})
