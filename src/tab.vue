<template>
    <div class="tab">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from "vue"
    export default {
        props:{
            selected: {
                type: [Number, String]
            }
        },
        data(){
            return {
                eventBus: new Vue()
            }
        },
        provide(){
            return {
                eventBus: this.eventBus,
            }
        },
        mounted() {
            this.eventBus.$emit("toSon", this.selected)

            this.eventBus.$on("toTab", (selectedTab)=>{
                // 通知app修改数据  +  传输新的数据给pane
                this.$emit("update:selected", selectedTab)
                this.eventBus.$emit("toSon", selectedTab)
            })
        }
    }
</script>

<style lang="scss" scoped>
</style>
