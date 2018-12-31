<template>
    <div  class="input-wrapper">
        <div class="example">
            <w-input></w-input>
            <p>说明：最简单的使用方法</p>
            <pre><code>{{code1}}</code></pre>
        </div>

        <div class="example">
            <w-input :icon="{name: 'setting', message:'设置'}"></w-input>
            <p>说明：输入框后接icon</p>
            <pre><code>{{code2}}</code></pre>
        </div>

        <div class="example">
            <w-input disabled></w-input>
            <p>说明：禁止输入</p>
            <pre><code>{{code3}}</code></pre>
        </div>

        <div class="example">
            <w-input @change="listenerChange"></w-input>
            <p>说明：监听change，input，focus，blur事件，listenerChange 回调函数的第一个参数是原生 event 对象</p>
            <pre><code>{{code4}}</code></pre>
        </div>

        <div class="example">
            <w-input :value="1111"></w-input>
            <p>说明：当添加value属性，表示该组件为单向数据流, 子组件通知父组件修改数据，不允许子组件修改自身数据</p>
            <pre><code>{{code5}}</code></pre>
        </div>

    </div>
</template>

<script>
    import Input from "../../../src/input"
    export default {
        components: {
            "w-input": Input
        },
        data() {
            return {
                code1: `<w-input></w-input>`,
                code2: `<w-input :icon="{name: 'setting', message:'设置'}"></w-input>`,
                code3: `<w-input disabled></w-input>`,
                code4: `<w-input @change="listenerChange"></w-input>`,
                code5: `<w-input :value="1111"></w-input>`
            }
        },
        methods:{
            listenerChange(e){
                console.log(e);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input-wrapper{
        margin-top: 10px;
        .example{
            margin: 10px 0;
            box-shadow: 0 0 1px grey;
            padding: 15px;
            > p{
                font-size: 12px;
            }
        }
        > div{
            margin-right: 10px;
        }
    }
</style>