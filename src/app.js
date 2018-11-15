// 所有组件的入口
import Vue from "vue"
import Button from "./button.vue"
import Icon from "./icon"
import ButtonGroup from "./button-group"



Vue.component("w-button", Button)
Vue.component("w-icon", Icon)
Vue.component("w-group", ButtonGroup)

new Vue({
    el: "#app",
    data:{
        loading1: false
    }
})
