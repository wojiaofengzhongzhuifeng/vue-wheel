<template>
    <div>
        <!--<w-button icon-name="setting" icon-position="right" @click="listenButtonClick">点我</w-button>-->

        <!--&lt;!&ndash;1监听 在使用w-input的地方，监听change事件&ndash;&gt;-->
        <!--<w-input @change="listenInputChange"></w-input>-->



        <!--<w-row gutter="40px"   align="center" >-->
            <!--<w-col :span="4">-->
                <!--<div style="border:1px solid ;">-->
                    <!--侧边栏-->
                <!--</div>-->
            <!--</w-col>-->
            <!--<w-col :span="15" :offset="5">-->
                <!--<div style="border:1px solid ;">-->
                    <!--主要内容-->
                <!--</div>-->

            <!--</w-col>-->

        <!--</w-row>-->

        <!--<w-row gutter="20px">-->
            <!--<w-col :span="4" :phone="{span: 8}">-->
                <!--<div style="border:1px solid ;">-->
                    <!--侧边栏-->
                <!--</div>-->
            <!--</w-col>-->
            <!--<w-col :span="15" offset="5"  :phone="{span: 8, offset: 8}">-->
                <!--<div style="border:1px solid ;">-->
                    <!--主要内容-->
                <!--</div>-->
            <!--</w-col>-->
        <!--</w-row>-->


        <!--<div style="margin:100px">-->
            <!--<w-button @click="showToast">展示toast</w-button>-->
        <!--</div>-->

        <!--<div style="margin:100px;">-->
            <!--<w-popover title="这是popover的标题" position="right" trigger="click">-->
                <!--<w-button>点击我2</w-button>-->
                <!--&lt;!&ndash;2暴露2：解构&ndash;&gt;-->
                <!--&lt;!&ndash;3多slot2&ndash;&gt;-->
                <!--<template slot="content" slot-scope="{close}">-->
                    <!--<p>fdjskfldjsa</p>-->
                    <!--&lt;!&ndash;2暴露3：使用&ndash;&gt;-->
                    <!--<w-button @click="close">关闭</w-button>-->
                <!--</template>-->
            <!--</w-popover>-->
        <!--</div>-->

        <!--<div class="tab-wrapper" style="margin: 100px">-->
            <!--app组件知道目前的selectedtab是{{selectedTab}}-->
            <!--<w-tab :selected="selectedTab" @update:selected="selectedTab = $event">-->
                <!--<w-tab-head>-->
                    <!--<w-tab-item name="1">标题1</w-tab-item>-->
                    <!--<w-tab-item name="2">标题2</w-tab-item>-->
                    <!--<w-tab-item name="3">标题3</w-tab-item>-->
                    <!--&lt;!&ndash;1插槽2&ndash;&gt;-->
                    <!--<template slot="actions">-->
                        <!--<w-button>添加tab</w-button>-->
                    <!--</template>-->
                <!--</w-tab-head>-->
                <!--<w-tab-body>-->
                    <!--<w-tab-pane  name="1">内容1</w-tab-pane>-->
                    <!--<w-tab-pane  name="2">内容2</w-tab-pane>-->
                    <!--<w-tab-pane  name="3">内容3</w-tab-pane>-->
                <!--</w-tab-body>-->
            <!--</w-tab>-->
        <!--</div>-->



        <!--&lt;!&ndash;1双向绑定2：在使用collapse的地方使用sync&ndash;&gt;-->
        <!--&lt;!&ndash;<w-collapse  :selected = "selectTab" @update:selected="selectTab = $event" single>&ndash;&gt;-->
        <!--<w-collapse  :selected.sync="selectCollapse" single>-->
            <!--<w-collapse-item title="这是标题1" :item-key="'a'">-->
                <!--这是内容1-->
            <!--</w-collapse-item>-->

            <!--<w-collapse-item title="这是标题2" :item-key="'b'">-->
                <!--这是内容2-->
            <!--</w-collapse-item>-->

            <!--<w-collapse-item title="这是标题3" :item-key="'c'">-->
                <!--这是内容3-->
            <!--</w-collapse-item>-->

            <!--<w-collapse-item title="这是标题4" :item-key="'d'">-->
                <!--这是内容4-->
            <!--</w-collapse-item>-->
        <!--</w-collapse>-->

        <!--<div >-->
            <!--<w-cascader :source.sync="cascaderData" height="200px" :selected="selectedCascader" @update:selected="changeSelectcascader" :load-data="loadData"></w-cascader>-->
        <!--</div>-->
        <!--<div>12332</div>-->

        <!--<div style="margin: 100px">-->
            <!--<w-slide :select.sync="select" :autoPlay.sync="autoPlay" class="slide-wrapper">-->
                <!--&lt;!&ndash;1代替1&ndash;&gt;-->
                <!--<w-slide-item name="a">-->
                    <!--<div class="box">1</div>-->
                <!--</w-slide-item>-->
                <!--<w-slide-item name="b">-->
                    <!--<div  class="box">2</div>-->
                <!--</w-slide-item>-->
                <!--<w-slide-item name="c">-->
                    <!--<div  class="box">3</div>-->
                <!--</w-slide-item>-->
            <!--</w-slide>-->

        <!--</div>-->


        <!--<div style="margin: 100px;">-->
            <!--<w-nav :selected.sync="selectNav" vertical style="width: 200px">-->
                <!--<w-nav-item name="home">首页</w-nav-item>-->
                <!--<w-nav-sub name="about">-->
                    <!--<template slot="title">关于</template>-->
                    <!--<w-nav-item name="culture">企业文化</w-nav-item>-->
                    <!--<w-nav-item name="developers">开发团队</w-nav-item>-->
                    <!--<w-nav-sub name="contact">-->
                        <!--<template slot="title">联系方式</template>-->
                        <!--<w-nav-item name="wechat">微信</w-nav-item>-->
                        <!--<w-nav-item name="qq">QQ</w-nav-item>-->
                        <!--<w-nav-sub name="phone">-->
                            <!--<template slot="title">手机</template>-->
                            <!--<w-nav-item name="cm">移动</w-nav-item>-->
                            <!--<w-nav-item name="cu">联通</w-nav-item>-->
                            <!--<w-nav-item name="cn">电信</w-nav-item>-->
                        <!--</w-nav-sub>-->
                    <!--</w-nav-sub>-->

                <!--</w-nav-sub>-->
                <!--<w-nav-item name="hire">招聘</w-nav-item>-->
            <!--</w-nav>-->
        <!--</div>-->

        <!--<div style="margin: 100px">-->
            <!--<w-pager :total-page="15" :current-page.sync="page"/>-->
        <!--</div>-->

        <!--<div style="margin: 10px;">-->
            <!--&lt;!&ndash;5步骤2：添加bordered&ndash;&gt;-->
            <!--<w-table-->
                    <!--:columns="columns"-->
                    <!--:data-source="dataSource"-->
                    <!--:selectItem.sync="selectItem"-->
                    <!--:sorter.sync="sorter"-->
                    <!--@update:sorter="getNewSort"-->
                    <!--:loading="loading"-->
                    <!--:height="400"-->
                    <!--bordered-->
            <!--&gt;-->
                <!--&lt;!&ndash;18按钮2: 使用table的地方添加tempalte，这是vue的缺陷，如果想给组件添加dom节点，必须通过template&ndash;&gt;-->
                <!--&lt;!&ndash;18按钮5: 通过 slot-scope 拿到组件传出来的数据&ndash;&gt;-->
                <!--<template slot-scope="item">-->
                    <!--&lt;!&ndash;18按钮6： 使用组件传出来的数据&ndash;&gt;-->
                    <!--&lt;!&ndash;19检查2：确认table组件内部有没有使用template  &ndash;&gt;-->
                    <!--<w-button @click="ViewCol(item.item)">查看</w-button>-->
                    <!--<w-button @click="deleteCol(item.item)">删除</w-button>-->
                <!--</template>-->
            <!--</w-table>-->
        <!--</div>-->


        <!--<div  style="display:flex;justify-content: center;">-->
            <!--<div style="width:600px;">-->
                <!--<w-sticky :top="100">-->
                    <!--<template>-->
                        <!--<button>test</button>-->
                    <!--</template>-->
                <!--</w-sticky>-->
                <!--<p>1</p>-->
                <!--<p>2</p>-->
                <!--<p>3</p>-->
                <!--<p>4</p>-->
                <!--<p>5</p>-->
                <!--<p>6</p>-->
                <!--<p>7</p>-->
                <!--<p>8</p>-->
                <!--<p>9</p>-->
                <!--<p>10</p>-->
                <!--<p>11</p>-->
                <!--<p>12</p>-->
                <!--<p>13</p>-->
                <!--<p>14</p>-->
                <!--<p>15</p>-->
                <!--<p>16</p>-->
                <!--<p>17</p>-->
                <!--<p>18</p>-->
                <!--<p>19</p>-->
                <!--<p>20</p>-->
                <!--<p>21</p>-->
                <!--<p>22</p>-->
                <!--<p>23</p>-->
                <!--<p>24</p>-->
                <!--<p>25</p>-->
                <!--<p>26</p>-->
                <!--<p>27</p>-->
                <!--<p>28</p>-->
                <!--<p>29</p>-->
                <!--<p>30</p>-->
                <!--<p>31</p>-->
                <!--<p>32</p>-->
                <!--<p>33</p>-->
                <!--<p>34</p>-->
                <!--<p>35</p>-->
                <!--<p>36</p>-->
                <!--<p>37</p>-->
                <!--<p>38</p>-->
                <!--<p>39</p>-->
                <!--<p>40</p>-->
                <!--<p>41</p>-->
                <!--<p>42</p>-->
                <!--<p>43</p>-->
                <!--<p>44</p>-->
                <!--<p>45</p>-->
                <!--<p>46</p>-->
                <!--<p>47</p>-->
                <!--<p>48</p>-->
                <!--<p>49</p>-->
                <!--<p>50</p>-->
            <!--</div>-->
        <!--</div>-->


        <!--<div style="margin: 100px; height:100px;">-->
            <!--<div> picker 组件外部知道picker选择的是{{this.selectDate}} </div>-->
            <!--<w-data-picker :scope="[new Date(2000,3), new Date(2020, 4)]" @change="getSelectDate"/>-->
        <!--</div>-->


        <!--<div style="margin:300px">-->
            <!--<w-popover position="bottom" trigger="hover">-->
                <!--<w-button>popover</w-button>-->
                <!--&lt;!&ndash;10获取2: 在template中写slot-scope="slotProps"&ndash;&gt;-->
                <!--<template slot="content" slot-scope="slotProps">-->
                    <!--<div>-->
                        <!--这里是popover的内容-->
                        <!--<w-button @click="slotProps.close">关闭</w-button>-->
                    <!--</div>-->
                <!--</template>-->
            <!--</w-popover>-->
        <!--</div>-->



        <w-upload></w-upload>


    </div>
