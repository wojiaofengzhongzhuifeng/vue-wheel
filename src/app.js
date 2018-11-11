// 所有组件的入口
import Vue from "vue"
import Button from "./button.vue"

Vue.component("w-button", Button)
new Vue({
    el: "#app",
})