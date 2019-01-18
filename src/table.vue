<template>
    <div class="table-wrapper">
        <!--5步骤3：如果bordered为true， 那么有 bordered class-->
        <table :class="{bordered, compacted}">
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" ref="selectAllCheckbox" @change="selectAll($event)" :checked="allSelect">
                    </th>
                    <th v-for="head in columns">
                        {{head.name}}
                    </th>
                </tr>
            </thead>
            <tbody>
            <!--3循环1-->
                <tr v-for="data in dataSource">
                    <td>
                        <input type="checkbox" @change="clickCheckBox(data, $event)" :checked="checkboxIfchecked(data)">
                    </td>
                    <td v-for="column in columns">
                        {{data[column.dataIndex]}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    /*
    *1. 原生html table 标签使用： tr =》 table row（父标签是thead 或者 tbody，子标签是td或者th）
    *2. 只要使用v-for指令，重复的标签必须写key属性
    *3. v-for 重复的标签是什么？ 重复的次数取决什么数据？ 3循环
    *4。 防止两列之间空隙 4空隙
    *5. 添加class步骤 5步骤
    *6. 一次完整的单向数据流 6数据
    *7. watch 与 computed 区别
    *  - 相同点：观测数据
    *  - 不同点：watch 观测数据变化后，   执行代码
    *          computed 观测数据变化后， 改变数据
    * */
    export default {
        data(){
            return {
                allSelect: false,
            }
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
            }
        },
        watch:{
            selectItem(){
                if(this.selectItem.length === 0){
                    this.$refs.selectAllCheckbox.indeterminate = false
                } else if (this.selectItem.length >=1 && this.selectItem.length < this.dataSource.length){
                    this.$refs.selectAllCheckbox.indeterminate = true
                } else {
                    this.$refs.selectAllCheckbox.indeterminate = false
                    this.allSelect = true
                }
            }
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
            selectAll($event){
                this.allSelect = !this.allSelect
                if($event.target.checked){
                    this.$emit("update:selectItem", this.dataSource)
                } else {
                    this.$emit("update:selectItem", [])
                }

            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/var";
    .table-wrapper{
        table{
            width:100%;
            text-align: left;
            /*4空隙1*/
            border-collapse: collapse;
            border-spacing: 0;
            td, th{
                padding: 8px 10px;
                border-bottom: $border ;
            }
            tbody > tr:nth-child(even){
                background: $line-grey;
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
        }

    }
</style>
