<template>
    <div class="collapseItem">
        <div class="title" @click="toggleShowItem">
            {{title}}
        </div>
        <div class="content" v-if="visible">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type: String,
            },
            itemKey: {
                type: [Number, String,]
            }
        },
        data() {
            return {
                visible: false,
            }
        },
        inject:["eventBus"],
        mounted() {
            this.eventBus.$on("toSon", (test)=>{
                this.visible = test.indexOf(this.itemKey) >= 0;
            })


        },
        methods:{
            toggleShowItem(){
                // this.visible = !this.visible;
                const emitObj = {
                    itemKey: this.itemKey,
                    visible: !this.visible
                };
                this.eventBus.$emit("toParent", emitObj)
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>
