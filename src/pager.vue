<template>
    <div class="pager-wrapper">
        <span class="left item" @click="prePage">
            <icon icon-name="left"></icon>
        </span>
        <span v-for="page in pageArray" class="item" :class="{active: currentPage=== page}" @click="changePage(page)">
            {{page}}
        </span>
        <span class="right item" @click="nextPage">
            <icon icon-name="right"></icon>
        </span>
    </div>
</template>

<script>
    import Icon from "./icon"
    export default {
        components:{
            Icon
        },
        props:{
            totalPage:{
                type: Number,
            },
            currentPage:{
                type: Number,
                default:1
            },
            hideIfOnePage:{
                type: Boolean,
                default: true,
            }
        },
        computed:{
            pageArray(){
                // currentPage 只能是【1，20】
                let currentPage
                if(this.currentPage < 1){
                    currentPage = 1
                } else if (this.currentPage > this.totalPage){
                    currentPage = this.totalPage
                } else {
                    currentPage = this.currentPage
                }

                //
                const result = [1,currentPage - 2,currentPage - 1 , currentPage,currentPage + 1 ,currentPage + 2,this.totalPage]
                const result1 = this.unique(result)
                const reuslt2 = result1.filter((number)=>{
                    if(number >= 1 && number <= this.totalPage){
                        return true
                    } else {
                        return false
                    }
                })
                const result3 = reuslt2.reduce((pre, current, index)=>{
                    pre.push(current)
                    if(reuslt2[index + 1] - reuslt2[index] > 1){
                        pre.push("...")
                    }
                    return pre
                }, [])
                return result3
            }
        },
        methods:{
            prePage(){
                let newPage = this.currentPage - 1
                if(newPage < 1){
                    newPage = 1
                }
                this.$emit("update:currentPage", newPage)
            },
            nextPage(){
                let newPage = this.currentPage + 1
                if(newPage > this.totalPage){
                    newPage = this.totalPage
                }
                this.$emit("update:currentPage", newPage)
            },
            unique(array){
                return [...new Set(array)]
            },
            changePage(number){
                this.$emit("update:currentPage", number)

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/var";
    .pager-wrapper{
        .item{
            user-select: none;
            cursor: pointer;
            border: 1px solid red;
            display: inline-flex;
            justify-content: center;
            align-content: center;
            margin: 0 5px;
            min-width: 20px;
            height:20px;
            &.active{
                background: red;
            }
        }
    }
</style>
