<template>
    <div class="tabItem" @click="xxx" :class="classes">
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
                type: [String, Number],
                required: true,
            }
        },

        data() {
            return {
                active: {
                    type: Boolean,
                    default: false,
                }
            }
        },

        computed:{
            classes(){
                if(this.active){
                    return "active"
                } else {
                    return "disActive"
                }
            }
        },

        // 4组件通信3: 通过inject属性拿到tab组件注入的数据
        inject: ["eventHi"],

        // 4组件通信4: 使用inject的数据
        created() {
            this.eventHi.$on("update:selectedData", (value)=>{
                this.active = this.name ===value
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
    .tabItem {
        padding: 0 2em;
        &.active {
            background: red;
        }
    }
</style>
