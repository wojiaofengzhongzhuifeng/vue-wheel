<template>
    <div class="tabItem" @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            disabled: {
                type: Boolean,
                default: false,
            },
            name: {
                type: String | Number,
                required: true,

            }
        },
        // 4组件通信3: 通过inject属性拿到tab组件注入的数据
        inject: ["eventHi"],

        // 4组件通信4: 使用inject的数据
        created() {
            this.eventHi.$on("update:selectedData", (value)=>{
                console.log(value);
            })
        },

        methods: {
            xxx(){
                this.eventHi.$emit("update:selectedData", this.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
