<template>
    <div class="collapse-wrapper">
        <div class="example">
            <w-collapse  :selected.sync="selectTab" single>
                <w-collapse-item title="这是标题1" :item-key="'a'">
                    这是内容1
                </w-collapse-item>

                <w-collapse-item title="这是标题2" :item-key="'b'">
                    这是内容2
                </w-collapse-item>

                <w-collapse-item title="这是标题3" :item-key="'c'">
                    这是内容3
                </w-collapse-item>

                <w-collapse-item title="这是标题4" :item-key="'d'">
                    这是内容4
                </w-collapse-item>
            </w-collapse>
            <pre><code>{{code}}</code></pre>
        </div>
    </div>
</template>

<script>
    import Collapse from "../../../src/collapse"
    import CollapseItem from "../../../src/collapse-item"

    export default {
        components: {
            "w-collapse": Collapse,
            "w-collapse-item": CollapseItem
        },
        data() {
            return {
                selectTab: ["a"],
                code: `
<w-collapse  :selected.sync="selectTab" single>
    <w-collapse-item title="这是标题1" :item-key="'a'">
        这是内容1
    </w-collapse-item>

    <w-collapse-item title="这是标题2" :item-key="'b'">
        这是内容2
    </w-collapse-item>

    <w-collapse-item title="这是标题3" :item-key="'c'">
        这是内容3
    </w-collapse-item>

    <w-collapse-item title="这是标题4" :item-key="'d'">
        这是内容4
    </w-collapse-item>
</w-collapse>`
            }
        }
    }
</script>


<style lang="scss" scoped>
    .collapse-wrapper{
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