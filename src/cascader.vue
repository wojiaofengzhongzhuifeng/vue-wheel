<template>
    <div class="cascader-wrapper">
        <div class="popover" @click="visibleCascader = !visibleCascader">
            {{showCascader}}

        </div>
        <cascader-item :load-data="loadData" :items="source" v-if="visibleCascader" :height="height" :selected="selected" @update:selected="onUpdateSelected"></cascader-item>

    </div>
</template>

<script>
    /*
    * 1. 什么时候用递归？ 不知道需要循环几次
    * 2. 给递归的组件添加style  2添加
    * 3. vue 数组进行修改需要注意到的地方 3地方
    * 4. 使用异步获取cascader的数据 4数据
    * */
    import CascaderItem from "./cascader-item"
    export default {
        components:{
            "cascader-item":CascaderItem,
        },
        data(){
            return {
                visibleCascader: false
            }
        },
        props:{
            source: {
                type: Array,
            },
            height:{
                type: String,
            },
            selected:{
                type: Array,
                default: [],
            },
            loadData:{
                type: Function,
            }
        },
        methods: {
            onUpdateSelected (newSelected) {
                this.$emit('update:selected', newSelected)
                const last = newSelected[newSelected.length - 1]

                let simplest = (children, id) => {
                    return children.filter(item => item.id === id)[0]
                }


                let complex = (children, id) => {
                    let noChildren = []
                    let hasChildren = []
                    children.forEach(item => {
                        if (item.children) {
                            hasChildren.push(item)
                        } else {
                            noChildren.push(item)
                        }
                    })
                    let found = simplest(noChildren, id)
                    if (found) {
                        return found
                    } else {
                        found = simplest(hasChildren, id)
                        if (found) { return found }
                        else {
                            for (let i = 0; i < hasChildren.length; i++) {
                                found = complex(hasChildren[i].children, id)
                                if (found) {
                                    return found
                                }
                            }
                            return undefined
                        }
                    }
                }

                let updateSource = (xxx)=>{
                    const copy = JSON.parse(JSON.stringify(this.source))
                    let  toUpdate = complex(copy, last.id)
                    // this.$set(toUpdate, "children", xxx)
                    toUpdate.children = xxx
                    this.$emit("update:source", copy)
                }
                if(!last.isLeaf){
                    this.loadData && this.loadData(last, updateSource)
                }
            }
        },
        computed:{
            showCascader(){
                let text = ""
                this&& this.selected&& this.selected.forEach((obj)=>{
                    text +=  obj.name + "/"
                })
                return text.slice(0, text.length- 1)
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "var";
    .cascader-wrapper{
        position: relative;
        .popover{
            max-width:300px;
            height:32px;
            border:1px solid red;
            line-height: $line-height;
        }
        .selectArea{
            display: flex;
        }

    }
</style>
