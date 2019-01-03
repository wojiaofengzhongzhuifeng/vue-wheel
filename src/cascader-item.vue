<template>
    <!--2添加2-->
    <div class="cascader-item-wrapper" ref="cascaderItemWrapper" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="itemLeft in items" @click="leftSelected=itemLeft">
                {{itemLeft.name}}
                <w-icon iconName="right" v-if="itemLeft.children"></w-icon>
            </div>
        </div>
        <div class="right" v-if="leftSelected && leftSelected.children">
            <!--2添加3-->
            <cascader-item :items="leftSelected.children"  :height="height"></cascader-item>
        </div>
    </div>
</template>

<script>
    import Icon from "./icon"
    export default {
        components:{
            "w-icon": Icon,
        },
        name:"cascaderItem",
        props:{
            items:{
                type: Array,
            },
            // 2添加1
            height:{
                type: String,
            }
        },
        // 2添加2
        // mounted(){
        //     this.$refs.cascaderItemWrapper.style.height = this.height;
        // },
        data(){
            return {
                leftSelected:null,
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "./var";
    .cascader-item-wrapper{
        display: flex;
        position: absolute;
        z-index: 100;
        background: white;
        min-width:100px;
        height:100px;
        .left{
            box-shadow: $box-shadow;
            padding: 0.5em 1em;
            cursor: pointer;
            margin-right:1px;

            .label{
                padding:0.2em 0;
            }
        }
        .w-icon{
            transform: scale(0.5);
        }
    }
</style>
