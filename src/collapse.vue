<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from "vue"
    export default {
        props:{
            selected:{
                type: Array,
            },
            single:{
                type: Boolean,
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
        mounted(){
            this.eventBus.$emit("toSon", this.selected)

            this.eventBus.$on("toParent", (data)=>{
                let copyProps = JSON.parse(JSON.stringify(this.selected))
                // 处理数据
                if(data.visible){
                    let showArray = []
                    if(this.single){
                        showArray[0] = data.itemKey
                    } else {
                        copyProps.push(data.itemKey)
                        showArray = [...new Set(copyProps)]
                    }

                    this.eventBus.$emit("toSon", showArray)
                    this.$emit('update:selected', showArray)

                } else {
                    copyProps = copyProps.filter(item => item !== data.itemKey)
                    this.eventBus.$emit("toSon", copyProps)

                    this.$emit('update:selected', copyProps)
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>
