// 所有组件的入口
import Vue from "vue"
import Button from "./button.vue"
import ButtonGroup from "./button-group"
import Input from "./input"
import Row from "./row"
import Col from "./col"


Vue.component("w-button", Button)
Vue.component("w-group", ButtonGroup)
Vue.component("w-input", Input)
Vue.component("w-col", Col)
Vue.component("w-row", Row)



new Vue({
    el: "#app",
    data: {
        loading1: true
    },
    methods: {
        inputChange(e){
            console.log(e);
        },
        inputInput(e){
            console.log("inputInput");
            console.log(e)
        },
        inputFocus(e){
            console.log("inputFocus");
            console.log(e)
        },
        inputBlur(e){
            console.log("inputBlur");
            console.log(e);
        }
    }
})

