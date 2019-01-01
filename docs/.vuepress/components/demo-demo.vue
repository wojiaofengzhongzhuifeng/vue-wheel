<template>
    <div class="xxx-wrapper">
        <div class="example">
            <!--组件-->
            <pre><code>{{code}}</code></pre>
        </div>
    </div>
</template>

<script>
    import Popover from "../../../src/popover";
    import Button from "../../../src/button";

    export default {
        components: {
            "w-popover": Popover,
            "w-button": Button,
        },
        data() {
            return {
                code: `
<w-popover title="这是popover的标题" position="right" trigger="click">
    <w-button>点击我2</w-button>
    <template slot="content" slot-scope="{close}">
        <p>fdjskfldjsa</p>
        <w-button @click="close">关闭</w-button>
    </template>
</w-popover>
                `
            }
        }
    }
</script>

<style lang="scss" scoped>
    .xxx-wrapper{
        margin-top: 10px;
        .example{
            margin: 10px 0;
            box-shadow: 0 0 1px grey;
            padding: 15px;
            > p{
                font-size: 12px;
            }
        }
    }
</style>