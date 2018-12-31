<template>
    <div>
        <div class="button-wrapper">
            <w-button>普通按钮</w-button>
            <w-button icon-name="setting" icon-position="right">带有icon的按钮</w-button>
            <w-button :loading="true">可以选择正在加载</w-button>
            <w-button-group>
                <w-button icon-name="left" icon-position="left">回退</w-button>
                <w-button icon-name="right" icon-position="right">前进</w-button>
            </w-button-group>
        </div>
        <pre><code>{{code}}</code></pre>
    </div>
</template>

<script>
    import button from "../../../src/button"
    import buttonGroup from "../../../src/button-group"
    //
    export default {
        components: {
            "w-button": button,
            "w-button-group": buttonGroup,
        },
        data() {
            return {
                content: "te",
                code: `
    <w-button>普通按钮</w-button>
    <w-button icon-name="setting" icon-position="right">带有icon的按钮</w-button>
    <w-button :loading="true">可以选择正在加载</w-button>
    <w-button-group>
        <w-button icon-name="left" icon-position="left">回退</w-button>
        <w-button icon-name="right" icon-position="right">前进</w-button>
    </w-button-group>`
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button-wrapper {
        margin-top: 10px;
        display: flex;

        > button {
            margin: 0 10px;
        }

        > div {
            margin: 0 10px;

        }
    }
</style>