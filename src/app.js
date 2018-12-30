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
import Popover from "./popover"
import Collapse from "./collapse"
import CollapseItem from "./collapse-item"





Vue.component("w-button", Button);
Vue.component("w-group", ButtonGroup);
Vue.component("w-input", Input);
Vue.component("w-col", Col);
Vue.component("w-row", Row);
Vue.component("w-layout", Layout);
Vue.component("w-header", Header);
Vue.component("w-sider", Sider);
Vue.component("w-content", Content);
Vue.component("w-footer", Footer);
Vue.component("w-toast", Toast);
Vue.component("w-popover", Popover);
Vue.component("w-collapse", Collapse);
Vue.component("w-collapse-item", CollapseItem);





new Vue({
    el: "#app",
    data(){
        return {
            selectTab: ['a'],
            test: "321321"
        }
    },
});

