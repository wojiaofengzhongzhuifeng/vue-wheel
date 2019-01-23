<template>
    <div class="popover-wrapper">
        <div class="example">
            <w-popover title="这是popover的标题" position="right" trigger="click">
                <w-button class="button">点击我2</w-button>
                <template slot="content" slot-scope="{close}">
                    <p>fdjskfldjsa</p>
                    <w-button @click="close">关闭</w-button>
                </template>
            </w-popover>
            <pre><code>{{code}}</code></pre>
        </div>
    </div>
</template>

<script>
    import Popover from "../../../src/popover";
    import Button from "../../../src/button/button"
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
    .popover-wrapper{
        margin-top: 10px;
        .example{
            margin: 10px 0;
            box-shadow: 0 0 1px grey;
            padding: 15px;
            > p{
                font-size: 12px;
            }
            .button{
                margin-bottom: 100px;
            }
        }
    }
</style>