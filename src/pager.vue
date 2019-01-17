<template>
    <div class="pager-wrapper">
        <span class="left item" @click="prePage">
            <icon icon-name="left"></icon>
        </span>
        <span v-for="page in pageArray" class="item">
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
                return [1, this.currentPage - 1, this.currentPage ,this.currentPage + 1,this.totalPage]
            }
        },
        methods:{
            prePage(){
                const newPage = this.currentPage - 1
                this.$emit("update:currentPage", newPage)
            },
            nextPage(){
                const newPage = this.currentPage + 1
                this.$emit("update:currentPage", newPage)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/var";
    .pager-wrapper{
        .item{
            cursor: pointer;
            border: 1px solid red;
            display: inline-flex;
            justify-content: center;
            align-content: center;
            margin: 0 5px;
            min-width: 20px;
            height:20px;
        }
    }
</style>