</template>

<script>

    // 所有组件的入口

    import Vue from "vue";
    import Button from "./button/button.vue"
    import ButtonGroup from "./button/button-group"
    import Input from "./input"
    import Row from "./grid/row"
    import Col from "./grid/col"
    import Layout from "./layout/layout"
    import Header from "./layout/header"
    import Sider from "./layout/sider"
    import Content from "./layout/content"
    import Footer from "./layout/footer"
    import Toast from "./toast"
    import Popover from "./popover"
    import Collapse from "./collapse/collapse"
    import CollapseItem from "./collapse/collapse-item"
    import Tab from "./tab/tab"
    import TabHead from "./tab/tab-head"
    import TabBody from "./tab/tab-body"
    import TabPane from "./tab/tab-pane"
    import TabItem from "./tab/tab-item"
    import toastPlugin from "./toastPlugin"
    import Cascader from "./cascader/cascader"
    import Slide from "./slide/slide"
    import SlideItem from "./slide/slideItem"
    import dbArray from "../tests/fixtures/db"
    import WNav from "./nav/nav"
    import WNavSub from "./nav/nav-sub"
    import WNavItem from "./nav/nav-item"
    import Pager from "./pager"
    import Table from "./table"
    import Sticky from "./sticky"
    import DataPicker from "./data-picker/data-picker"
    import UpLoad from "./upload"

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
    Vue.component("w-slide", Slide);
    Vue.component("w-slide-item", SlideItem);
    Vue.component("w-nav", WNav);
    Vue.component("w-nav-sub", WNavSub);
    Vue.component("w-nav-item", WNavItem);
    Vue.component("w-pager", Pager);
    Vue.component("w-table", Table);
    Vue.component("w-sticky", Sticky)
    Vue.component("w-data-picker", DataPicker)
    Vue.component("w-upload", UpLoad)





    //4数据2
    // cascader动态获取内容, 异步, 回调方式
    function ajax(parent_id = 0, resolve ,reject){
        let id = setTimeout(()=>{
            const result = dbArray.filter((obj)=>{
                if(obj.parent_id === parent_id){
                    return obj
                }
            })
            resolve(result)
        }, 2000)
        return id
    }

    //4数据2
    // promise
    function ajax2(parent_id = 0){
        return new Promise((resolve, reject)=>{
            let id = setTimeout(()=>{
                let result = dbArray.filter((obj)=>{
                    if(obj.parent_id === parent_id){
                        return obj
                    }
                })


                result.forEach((obj)=>{
                    const childrenNode = dbArray.filter((item)=>{
                        if(item.parent_id === obj.id){
                            return item
                        }
                    })
                    obj.isLeaf = childrenNode.length <= 0;
                })


                resolve(result)
            }, 1000)
            return id
        })
    }


    export default {
        data(){
            return {
                selectCollapse: ['b'],
                test: "321321",
                selectedTab: "2",
                //4数据1
                cascaderData: [],
                selectedCascader: [],
                select: "a",
                autoPlay:false,
                selectNav: ["hire"],
                page:3,
                // 18按钮1： 添加  {name: "操作", dataIndex: "actions"} 其中 dataIndex: "actions" 只能这样写
                columns:[{name: "姓名", dataIndex: "userName", width:100}, {name: "分数", dataIndex: "score", width:100},{name: "年龄", dataIndex: "age"},{name: "操作", dataIndex: "actions"}],
                dataSource: [
                    // 16展示1： 传入参数添加description
                    {userName: "饶家俊", score: "100", id: 1, age: 1,description: "我是饶家俊"},
                    {userName: "xx", score: "33", id: 2, age: 3},
                    {userName: "rr", score: "1", id:3, age: 5, description: "我是饶家俊1"},
                    {userName: "r", score: "2", id:4, age: 6},
                    {userName: "d", score: "3", id:5, age: 12},
                    {userName: "f", score: "4", id:6, age: 7},
                    {userName: "v", score: "5", id:7, age: 5},
                    {userName: "x", score: "6", id:8, age: 77},
                    {userName: "a", score: "12", id:9, age: 8},
                    {userName: "f", score: "33", id:10, age: 12},
                    {userName: "g", score: "4", id:11, age: 333},
                    {userName: "b", score: "5", id:12, age: 4},
                    {userName: "v", score: "6", id:13, age: 6},
                    {userName: "z", score: "88", id:14, age: 7},
                ],
                //6数据2：父组件传给子组件数据，要求子组件根据数据更新ui
                selectItem:[],
                sorter: {
                    score: ""
                },
                loading: false,
                selectDate: "",
            }
        },

        //4数据3
        created(){

            // 动态获取数据
            ajax2(0).then((resolve)=>{
                this.cascaderData = resolve;
            })

            //静态获取数据
            // this.cascaderData = [{
            //     name: 'zhejiang',
            //     children: [{
            //         name: 'hangzhou',
            //         children: [{
            //             name: 'xihu',
            //         }],
            //     }],
            // }, {
            //     name: 'jiangsu',
            //     children: [{
            //         name: 'Nanjing',
            //         children: [{
            //             name: 'zhonghuamen',
            //         }],
            //     }],
            // }];
        },
        methods:{
            ViewCol(data){
                console.log(data);
                console.log("view");
            },
            deleteCol(data){
                console.log(data);
                console.log("dele");
            },
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
                                console.log(123);
                            }
                        }
                    }
                )
            },
            changeSelectcascader($event){
                const clickId = $event[0].id;
                this.selectedCascader = $event
            },

            // 根据点击的省份， 通过ajax获取省份城市，将省份城市通过回调传出去
            loadData(node, fn){
                const {id}  = node;
                ajax2(id).then((result)=>{
                    fn(result)
                })
            },
            getNewSort(a, b, c){
                const dataIndex = arguments[1]
                const sort = arguments[2]
                this.loading = true
                // 发送ajax请求， 我这里只做模拟
                setTimeout(()=>{
                    this.dataSource.sort((obj1, obj2)=>{
                        if(sort === "desc"){
                            return obj1[dataIndex] - obj2[dataIndex]
                        } else {
                            return obj2[dataIndex] - obj1[dataIndex]
                        }
                    })
                    this.loading = false

                }, 2000)
            },
            onClosePopoverContent(){
                console.log("onClosePopoverContent");
            },
            getSelectDate(date){
                console.log(date);
                const selectDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
                this.selectDate = selectDate
            }
        },
        mounted() {
            //6数据4： 测试数据变了，UI是否跟着变化
            // setTimeout(()=>{
            //     this.selectItem = []
            // }, 3000)
        }

    }

</script>

<style lang="scss" scoped>
    .slide-wrapper{
        width:100%;
        .box{
            border: 1px solid green;
            width:100%;
            height:350px;
        }
    }

</style>
