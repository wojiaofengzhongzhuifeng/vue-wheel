<template>
    <!--2添加2-->
    <div class="cascader-item-wrapper" ref="cascaderItemWrapper" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="itemLeft in items" @click="onClickItem(itemLeft, level)">
                {{itemLeft.name}}
                <w-icon iconName="right" v-if="itemLeft.children"></w-icon>
            </div>
        </div>
        <div class="right" v-if='rightItems'>
            <!--2添加3-->
            <cascader-item :items="rightItems"  :height="height" :selected="selected" :level="level+ 1" @update:selected="onUpdateSelected"></cascader-item>
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
            },
            selected:{
                type: Array,
            },
            level:{
                type:Number,
                default: 0
            },
        },
        // 2添加2
        // mounted(){
        //     this.$refs.cascaderItemWrapper.style.height = this.height;
        // },
        computed: {
            rightItems () {
                console.log(this.selected);
                let currentSelected = this.selected[this.level]
                if (currentSelected && currentSelected.children) {
                    return currentSelected.children
                } else {
                    return null
                }
            }
        },
        data(){
            return {
                leftSelected:null,
            }
        },
        methods:{
            onClickItem(item, level){
                const copySelected = JSON.parse(JSON.stringify(this.selected))
                copySelected[level] = item;
                copySelected.splice(level + 1);
                const test2 = copySelected
                console.log(1);
                this.$emit("update:selected", test2);
                this.leftSelected=item
            },
            onUpdateSelected (newSelected) {
                console.log(2);
                this.$emit('update:selected', newSelected)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./var";
    .cascader-item-wrapper{
        display: flex;
        /*position: absolute;*/
        /*z-index: 100;*/
        background: white;
        min-width:100px;
        height:100px;
        .left{
            box-shadow: $box-shadow;
            padding: 0.5em 1em;
            cursor: pointer;
            margin-right:1px;
            overflow: auto;
            .label{
                padding:0.2em 0;
            }
        }
        .w-icon{
            transform: scale(0.5);
        }
    }
</style>
