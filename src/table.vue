<template>
    <div class="table-wrapper" ref="wrapper">
        <div class="table-container" :style="{overflow:'auto'}" ref="container">
            <!--5步骤3：如果bordered为true， 那么有 bordered class-->
            <table :class="{bordered, compacted}" ref="table">
                <thead ref="head">
                    <tr ref="tableTr">
                        <th style="width: 3em" v-if="showExpandCol"></th>
                        <th style="width: 3em" v-if="checkAble">
                            <input type="checkbox" ref="selectAllCheckbox" @change="selectAllItems($event)" :checked="allSelect">
                        </th>
                        <th v-for="head in columns" @click="changeSort(head.dataIndex)" :style="{width: head.width + 'px'}">
                            <!--11对齐2： 在这两个（span 和 inline-xxx）使用新的div包裹-->
                            <!--20ref: ref 还可以是通过判断得到的-->
                            <div class="table-wrapper-header" :ref="head.dataIndex === 'actions' ? 'test' : ''">
                                {{head.name}}
                                <span class="icon-wrapper" v-if="sortIconStyle(head.dataIndex)">
                                    <!--9监听1-->
                                    <icon icon-name="caret-up" :class="sortIconStyle(head.dataIndex,'asc')"></icon>
                                    <icon icon-name="caret-down" :class="sortIconStyle(head.dataIndex,'desc')"></icon>
                                </span>
                            </div>
                            <!--11对齐1： 之前-->
                            <!--{{head.name}}-->
                            <!--<span class="icon-wrapper" v-if="sortIconStyle(head.dataIndex)">-->
                            <!--&lt;!&ndash;9监听1&ndash;&gt;-->
                            <!--<icon icon-name="caret-up" :class="sortIconStyle(head.dataIndex,'asc')" @click="onchangeSort(head.dataIndex, 'asc')"></icon>-->
                            <!--<icon icon-name="caret-down" :class="sortIconStyle(head.dataIndex,'desc')" @click="onchangeSort(head.dataIndex, 'desc')"></icon>-->
                            <!--</span>-->
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!--3循环1-->
                    <!--17标签1 ：之前只有tr标签，现在又有一个tr，且两个tr都使用data数据，所以使用template-->
                    <template v-for="data in dataSource">
                        <tr>
                            <td style="width: 3em" v-if="showExpandCol">
                                <!--16展示3： 有 description 才展示 + 号-->
                                <span v-if="data.description">
                                    <icon icon-name="minus-square" v-if="inExpendedIds(data.id)" @click="toggleExpand(data.id)"></icon>
                                    <icon icon-name="plus-square" v-else @click="toggleExpand(data.id)"></icon>
                                </span>

                            </td>
                            <td style="width: 3em"  v-if="checkAble">
                                <input type="checkbox" @change="clickCheckBox(data, $event)" :checked="checkboxIfchecked(data)">
                            </td>
                            <!--18按钮3.1： 使用template， 这里的template相当于固定v-if的作用域，用于展示正常数据或者dom-->
                            <template>
                                <td v-for="column in columns" :style="{width: column.width + 'px'}" v-if="column.dataIndex !== 'actions'">
                                    {{data[column.dataIndex]}}
                                </td>
                                <td v-else >
                                    <!--18按钮4： table组件在slot添加任何属性, -->
                                    <!--18按钮3：将 dom 节点传入table组件-->
                                    <div style="display: inline-flex;" ref="actions">
                                        <slot :item="data"></slot>
                                    </div>
                                </td>
                            </template>
                        </tr>
                        <!--16展示5 inExpendedIds 判断该数据的description是否展示-->
                        <tr v-if="data.description && inExpendedIds(data.id)">
                            <td :colspan="descriptionColSpan" style="background: #ebedf0">
                                {{data.description}}
                            </td>
                        </tr>
                    </template>
                    <!--<tr v-for="data in dataSource">-->
                        <!--<td style="width: 3em" v-if="showExpandCol">-->
                            <!--<icon icon-name="plus-square" v-if="data.description"></icon>-->
                        <!--</td>-->
                        <!--<td style="width: 3em">-->
                            <!--<input type="checkbox" @change="clickCheckBox(data, $event)" :checked="checkboxIfchecked(data)">-->
                        <!--</td>-->
                        <!--<td v-for="column in columns" :style="{width: column.width + 'px'}">-->
                            <!--{{data[column.dataIndex]}}-->
                        <!--</td>-->
                    <!--</tr>-->
                </tbody>
            </table>
        </div>
        <div class="loading" v-if="loading">
            <icon icon-name="reload"></icon>
        </div>
    </div>
</template>

