<template>
    <div class="tabPane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        inject: ["eventHi"],

        created() {
            this.eventHi.$on("update:selectedData", (value)=>{
                console.log("this is pane", value);
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
