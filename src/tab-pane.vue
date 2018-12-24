<template>
    <div class="tabPane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        inject: ["eventHi"],

        data() {
            return {
                active: {
                    type: Boolean,
                    default: false,
                }
            }
        },

        props:{
            name: {
                type: [String, Number],
                required: true,
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

        created() {
            this.eventHi.$on("update:selectedData", (value)=>{
                this.active = this.name === value
            })
        },
    }
</script>

<style lang="scss" scoped>
    .tabPane{
        &.active{
        }
    }
</style>
