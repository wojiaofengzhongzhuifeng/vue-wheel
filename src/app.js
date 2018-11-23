// 所有组件的入口
import Vue from "vue"
import Button from "./button.vue"
import ButtonGroup from "./button-group"
import Input from "./input"

Vue.component("w-button", Button)
Vue.component("w-group", ButtonGroup)
Vue.component("w-input", Input)

new Vue({
    el: "#app",
    data: {
        loading1: true
    },
    methods: {
        inputChange(e){
            console.log(e);
        },
    }
})

