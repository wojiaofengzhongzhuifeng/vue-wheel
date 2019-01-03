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
import Tab from "./tab"
import TabHead from "./tab-head"
import TabBody from "./tab-body"
import TabPane from "./tab-pane"
import TabItem from "./tab-item"
import toastPlugin from "./toastPlugin"
import Cascader from "./cascader"




Vue.component("w-button", Button);
Vue.component("w-group", ButtonGroup);
Vue.component("w-input", Input);
Vue.component("w-col", Col);
Vue.component("w-row", Row);
Vue.component("w-layout", Layout);
Vue.component("w-sider", Sider);
Vue.component("w-header", Header);
Vue.component("w-content", Content);
Vue.component("w-footer", Footer);
Vue.component("w-toast", Toast);
Vue.component("w-popover", Popover);
Vue.component("w-collapse", Collapse);
Vue.component("w-collapse-item", CollapseItem);
Vue.component("w-tab", Tab);
Vue.component("w-tab-head", TabHead);
Vue.component("w-tab-body", TabBody);
Vue.component("w-tab-pane", TabPane);
Vue.component("w-tab-item", TabItem);
Vue.component("w-cascader", Cascader)

// 1思路2： 如果使用use方法， 会执行 Plugin 导出对象的 install 函数，该函数为 vue 追加一个$toast方法， 以便后续可以调用。
Vue.use(toastPlugin);





new Vue({
    el: "#app",
    data(){
        return {
            selectCollapse: ['b'],
            test: "321321",
            selectedTab: "2",
            cascaderData: [
                {
                    name: '广东',
                    children: [
                        {
                            name: '深圳',
                            children: [
                                {name: '福田'},
                                {name: '罗湖'},
                            ],
                        },
                        {
                            name: '广州',
                            children: [
                                {name: '越秀'},
                                {name: '黄埔'},
                            ],
                        }
                    ]
                },
                {
                    name: '广西',
                    children: [
                        {
                            name: '柳州',
                            children: [
                                {name: '柳上'},
                                {name: '柳下'},
                            ],
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        //1监听3 在这里执行change回调
        listenInputChange(e){
            console.log(e);
            console.log("监听到inputchange");
        },
        listenButtonClick(e){
            console.log(e)
            console.log("listenButtonClick");
        },
        // 1思路3: 在恰当的时机，执行this.$showToast()即可
        showToast(){
            this.$showToast(
                {
                    position: "bottom",
                    showToastMessage: "我觉得不行",
                    closeButton:{
                        text: "关闭", callback: function(){
                            console.log(123);}
                    }
                }
            )
        }
    }
});

