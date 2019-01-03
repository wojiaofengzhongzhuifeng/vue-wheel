<template>
    <div class="cascader-item-wrapper">
        <div class="left">
            <div class="label" v-for="itemLeft in items" @click="leftSelected=itemLeft">
                {{itemLeft.name}}
            </div>
        </div>
        <div class="right" v-if="leftSelected && leftSelected.children">
            <cascader-item :items="leftSelected.children"></cascader-item>
        </div>
    </div>
</template>

<script>
    export default {
        name:"cascaderItem",
        props:{
            items:{
                type: Array,
            }
        },
        data(){
            return {
                leftSelected:null,
            }
        },
    }
</script>

<style lang="scss" scoped>
    .cascader-item-wrapper{
        display: flex;
        > div{
        }
    }
</style>
