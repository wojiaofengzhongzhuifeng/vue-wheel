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
import Tab from "./tab";
import TabHead from "./tab-head"
import TabBody from "./tab-body"
import TabItem from "./tab-item"
import TabPane from "./tab-pane"





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
Vue.component("w-tab", Tab);
Vue.component("w-tab-head", TabHead);
Vue.component("w-tab-body", TabBody);
Vue.component("w-tab-item", TabItem);
Vue.component("w-tab-pane", TabPane);


new Vue({
    el: "#app",
    data: {
        selected: "woman",
    }
});

