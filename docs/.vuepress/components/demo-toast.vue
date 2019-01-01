<template>
    <div class="toast-wrapper">
        <div class="example">
            <w-button @click="showToast">
                显示toast
            </w-button>
            <pre><code>{{code}}</code></pre>
        </div>

    </div>
</template>

<script>
    import Button from "../../../src/button"
    import toastPlugin from "../../../src/toastPlugin"

    import Vue from "vue"
    Vue.use(toastPlugin);



    export default {
        components: {
            "w-button": Button,
        },
        data() {
            return {
                code: `
// 第一步， 在合适的位置添加插件
Vue.use(toastPlugin);

// 第二步， 在合适的位置添加一个函数
function showToast(){
    this.$showToast(
        {
            position: "bottom",
            showToastMessage: "我觉得不行",
            closeButton:{
                text: "关闭",
                callback(){
                    console.log(123);
                }
            }
        }
    )
}

// 第三步， 在合适的地方触发上一步的函数
<w-button @click="showToast">
    显示toast
</w-button>
                `,
            }
        },
        methods:{
            showToast(){
                this.$showToast(
                    {
                        position: "bottom",
                        showToastMessage: "我觉得不行",
                        closeButton:{
                            text: "关闭",
                            callback(){
                                console.log(123);
                            }
                        }
                    }
                )
            }
        }
    }
</script>

<style lang="scss" scoped>
    .toast-wrapper{
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