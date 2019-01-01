<template>
    <div>
        <w-tab selected="1">
            <w-tab-head>
                <w-tab-item name="1">标题1</w-tab-item>
                <w-tab-item name="2">标题2</w-tab-item>
                <w-tab-item name="3">标题3</w-tab-item>
                <!--<template slot="actions">-->
                    <!--<w-button>添加tab</w-button>-->
                <!--</template>-->
            </w-tab-head>
            <w-tab-body>
                <w-tab-pane  name="1">内容1</w-tab-pane>
                <w-tab-pane  name="2">内容2</w-tab-pane>
                <w-tab-pane  name="3">内容3</w-tab-pane>
            </w-tab-body>
        </w-tab>
        <!--<pre><code>{{code}}</code></pre>-->
    </div>
</template>

<script>
    import Tab from "../../../src/tab"
    import TabHead from "../../../src/tab-head"
    import TabBody from "../../../src/tab-body"
    import TabPane from "../../../src/tab-pane"
    import TabItem from "../../../src/tab-item"
    import Button from "../../../src/button"
    export default {
        components: {
            "w-tab": Tab,
            "w-tab-head": TabHead,
            "w-tab-body": TabBody,
            "w-tab-item": TabPane,
            "w-tab-pane": TabItem,
            "w-button": Button,
        },
        data() {
            return {
                code: ``
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>