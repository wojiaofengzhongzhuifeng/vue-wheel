<template>
    <!--2添加2-->
    <div class="cascader-item-wrapper" ref="cascaderItemWrapper" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="itemLeft in items" @click="onClickItem(itemLeft, level)">
                <span>
                                    {{itemLeft.name}}
                </span>
                <w-icon iconName="right" v-if="loadData? !itemLeft.isLeaf : itemLeft.children"></w-icon>
            </div>
        </div>
        <div class="right" v-if='rightItems'>
            <!--2添加3-->
            <cascader-item :items="rightItems"  :height="height" :selected="selected" :level="level+ 1" @update:selected="onUpdateSelected" :load-data="loadData"></cascader-item>
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
            loadData:{
                type: Function,
            }
        },
        // 2添加2
        // mounted(){
        //     this.$refs.cascaderItemWrapper.style.height = this.height;
        // },
        computed: {
            rightItems () {
                // let currentSelected = this.selected[this.level]
                // if (currentSelected && currentSelected.children) {
                //     return currentSelected.children
                // } else {
                //     return null
                // }

                if (this.selected[this.level]) {
                    let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
                    console.log(selected);

                    if (selected && selected[0].children && selected[0].children.length > 0) {
                        return selected[0].children
                    }
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
                this.$emit("update:selected", test2);
                this.leftSelected=item
            },
            onUpdateSelected (newSelected) {
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
            cursor: pointer;
            margin-right:1px;
            overflow: auto;
            .label{
                display: flex;
                align-items: center;
                user-select: none;
                padding:0.5em;
                padding-left:1em;
                &:hover{
                    background: $hover-background;
                }
                .w-icon{
                    margin-left: auto;
                    transform: scale(0.5);
                }
            }
        }

    }
</style>