<script>
    /*
    *1. 原生html table 标签使用： tr =》 table row（父标签是thead 或者 tbody，子标签是td或者th）
    *2. 只要使用v-for指令，重复的标签必须写key属性
    *3. v-for 重复的标签是什么？ 重复的次数取决什么数据？ 3循环
    *4。 防止两列之间空隙 4空隙
    *5. 添加class步骤 5步骤
    *6. 一次完整的单向数computed据流 6数据
    *7. watch 与  computed 区别
    *  - 相同点：观测数据
    *  - 不同点：watch 观测数据变化后，   执行代码
    *          computed 观测数据变化后， 改变数据
    *8。 selectAllCheckbox 的ui展示思路很重要 8思路
    *9。 为什么监听不了icon的click事件？？ 9监听
    *10. div垂直居中  http://js.jirengu.com/riduvakare/1/edit?html,css,js,console,output
    *11。不要尝试对齐一个span标签（display:inline-xxx）和一段文字 11对齐
    *12. 要移除事件监听 12监听
    *13。 封装函数时， 尽量不要带参数 13参数
    *14. 善后工作 14善后
    *15. 给事件绑定事件，需要这样处理 15处理
    *16。 展开栏 ui 展示 16展示
    *17。 template 标签使用 17标签
    *18. 添加操作按钮 18按钮
    *19。 检查使用table组件时有没有添加 template 19检查
    *20. ref 20ref
    * */
    import Icon from "./icon"
    export default {
        data(){
            return {
                //16展示4： 数组内是 id ,表示的是展开的数据
                expandItems:[1]
            }
        },
        components:{
            Icon
        },
        props:{
            columns: {
                type: Array,
                required: true,
            },
            dataSource:{
                type: Array,
            },
            //5步骤1
            bordered:{
                type: Boolean,
                default: false,
            },
            compacted:{
                type: Boolean,
                default: false,
            },
            selectItem:{
                type: Array,
            },
            sorter:{
                type: Object,
            },
            loading:{
                type: Boolean,
                default: false,
            },
            height:{
                type: Number,
            },
            checkAble:{
                type: Boolean,
                default: true,
            }
        },
        watch:{
            selectItem(){
                if(this.selectItem.length >=1 && this.selectItem.length < this.dataSource.length){
                    this.$refs.selectAllCheckbox.indeterminate = true
                } else {
                    this.$refs.selectAllCheckbox.indeterminate = false
                }
            },

        },
        computed:{
            //8思路1： 建立ui与数据的联系
            allSelect(){
                let allItems = this.dataSource.map(obj=>obj.id).sort((a, b)=>a- b)
                let selectItems = this.selectItem.map(obj=>obj.id).sort((a, b)=>a- b)
                let equal = true

                for(let i=0;i<=allItems.length - 1;i++){
                    if(allItems[i] !== selectItems[i]){
                        equal = false
                        break
                    }
                }
                return equal
            },
            // 16展示2： 只要数据有一个 description 就要展示第一列
            showExpandCol(){
                let show = false
                for(let i=0;i<=this.dataSource.length -1;i++){
                    if(this.dataSource[i].description){
                        show = true
                        break
                    }
                }
                return show
            },
            descriptionColSpan(){
                let length = this.columns.length
                if(this.checkAble){length += 1}
                if(this.showExpandCol){length += 1}
                return length
            }
        },
        mounted(){
            // 13参数2： 现在将copyTable放到this上
            this.copyTable = this.$refs.table.cloneNode(false)
            // this.updateCopyTableWidth()
            this.copyTable.classList.add("copyTableHead")
            this.copyTable.appendChild(this.$refs.head)
            this.$refs.wrapper.appendChild(this.copyTable)
            const {height} = this.$refs.head.getBoundingClientRect()
            this.$refs.container.style.height = this.height - height + "px"
            this.$refs.container.style.marginTop = height + "px"
            // 12监听1： 本能会这样写
            // window.onresize = ()=>{
            //     this.updateCopyTableWidth()
            // }

            // 15处理1: 本能会这样写
            // window.addEventListener("resize", this.updateCopyTableWidth)

            // 15处理2：应该这样写
            // this.onWindowResize = () => this.updateCopyTableWidth()
            // window.addEventListener('resize', this.onWindowResize)

            //19检查1
            if(this.$scopedSlots.default()){
                // js获取按钮的总宽度
                let actionsWidth = getComputedStyle(this.$refs.actions[0]).getPropertyValue("width")
                this.$refs.test[0].parentNode.style.width = actionsWidth
                this.$refs.actions[0].parentNode.style.width = actionsWidth
            } else {
                console.log("table标签内没有template");

            }

        },
        // 14善后
        beforeDestroy(){
            // 15处理1
            // window.removeEventListener("resize", this.updateCopyTableWidth)

            // 15处理2
            // window.removeEventListener('resize', this.onWindowResize)

            this.copyTable.remove()
        },
        methods:{
            //6数据1: 子组件将数据传出去
            clickCheckBox(data, $event){
                let copy = JSON.parse(JSON.stringify(this.selectItem))
                if($event.target.checked){
                    copy.push(data)
                    this.$emit("update:selectItem", copy)
                } else {
                    let filterSelectItems = copy.filter((obj)=>obj.id !== data.id)
                    this.$emit("update:selectItem", filterSelectItems)

                }
            },
            // 6数据3： 重点！为了能让 需求："父组件传给子组件的数据发生变化，子组件更新ui" 实现（数据与ui同步）
            // 本来应该把 checkboxIfchecked 作为 computed ，但是computed不支持传入参数，所以这个计算属性放到methods，也是可以实现同步的
            checkboxIfchecked(data){
                if(this.selectItem.filter((obj)=>obj.id === data.id).length >= 1){
                    return true
                } else {
                    return false
                }
            },
            selectAllItems($event){
                //8思路2：有了1步骤之后， 只需关心数据的变化
                if($event.target.checked){
                    this.$emit("update:selectItem", this.dataSource)
                } else {
                    this.$emit("update:selectItem", [])
                }

            },
            sortIconStyle(dataIndex, sort){
                let allSortIndexes = Object.keys(this.sorter)
                if(allSortIndexes.indexOf(dataIndex) >=0){
                    if(this.sorter[dataIndex] === ""){
                        return "nosort"
                    } else if (this.sorter[dataIndex] === sort){
                        return "active"
                    } else {
                        return true
                    }
                } else {
                    return false
                }
            },
            onchangeSort(dataIndex, sort){
                let copy = JSON.parse(JSON.stringify(this.sorter))
                if(copy[dataIndex] === sort){
                    copy[dataIndex] = ""
                } else {
                    copy[dataIndex] = sort
                }
                this.$emit("update:sorter", copy, dataIndex, sort)
            },
            changeSort(dataIndex){
                if(this.sorter[dataIndex] === ""){
                    this.onchangeSort(dataIndex, "asc")
                } else if (this.sorter[dataIndex] === "asc"){
                    this.onchangeSort(dataIndex, "desc")
                } else if (this.sorter[dataIndex] === "desc"){
                    this.onchangeSort(dataIndex, "")
                } else {
                    console.log("这里");
                }
            },
            inExpendedIds (id) {
                return this.expandItems.indexOf(id) >= 0
            },
            // 16展示6： 如果点击的id在 expandItems 内， 删除。如果点击的 id不在 expandItems 内，添加
            toggleExpand (id) {
                if (this.inExpendedIds(id)) {
                    this.expandItems.splice(this.expandItems.indexOf(id), 1)
                } else {
                    this.expandItems.push(id)
                }
            },
            /*
            updateCopyTableWidth(){
                console.log("upd1ata");
                let tableChildren = Array.from(this.$refs.table.childNodes)


                // 获取原table的head的每一列的宽度
                let tdWidth = []
                tableChildren.forEach((dom)=>{
                    if(dom.tagName === "THEAD"){
                        let trChildren = Array.from(dom.childNodes[0].childNodes)
                        trChildren.forEach((dom)=>{
                            let domPaddingLeft = parseInt(window.getComputedStyle(dom).paddingLeft);
                            const {width} = dom.getBoundingClientRect()
                            let widthNumber = width - 2 * domPaddingLeft + "px"
                            tdWidth.push(widthNumber)
                        })
                    }
                })

                // 13参数1 原本copyTable是通过参数传过来的
                let copyTableChildren = Array.from(this.copyTable.childNodes)
                copyTableChildren.forEach((dom)=>{
                    if(dom.tagName !== "THEAD"){
                        dom.remove()
                    } else {
                        let trChildren = Array.from(dom.childNodes[0].childNodes)
                        trChildren.forEach((dom, index)=>{
                            dom.style.width = tdWidth[index]
                        })
                    }
                })
            }
            */
        }
    }
