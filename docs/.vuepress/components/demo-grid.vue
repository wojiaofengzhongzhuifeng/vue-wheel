<template>
    <div  class="grid-wrapper">
        <div class="example">
            <w-row gutter="20px">
                <w-col :span="4">
                    <div style="border:1px solid ;">
                        侧边栏
                    </div>
                </w-col>
                <w-col :span="15" offset="5">
                    <div style="border:1px solid ;">
                        主要内容
                    </div>
                </w-col>
            </w-row>
            <p>说明：</p>
            <p>span: col占row的份数</p>
            <p>offset: col组件左侧透明份数</p>
            <p>gutter: row组件中相邻col组件的间隔</p>

            <pre><code>{{code1}}</code></pre>
        </div>

        <div class="example">
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
            <p>说明：col组件可以添加phone，ipad，narrowPc，pc，widthPc，widthWidthPc对象，用于适应不同屏幕宽度</p>

            <pre><code>{{code2}}</code></pre>
        </div>
    </div>
</template>

<script>
    import Row from "../../../src/row"
    import Col from "../../../src/col"
    export default {
        components: {
            "w-row": Row,
            "w-col": Col,
        },
        data() {
            return {
                code1: `
<w-row gutter="20px">
    <w-col :span="4">
        <div style="border:1px solid ;">
            侧边栏
        </div>
    </w-col>
    <w-col :span="15" offset="5">
        <div style="border:1px solid ;">
            主要内容
        </div>
    </w-col>
</w-row>`,
                code2: `
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
</w-row>`,
            }
        },
    }
</script>

<style lang="scss" scoped>
    .grid-wrapper{
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