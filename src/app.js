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
import toast from "./toast"



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
Vue.component("w-toast", toast)



new Vue({
    el: "#app",
    methods: {
        showToast(){
            this.$toast("这是展示信息")
        }
    }
})

