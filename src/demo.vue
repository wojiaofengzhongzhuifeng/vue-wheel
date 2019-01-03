<template>
    <div>


        <w-button icon-name="setting" icon-position="right" @click="listenButtonClick">点我</w-button>

        <!--1监听 在使用w-input的地方，监听change事件-->
        <w-input @change="listenInputChange"></w-input>



        <w-row gutter="40px"   align="center" >
            <w-col :span="4">
                <div style="border:1px solid ;">
                    侧边栏
                </div>
            </w-col>
            <w-col :span="15" :offset="5">
                <div style="border:1px solid ;">
                    主要内容
                </div>

            </w-col>

        </w-row>

        <w-row gutter="20px">
            <w-col :span="4" :phone="{span: 8}">
                <div style="border:1px solid ;">
                    侧边栏
                </div>
            </w-col>
            <w-col :span="15" offset="5"  :phone="{span: 8, offset: 8}">
                <div style="border:1px solid ;">
                    主要内容
                </div>
            </w-col>
        </w-row>


        <div style="margin:100px">
            <w-button @click="showToast">展示toast</w-button>
        </div>

        <div style="margin:100px;">
            <w-popover title="这是popover的标题" position="right" trigger="click">
                <w-button>点击我2</w-button>
                <!--2暴露2：解构-->
                <!--3多slot2-->
                <template slot="content" slot-scope="{close}">
                    <p>fdjskfldjsa</p>
                    <!--2暴露3：使用-->
                    <w-button @click="close">关闭</w-button>
                </template>
            </w-popover>
        </div>

        <div class="tab-wrapper" style="margin: 100px">
            app组件知道目前的selectedtab是{{selectedTab}}
            <w-tab :selected="selectedTab" @update:selected="selectedTab = $event">
                <w-tab-head>
                    <w-tab-item name="1">标题1</w-tab-item>
                    <w-tab-item name="2">标题2</w-tab-item>
                    <w-tab-item name="3">标题3</w-tab-item>
                    <!--1插槽2-->
                    <template slot="actions">
                        <w-button>添加tab</w-button>
                    </template>
                </w-tab-head>
                <w-tab-body>
                    <w-tab-pane  name="1">内容1</w-tab-pane>
                    <w-tab-pane  name="2">内容2</w-tab-pane>
                    <w-tab-pane  name="3">内容3</w-tab-pane>
                </w-tab-body>
            </w-tab>
        </div>



        <!--1双向绑定2：在使用collapse的地方使用sync-->
        <!--<w-collapse  :selected = "selectTab" @update:selected="selectTab = $event" single>-->
        <w-collapse  :selected.sync="selectCollapse" single>
            <w-collapse-item title="这是标题1" :item-key="'a'">
                这是内容1
            </w-collapse-item>

            <w-collapse-item title="这是标题2" :item-key="'b'">
                这是内容2
            </w-collapse-item>

            <w-collapse-item title="这是标题3" :item-key="'c'">
                这是内容3
            </w-collapse-item>

            <w-collapse-item title="这是标题4" :item-key="'d'">
                这是内容4
            </w-collapse-item>
        </w-collapse>

        <div style="margin:200px;">
            <w-cascader :source="cascaderData"></w-cascader>
        </div>
    </div>
</template>

<script>

    // 所有组件的入口

    import Vue from "vue";
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

    // 1思路2： 如果使用use方法， 会执行 Plugin 导出对象的 install 函数，该函数为 vue 追加一个$toast方法， 以便后续可以调用。
    Vue.use(toastPlugin);

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
    Vue.component("w-cascader", Cascader);

    export default {
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
    }

</script>

<style lang="scss" scoped>
</style>
