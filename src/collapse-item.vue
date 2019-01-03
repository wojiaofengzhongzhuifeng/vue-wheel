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
    @import "./var";
    .collapseItem {
        > .title { border: 1px solid $grey; margin-top: -1px; margin-left: -1px; margin-right: -1px;
            min-height: 32px; display: flex; align-items: center; padding: 0 8px;
            background: lighten($grey, 8%);
            cursor: pointer;
        }
        &:first-child {
            > .title { border-top-left-radius: $border-radius; border-top-right-radius: $border-radius; }
        }
        &:last-child {
            > .title:last-child { border-bottom-left-radius: $border-radius; border-bottom-right-radius: $border-radius; }
        }
        > .content { padding: 8px; }
    }

</style>
