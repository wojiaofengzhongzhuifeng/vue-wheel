<template>
    <div class="tabItem" @click="clickTabItem" :class="classes" ref="item" :data-name='name'>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"wheelTabItem",
        inject: ["eventBus"],

        props:{
            name:{
                type: [Number, String]
            }
        },

        data(){
            return {
                activeClass: false
            }
        },

        computed:{
            classes(){
                if(this.activeClass){
                    return "active"
                } else {
                    return ""
                }
            }
        },

        methods:{
            clickTabItem(){
                const itemName = this.name;
                this.eventBus.$emit("toParent", itemName, this.$refs.item);
            }
        },

        created() {
            // 监听selectedTab事件
            this.eventBus.$on("toSon", (selectTab)=>{
                if(selectTab ===  this.name){
                    this.activeClass = true
                } else {
                    this.activeClass = false
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import "../var";
    .tabItem{
        padding: 12px 16px;
        margin-right:20px;
        font-weight: $font-weight;
        cursor: pointer;
        &.active{
            color: $font-color-active;
        }
    }
</style>
