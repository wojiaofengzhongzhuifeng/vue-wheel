<template>
    <div class="tabPane" v-if="visible">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props:{
            name: {
                type: [String, Number]
            }
        },
        data(){
            return {
                visible: false
            }
        },
        inject: ["eventBus"],
        mounted() {
            // 监听selectedTab事件
            this.eventBus.$on("toSon", (selectTab)=>{
                if(selectTab ===  this.name){
                    this.visible = true
                } else {
                    this.visible = false
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .tabItem{
        margin-right:20px;
    }
</style>
