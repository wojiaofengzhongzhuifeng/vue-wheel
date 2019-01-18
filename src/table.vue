<template>
    <div class="table-wrapper">
        <!--5步骤3：如果bordered为true， 那么有 bordered class-->
        <table :class="{bordered, compacted}">
            <thead>
                <tr>
                    <th>
                        <input type="checkbox">
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
                        <input type="checkbox">
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
    * */
    export default {
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
            }
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