</script>
<style lang="scss" scoped>

    @import "../styles/var";
    .table-wrapper{
        position: relative;
        overflow: auto;
        table{
            width:100%;
            text-align: left;
            /*4空隙1*/
            border-collapse: collapse;
            border-spacing: 0;
            td, th{
                padding: 8px 10px;
                border-bottom: $border ;
                &:hover{
                    background: $backgroud-light;
                    cursor: pointer;
                }

            }
            /*11对齐3： 包裹div中添加*/
            th > .table-wrapper-header{
                display: flex;
                align-items: center;
                .icon-wrapper{
                    position: relative;
                    top: 4px;
                }
            }
            tbody > tr:nth-child(even){
            }
            /*5步骤4：bordered 添加合适的style*/
            &.bordered{
                td, th{
                    padding: 8px 10px;
                    border: $border ;
                }
            }
            &.compacted{
                td, th{
                    padding: 3px 5px;
                }
            }
            .icon-wrapper{
                display: inline-flex;
                flex-direction: column;
                svg{
                    width:1em;
                    height:1em;
                    color: $line-grey;
                    cursor: pointer;
                }
                svg:first-child{
                    position: absolute;
                    bottom:0px;

                }
                svg:last-child{
                    position: absolute;
                    bottom:-10px;
                }
                svg.active{
                    color: $color-blue;
                }
            }
        }
        position: relative;
        .loading{
            position: absolute;
            top: 0;
            left:0;
            width:100%;
            height:100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0,0,0,0.1);
            svg{
                width:3em;
                height:3em;
                animation: loadingCircle 1s infinite linear;
            }
        }
        .copyTableHead{
            position: absolute;
            top: 0;
            left:0;
            background: white;
        }

    }
</style>
