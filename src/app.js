// 所有组件的入口
import Vue from "vue"
import Button from "./button.vue"
import ButtonGroup from "./button-group"
import Input from "./input"
import Row from "./row"
import Col from "./col"
import layout from "./layout"
import header from "./header"
import sider from "./sider"
import content from "./content"
import footer from "./footer"



Vue.component("w-button", Button)
Vue.component("w-group", ButtonGroup)
Vue.component("w-input", Input)
Vue.component("w-col", Col)
Vue.component("w-row", Row)
Vue.component("w-layout", layout)
Vue.component("w-header", header)
Vue.component("w-sider", sider)
Vue.component("w-content", content)
Vue.component("w-footer", footer)



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

