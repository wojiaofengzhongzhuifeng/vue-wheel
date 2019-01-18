<template>
    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th v-for="head in columns">
                        {{head.name}}
                    </th>
                </tr>
            </thead>
            <tbody>
            <!--3循环1-->
                <tr v-for="data in dataSource">
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
    * */
    export default {
        props:{
            columns: {
                type: Array,
                required: true,
            },
            dataSource:{
                type: Array,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/var";
</style>
