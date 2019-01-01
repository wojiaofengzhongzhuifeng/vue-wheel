<template>
    <div class="tab" ref="tab">
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
                eventBus: new Vue(),
                tabLeft: 0,
            }
        },
        provide(){
            return {
                eventBus: this.eventBus,
            }
        },
        mounted() {

            setTimeout(()=>{
                this.eventBus.$emit("toSon", this.selected)
            }, 10);

            const {left} = this.$refs.tab.getBoundingClientRect();
            this.tabLeft = left;


            this.eventBus.$on("toParent", (selectedTab)=>{
                // 通知app修改数据  +  传输新的数据给pane
                this.$emit("update:selected", selectedTab)
                this.eventBus.$emit("toSon", selectedTab)
            })
        }
    }
</script>

<style lang="scss" scoped>
    .tab{
    }
</style>
