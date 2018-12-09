// 所有组件的入口
import Vue from "vue"
import Button from "./button.vue"
import ButtonGroup from "./button-group"
import Input from "./input"
import Row from "./row"
import Col from "./col"
import Layout from "./layout"
import Header from "./header"
import Sider from "./sider"
import Content from "./content"
import Footer from "./footer"
import Toast from "./toast"
import plugin from "./plugin"



Vue.component("w-button", Button)
Vue.component("w-group", ButtonGroup)
Vue.component("w-input", Input)
Vue.component("w-col", Col)
Vue.component("w-row", Row)
Vue.component("w-layout", Layout)
Vue.component("w-header", Header)
Vue.component("w-sider", Sider)
Vue.component("w-content", Content)
Vue.component("w-footer", Footer)
Vue.component("w-toast", Toast)
Vue.use(plugin)


const toastPropsData = {
    // enAbleHtml: true
    position: "middle",
    // autoCloseDelay: 1
}
new Vue({
    el: "#app",
    methods: {
        showToast(){
            this.$toast({showMessage: `<strong>这是一个信息</strong>`, propsData: toastPropsData})
        }
    }
})

